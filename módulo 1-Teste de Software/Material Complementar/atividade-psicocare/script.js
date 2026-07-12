'use strict';

const APP_ENV = 'test';
const STORAGE_PREFIX = `psicocare_${APP_ENV}_`;
const USERS_KEY = `${STORAGE_PREFIX}users`;
const SECURITY_KEY = `${STORAGE_PREFIX}login_security`;
const LOGS_KEY = `${STORAGE_PREFIX}login_logs`;
const SESSION_KEY = `${STORAGE_PREFIX}session`;

const MAX_ATTEMPTS = 3;
const BLOCK_TIME_MS = 15 * 60 * 1000;
const MAX_LOGS = 200;

const DEFAULT_USERS = [
    {
        id: 'test-admin',
        fullName: 'Psicólogo Administrador',
        username: 'admin',
        email: 'admin@psicocare.com',
        password: 'admin123',
        role: 'Psicólogo (Administrador)',
        crp: '02/00001',
        specialty: 'Administração clínica'
    },
    {
        id: 'test-reception',
        fullName: 'Recepção PsicoCare',
        username: 'recepcao',
        email: 'recepcao@psicocare.com',
        password: 'recep123',
        role: 'Recepcionista',
        crp: 'Não se aplica',
        specialty: 'Atendimento'
    },
    {
        id: 'test-patient',
        fullName: 'Paciente de Teste',
        username: 'paciente',
        email: 'paciente@psicocare.com',
        password: 'paciente123',
        role: 'Paciente',
        crp: 'Não se aplica',
        specialty: 'Não se aplica'
    }
];

function readJson(key, fallback) {
    try {
        const value = localStorage.getItem(key);
        return value ? JSON.parse(value) : fallback;
    } catch (error) {
        console.error(`Não foi possível ler ${key}:`, error);
        return fallback;
    }
}

function writeJson(key, value) {
    try {
        localStorage.setItem(key, JSON.stringify(value));
        return true;
    } catch (error) {
        console.error(`Não foi possível salvar ${key}:`, error);
        return false;
    }
}

function initializeUsers() {
    const savedUsers = readJson(USERS_KEY, []);
    const usersById = new Map(savedUsers.map((user) => [user.id, user]));

    DEFAULT_USERS.forEach((user) => {
        if (!usersById.has(user.id)) {
            usersById.set(user.id, user);
        }
    });

    const mergedUsers = Array.from(usersById.values());
    writeJson(USERS_KEY, mergedUsers);
    return mergedUsers;
}

function normalizeIdentifier(value) {
    return value.trim().toLowerCase();
}

function escapeHtml(value) {
    return String(value)
        .replaceAll('&', '&amp;')
        .replaceAll('<', '&lt;')
        .replaceAll('>', '&gt;')
        .replaceAll('"', '&quot;')
        .replaceAll("'", '&#039;');
}

