Ciclo de Vida dos Testes – Tela de Login

## Descrição do Sistema

O sistema possui uma tela de autenticação onde o usuário deve informar seu login e senha para acessar as funcionalidades da aplicação. O sistema valida as credenciais cadastradas, exibe mensagens de erro quando necessário, bloqueia temporariamente o usuário após três tentativas consecutivas de login incorretas e permite logout a qualquer momento.

---

# 1. Análise dos Requisitos e Critérios de Aceitação

## Requisitos Funcionais

- Autenticação por login e senha.
- Validação das credenciais cadastradas.
- Exibição de mensagens de erro para dados inválidos.
- Bloqueio temporário de 10 minutos após 3 tentativas incorretas.
- Logout disponível a qualquer momento.

## Requisitos Não Funcionais

- Tempo de resposta inferior a 2 segundos.
- Mensagens de erro não devem expor informações sensíveis.
- Compatibilidade com os principais navegadores.
- Registro (log) de todas as tentativas de login.

## Critérios de Aceitação

| ID | Critério |
|----|----------|
| CA01 | Usuário com credenciais válidas deve acessar o sistema. |
| CA02 | Usuário com senha inválida deve receber mensagem de erro. |
| CA03 | Após três tentativas inválidas, o usuário deve ser bloqueado temporariamente. |
| CA04 | O logout deve encerrar a sessão do usuário. |
| CA05 | O login deve ser concluído em menos de 2 segundos. |

---

# 2. Planejamento da Estratégia de Testes

## Objetivo

Validar o funcionamento da autenticação e garantir segurança no acesso ao sistema.

## Tipos de Teste

- Teste Funcional
- Teste de Validação
- Teste de Segurança
- Teste de Performance
- Teste de Compatibilidade

## Prioridade

| Funcionalidade | Prioridade |
|---------------|------------|
| Login | Alta |
| Validação de senha | Alta |
| Bloqueio após tentativas | Alta |
| Logout | Média |
| Registro de logs | Média |

---

# 3. Casos de Teste

## CT001 – Login com credenciais válidas

### Pré-condição

Usuário cadastrado.

### Passos

1. Acessar a tela de login.
2. Informar login válido.
3. Informar senha válida.
4. Clicar em Entrar.

### Resultado Esperado

Sistema realiza login e redireciona para a página inicial.

---

## CT002 – Senha incorreta

### Passos

1. Informar login válido.
2. Digitar senha incorreta.
3. Clicar em Entrar.

### Resultado Esperado

Exibir mensagem:

"Usuário ou senha inválidos."

---

## CT003 – Login inexistente

### Passos

1. Informar um usuário não cadastrado.
2. Informar qualquer senha.
3. Clicar em Entrar.

### Resultado Esperado

Exibir mensagem de erro sem informar qual dado está incorreto.

---

## CT004 – Campos vazios

### Passos

1. Não preencher login.
2. Não preencher senha.
3. Clicar em Entrar.

### Resultado Esperado

Sistema informa que os campos são obrigatórios.

---

## CT005 – Bloqueio após três tentativas

### Passos

1. Digitar senha incorreta três vezes consecutivas.

### Resultado Esperado

Usuário bloqueado temporariamente.

---

## CT006 – Logout

### Passos

1. Realizar login.
2. Clicar em Logout.

### Resultado Esperado

Sessão encerrada e retorno à tela de login.

---

## CT007 – Tempo de resposta

### Objetivo

Verificar o desempenho do login.

### Resultado Esperado

Autenticação concluída em menos de 2 segundos.

---

## CT008 – Compatibilidade

### Objetivo

Executar o login em diferentes navegadores.

### Navegadores

- Google Chrome
- Microsoft Edge
- Mozilla Firefox
- Safari

### Resultado Esperado

Login funcionando corretamente em todos.

---

## CT009 – Registro de Logs

### Objetivo

Verificar se o sistema registra tentativas de login.

### Resultado Esperado

Toda tentativa deve ser registrada para auditoria.

---

# 4. Ambiente e Dados de Teste

## Ambiente

- Windows 11
- MacOs
- Google Chrome
- Microsoft Edge
- Mozilla Firefox
- Safari

## Dados de Teste

### Usuário válido

Login:

admin

Senha:

123456

### Usuário inválido

Login:

teste

Senha:

123

---

# 5. Simulação da Execução

| Caso | Resultado Esperado | Resultado Obtido | Status |
|------|--------------------|------------------|--------|
| CT001 | Login realizado | Login realizado | Aprovado |
| CT002 | Mensagem de erro | Mensagem exibida | Aprovado |
| CT003 | Acesso negado | Acesso negado | Aprovado |
| CT004 | Campos obrigatórios | Mensagem exibida | Aprovado |
| CT005 | Usuário bloqueado | Usuário bloqueado | Aprovado |
| CT006 | Logout realizado | Logout realizado | Aprovado |
| CT007 | Menos de 2 segundos | 1,4 segundos | Aprovado |
| CT008 | Compatível | Funcionou | Aprovado |
| CT009 | Log registrado | Registrado | Aprovado |

---

# 6. Status e Métricas

## Casos Criados

9

## Casos Executados

9

## Casos Aprovados

9

## Casos Reprovados

0

## Taxa de Sucesso

100%

---

# 7. Registro e Acompanhamento de Defeitos

## Defeito 001

**Título**

Mensagem de erro informa que o usuário não existe.

**Problema**

Essa informação pode facilitar ataques de tentativa de acesso.

**Gravidade**

Alta

**Status**

Corrigido

---

# 8. Encerramento do Ciclo de Testes

## Resultado

Todos os casos de teste foram executados.

As funcionalidades de login, logout, validação de credenciais, bloqueio de usuário, compatibilidade entre navegadores e registro de logs atenderam aos requisitos definidos.

## Lições Aprendidas

- Validar cenários positivos e negativos é essencial para garantir a segurança do sistema.
- Mensagens de erro devem ser genéricas para proteger informações dos usuários.
- O bloqueio após tentativas inválidas aumenta a segurança contra ataques de força bruta.
- O registro de logs facilita auditorias e investigações de incidentes.
- Testes de desempenho e compatibilidade garantem uma melhor experiência ao usuário.

---

# Fluxo do Ciclo de Vida dos Testes

```text
Análise dos Requisitos
          │
          ▼
Critérios de Aceitação
          │
          ▼
Planejamento dos Testes
          │
          ▼
Criação dos Casos de Teste
          │
          ▼
Preparação do Ambiente
          │
          ▼
Execução dos Testes
          │
          ▼
Registro dos Resultados
          │
          ▼
Registro dos Defeitos
          │
          ▼
Correção
          │
          ▼
Reteste
          │
          ▼
Encerramento do Ciclo
```