function formatRemainingTime(milliseconds) {
    const totalSeconds = Math.max(0, Math.ceil(milliseconds / 1000));
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function formatDateTime(isoDate) {
    return new Intl.DateTimeFormat('pt-BR', {
        dateStyle: 'short',
        timeStyle: 'medium'
    }).format(new Date(isoDate));
}

function getSecurityState(identifier) {
    const allStates = readJson(SECURITY_KEY, {});
    return allStates[identifier] || { attempts: 0, blockedUntil: null };
}

function saveSecurityState(identifier, state) {
    const allStates = readJson(SECURITY_KEY, {});
    allStates[identifier] = state;
    writeJson(SECURITY_KEY, allStates);
}

function resetSecurityState(identifier) {
    saveSecurityState(identifier, { attempts: 0, blockedUntil: null });
}

function registerFailedAttempt(identifier) {
    const state = getSecurityState(identifier);
    const attempts = (state.attempts || 0) + 1;

    if (attempts >= MAX_ATTEMPTS) {
        const blockedUntil = Date.now() + BLOCK_TIME_MS;
        const blockedState = { attempts: 0, blockedUntil };
        saveSecurityState(identifier, blockedState);
        return blockedState;
    }

    const updatedState = { attempts, blockedUntil: null };
    saveSecurityState(identifier, updatedState);
    return updatedState;
}

function addAuditLog({ identifier, result, elapsedMs }) {
    const logs = readJson(LOGS_KEY, []);
    logs.unshift({
        timestamp: new Date().toISOString(),
        identifier,
        result,
        elapsedMs: Math.round(elapsedMs)
    });
    writeJson(LOGS_KEY, logs.slice(0, MAX_LOGS));
}

function showMessage(element, text, type = 'error') {
    if (!element) return;
    element.textContent = text;
    element.className = `message message--${type}`;
    element.hidden = false;
}

function hideMessage(element) {
    if (!element) return;
    element.hidden = true;
    element.textContent = '';
    element.className = 'message';
}

function setupPasswordToggles() {
    document.querySelectorAll('[data-password-toggle]').forEach((button) => {
        button.addEventListener('click', () => {
            const input = document.getElementById(button.dataset.passwordToggle);
            if (!input) return;

            const isHidden = input.type === 'password';
            input.type = isHidden ? 'text' : 'password';
            button.textContent = isHidden ? 'Ocultar' : 'Mostrar';
            button.setAttribute('aria-label', isHidden ? 'Ocultar senha' : 'Mostrar senha');
        });
    });
}

function updateLoginButtonBlockState(identifier, loginButton, messageElement) {
    const state = getSecurityState(identifier);
    const now = Date.now();

    if (state.blockedUntil && state.blockedUntil > now) {
        loginButton.disabled = true;
        const remaining = state.blockedUntil - now;
        showMessage(messageElement, `Acesso temporariamente bloqueado. Tente novamente em ${formatRemainingTime(remaining)}.`, 'warning');
        return true;
    }

    if (state.blockedUntil && state.blockedUntil <= now) {
        resetSecurityState(identifier);
        hideMessage(messageElement);
    }

    loginButton.disabled = false;
    return false;
}

function renderAuditLogs() {
    const tableBody = document.getElementById('auditTableBody');
    if (!tableBody) return;

    const logs = readJson(LOGS_KEY, []).slice(0, 20);
    if (logs.length === 0) {
        tableBody.innerHTML = '<tr><td colspan="4" class="empty-state">Nenhuma tentativa registrada.</td></tr>';
        return;
    }

    tableBody.innerHTML = logs.map((log) => {
        const resultClass = log.result === 'Sucesso' ? 'status status--success' : 'status status--error';
        return `
            <tr>
                <td>${escapeHtml(formatDateTime(log.timestamp))}</td>
                <td>${escapeHtml(log.identifier)}</td>
                <td><span class="${resultClass}">${escapeHtml(log.result)}</span></td>
                <td>${escapeHtml(log.elapsedMs)} ms</td>
            </tr>
        `;
    }).join('');
}

function showDashboard(session) {
    const authCard = document.getElementById('authCard');
    const dashboard = document.getElementById('dashboard');
    const userName = document.getElementById('sessionUserName');
    const userRole = document.getElementById('sessionUserRole');
    const auditCard = document.getElementById('auditCard');

    if (!dashboard || !authCard) return;

    authCard.hidden = true;
    dashboard.hidden = false;
    userName.textContent = session.fullName;
    userRole.textContent = session.role;

    const isAdmin = session.role.toLowerCase().includes('administrador');
    auditCard.hidden = !isAdmin;
    if (isAdmin) renderAuditLogs();
}

function showLogin() {
    const authCard = document.getElementById('authCard');
    const dashboard = document.getElementById('dashboard');
    if (!dashboard || !authCard) return;

    sessionStorage.removeItem(SESSION_KEY);
    dashboard.hidden = true;
    authCard.hidden = false;
}

function initializeLoginPage() {
    const form = document.getElementById('loginForm');
    const userInput = document.getElementById('loginUser');
    const passwordInput = document.getElementById('loginPassword');
    const messageElement = document.getElementById('loginMessage');
    const loginButton = document.getElementById('loginButton');
    const logoutButton = document.getElementById('logoutButton');
    const clearLogsButton = document.getElementById('clearLogsButton');

    if (!form || !userInput || !passwordInput || !loginButton) return;

    const savedSession = sessionStorage.getItem(SESSION_KEY);
    if (savedSession) {
        try {
            showDashboard(JSON.parse(savedSession));
        } catch {
            sessionStorage.removeItem(SESSION_KEY);
        }
    }

    let blockTimer = null;

    function refreshBlockState() {
        const identifier = normalizeIdentifier(userInput.value);
        if (!identifier) {
            loginButton.disabled = false;
            return;
        }

        const blocked = updateLoginButtonBlockState(identifier, loginButton, messageElement);
        if (!blocked && blockTimer) {
            clearInterval(blockTimer);
            blockTimer = null;
        }
    }

    userInput.addEventListener('input', () => {
        hideMessage(messageElement);
        refreshBlockState();
    });

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const startedAt = performance.now();
        hideMessage(messageElement);

        if (!form.checkValidity()) {
            form.reportValidity();
            return;
        }

        const identifier = normalizeIdentifier(userInput.value);
        const password = passwordInput.value;

        if (updateLoginButtonBlockState(identifier, loginButton, messageElement)) {
            if (!blockTimer) {
                blockTimer = setInterval(refreshBlockState, 1000);
            }
            addAuditLog({ identifier, result: 'Bloqueado', elapsedMs: performance.now() - startedAt });
            return;
        }

        const users = initializeUsers();
        const user = users.find((item) => {
            const matchesIdentifier = normalizeIdentifier(item.username) === identifier || normalizeIdentifier(item.email) === identifier;
            return matchesIdentifier && item.password === password;
        });

        const elapsedMs = performance.now() - startedAt;

        if (!user) {
            const state = registerFailedAttempt(identifier);
            addAuditLog({ identifier, result: 'Falha', elapsedMs });
            passwordInput.value = '';
            passwordInput.focus();

            if (state.blockedUntil) {
                loginButton.disabled = true;
                showMessage(messageElement, 'Acesso temporariamente bloqueado após 3 tentativas incorretas. Tente novamente em 15:00.', 'warning');
                if (!blockTimer) {
                    blockTimer = setInterval(refreshBlockState, 1000);
                }
                return;
            }

            const remainingAttempts = MAX_ATTEMPTS - state.attempts;
            showMessage(messageElement, `Usuário ou senha inválidos. Você possui ${remainingAttempts} tentativa(s) antes do bloqueio.`, 'error');
            return;
        }

        resetSecurityState(identifier);
        addAuditLog({ identifier, result: 'Sucesso', elapsedMs });

        const session = {
            userId: user.id,
            fullName: user.fullName,
            role: user.role,
            authenticatedAt: new Date().toISOString()
        };

        sessionStorage.setItem(SESSION_KEY, JSON.stringify(session));
        form.reset();
        showDashboard(session);
    });

    logoutButton?.addEventListener('click', () => {
        showLogin();
        showMessage(messageElement, 'Logout realizado com sucesso.', 'success');
    });

    clearLogsButton?.addEventListener('click', () => {
        localStorage.removeItem(LOGS_KEY);
        renderAuditLogs();
    });
}

function initializeRegisterPage() {
    const form = document.getElementById('registerForm');
    const messageElement = document.getElementById('registerMessage');
    const passwordInput = document.getElementById('registerPassword');
    const confirmPasswordInput = document.getElementById('confirmPassword');

    if (!form || !passwordInput || !confirmPasswordInput) return;

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        hideMessage(messageElement);

        if (!form.checkValidity()) {
            form.reportValidity();
            return;
        }

        if (passwordInput.value !== confirmPasswordInput.value) {
            showMessage(messageElement, 'As senhas informadas não são iguais.', 'error');
            confirmPasswordInput.focus();
            return;
        }

        const users = initializeUsers();
        const email = normalizeIdentifier(document.getElementById('email').value);
        const username = normalizeIdentifier(document.getElementById('username').value);

        const duplicated = users.some((user) => normalizeIdentifier(user.email) === email || normalizeIdentifier(user.username) === username);
        if (duplicated) {
            showMessage(messageElement, 'Não foi possível concluir o cadastro. Verifique os dados informados.', 'error');
            return;
        }

        const newUser = {
            id: `registered-${Date.now()}`,
            fullName: document.getElementById('fullName').value.trim(),
            email,
            phone: document.getElementById('phone').value.trim(),
            crp: document.getElementById('crp').value.trim(),
            specialty: document.getElementById('specialty').value.trim(),
            username,
            password: passwordInput.value,
            role: 'Psicólogo',
            createdAt: new Date().toISOString(),
            environment: APP_ENV
        };

        const saved = writeJson(USERS_KEY, [...users, newUser]);
        if (!saved) {
            showMessage(messageElement, 'Não foi possível salvar o cadastro neste navegador.', 'error');
            return;
        }

        form.reset();
        showMessage(messageElement, 'Cadastro realizado com sucesso. Você já pode acessar a página de login.', 'success');
    });
}

document.addEventListener('DOMContentLoaded', () => {
    initializeUsers();
    setupPasswordToggles();

    const page = document.body.dataset.page;
    if (page === 'login') initializeLoginPage();
    if (page === 'register') initializeRegisterPage();
});
