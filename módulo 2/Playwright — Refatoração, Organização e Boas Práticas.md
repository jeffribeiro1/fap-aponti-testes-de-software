# Playwright — Refatoração, Organização e Boas Práticas

## 📚 Introdução

Em projetos de automação com **Playwright**, organização, refatoração e boas práticas são importantes para manter os testes:

* Legíveis
* Reutilizáveis
* Estáveis
* Independentes
* Fáceis de manter
* Fáceis de entender

Conforme a quantidade de testes aumenta, colocar toda a lógica dentro dos arquivos `.spec.ts` pode deixar o projeto difícil de manter.

---

# 🔄 O que é refatoração?

**Refatoração** é o processo de melhorar a estrutura interna do código sem alterar seu comportamento esperado.

O objetivo é deixar o código:

* Mais organizado
* Mais simples
* Mais reutilizável
* Mais fácil de manter
* Menos repetitivo

Exemplo:

### ❌ Antes

```typescript
test('Login administrador', async ({ page }) => {
    await page.goto('http://localhost:3000');

    await page.getByLabel('Usuário').fill('admin');
    await page.getByLabel('Senha').fill('123456');

    await page.getByRole('button', {
        name: 'Entrar'
    }).click();
});
```

### ✅ Depois

```typescript
const BASE_URL = 'http://localhost:3000';
const USUARIO_ADMIN = 'admin';
const SENHA_ADMIN = '123456';

test('Login administrador', async ({ page }) => {
    await page.goto(BASE_URL);

    await page.getByLabel('Usuário').fill(USUARIO_ADMIN);
    await page.getByLabel('Senha').fill(SENHA_ADMIN);

    await page.getByRole('button', {
        name: 'Entrar'
    }).click();
});
```

O comportamento continua o mesmo, mas os valores importantes estão centralizados.

---

# ♻️ DRY — Don't Repeat Yourself

**DRY** significa:

> **Don't Repeat Yourself**

Em português:

> **Não se repita.**

É um princípio de desenvolvimento de software que busca evitar a duplicação desnecessária de código, regras, informações e comportamentos.

Em automação com Playwright, o DRY ajuda a evitar que a mesma lógica seja escrita várias vezes.

---

# ❌ Exemplo sem DRY

Imagine que vários testes precisam realizar o login:

```typescript
test('Cadastrar paciente', async ({ page }) => {
    await page.getByLabel('Usuário').fill('admin');

    await page.getByLabel('Senha').fill('123456');

    await page.getByRole('button', {
        name: 'Entrar'
    }).click();

    // cadastro
});
```

Outro teste:

```typescript
test('Editar paciente', async ({ page }) => {
    await page.getByLabel('Usuário').fill('admin');

    await page.getByLabel('Senha').fill('123456');

    await page.getByRole('button', {
        name: 'Entrar'
    }).click();

    // edição
});
```

E outro:

```typescript
test('Excluir paciente', async ({ page }) => {
    await page.getByLabel('Usuário').fill('admin');

    await page.getByLabel('Senha').fill('123456');

    await page.getByRole('button', {
        name: 'Entrar'
    }).click();

    // exclusão
});
```

Temos a mesma lógica repetida três vezes.

---

# ✅ Aplicando DRY

Podemos centralizar o comportamento utilizando um **Page Object**.

```typescript
export class LoginPage {
    constructor(private page: Page) {}

    async realizarLogin(
        usuario: string,
        senha: string
    ) {
        await this.page
            .getByLabel('Usuário')
            .fill(usuario);

        await this.page
            .getByLabel('Senha')
            .fill(senha);

        await this.page
            .getByRole('button', {
                name: 'Entrar'
            })
            .click();
    }
}
```

Agora os testes podem reutilizar a mesma lógica:

```typescript
await loginPage.realizarLogin(
    USUARIO_ADMIN,
    SENHA_ADMIN
);
```

Assim, se o botão de login mudar de:

```text
Entrar
```

para:

```text
Acessar
```

podemos alterar o locator dentro do `LoginPage`, sem precisar procurar e modificar todos os testes.

---

# 🎯 DRY e funções reutilizáveis

Outra forma de aplicar DRY é criar funções para ações repetitivas.

### ❌ Código repetido

```typescript
await page
    .getByLabel('Nome')
    .fill('João');

await page
    .getByLabel('CPF')
    .fill('12345678900');
```

Se essa operação aparecer em vários testes, podemos criar uma função:

```typescript
async function preencherPaciente(
    page: Page,
    nome: string,
    cpf: string
) {
    await page
        .getByLabel('Nome')
        .fill(nome);

    await page
        .getByLabel('CPF')
        .fill(cpf);
}
```

Uso:

```typescript
await preencherPaciente(
    page,
    'João',
    '12345678900'
);
```

---

# 📦 DRY e dados de teste

O DRY também pode ser aplicado aos dados.

### ❌ Evite

```typescript
const usuario = 'admin';
const senha = '123456';
```

Repetidos em vários arquivos.

### ✅ Centralize

Arquivo:

```text
fixtures/
└── usuarios.ts
```

Conteúdo:

```typescript
export const USUARIO_ADMIN = 'admin';

export const SENHA_ADMIN = '123456';
```

Depois:

```typescript
import {
    USUARIO_ADMIN,
    SENHA_ADMIN
} from '../fixtures/usuarios';
```

Uso:

```typescript
await loginPage.realizarLogin(
    USUARIO_ADMIN,
    SENHA_ADMIN
);
```

---

# 🔤 UPPER_SNAKE_CASE

Para constantes, podemos utilizar **UPPER_SNAKE_CASE**.

Exemplo:

```typescript
const BASE_URL = 'http://localhost:3000';

const USUARIO_ADMIN = 'admin';

const SENHA_ADMIN = '123456';

const TIMEOUT_PADRAO = 5000;
```

Formato:

```text
NOME_EM_MAIUSCULAS
```

com as palavras separadas por `_`.

---

# 🐪 camelCase

Para variáveis e funções, normalmente utilizamos **camelCase**.

Exemplo:

```typescript
const usuarioAtual = 'admin';

const senhaUsuario = '123456';

async function realizarLogin() {
    // ...
}
```

---

# 🏷️ PascalCase

Para classes e tipos:

```typescript
class LoginPage {
    // ...
}
```

```typescript
type Usuario = {
    nome: string;
    senha: string;
};
```

---

# 📊 Convenções de nomenclatura

| Convenção          | Exemplo                 | Uso comum           |
| ------------------ | ----------------------- | ------------------- |
| `UPPER_SNAKE_CASE` | `BASE_URL`              | Constantes          |
| `camelCase`        | `realizarLogin()`       | Funções e variáveis |
| `PascalCase`       | `LoginPage`             | Classes e tipos     |
| `kebab-case`       | `login-sucesso.spec.ts` | Arquivos            |

O mais importante é manter uma **convenção consistente no projeto**.

---

# 🔁 Hooks no Playwright

Hooks permitem executar ações antes ou depois dos testes.

Os principais são:

```text
beforeEach
afterEach
beforeAll
afterAll
```

---

# 🔄 beforeEach

Executado antes de cada teste.

```typescript
test.beforeEach(async ({ page }) => {
    await page.goto(BASE_URL);
});
```

Exemplo:

```typescript
test.beforeEach(async ({ page }) => {
    await page.goto(BASE_URL);
});

test('Login válido', async ({ page }) => {
    // teste
});

test('Login inválido', async ({ page }) => {
    // teste
});
```

Fluxo:

```text
beforeEach
    ↓
Teste 1

beforeEach
    ↓
Teste 2
```

---

# 🔚 afterEach

Executado depois de cada teste.

```typescript
test.afterEach(async () => {
    console.log('Teste finalizado');
});
```

Deve ser utilizado somente quando realmente existir uma ação de limpeza ou finalização necessária.

---

# 🚀 beforeAll

Executado uma vez antes dos testes daquele escopo.

```typescript
test.beforeAll(async () => {
    console.log('Iniciando testes');
});
```

Fluxo:

```text
beforeAll
    ↓
Teste 1
    ↓
Teste 2
    ↓
Teste 3
```

---

# 🛑 afterAll

Executado uma vez após os testes daquele escopo.

```typescript
test.afterAll(async () => {
    console.log('Finalizando testes');
});
```

Fluxo:

```text
beforeAll
    ↓
Teste 1
    ↓
Teste 2
    ↓
Teste 3
    ↓
afterAll
```

---

# 🆚 beforeEach x beforeAll

| Hook         | Execução                |
| ------------ | ----------------------- |
| `beforeEach` | Antes de cada teste     |
| `afterEach`  | Depois de cada teste    |
| `beforeAll`  | Uma vez antes da suíte  |
| `afterAll`   | Uma vez depois da suíte |

---

# ⚠️ Cuidado com hooks

Não coloque no `beforeEach` ações que nem todos os testes precisam.

### ❌ Evite

```typescript
test.beforeEach(async ({ page }) => {
    await page.goto(BASE_URL);

    await loginPage.realizarLogin(
        USUARIO_ADMIN,
        SENHA_ADMIN
    );

    await page.getByRole('link', {
        name: 'Pacientes'
    }).click();

    await page.getByRole('button', {
        name: 'Novo paciente'
    }).click();
});
```

Se algum teste não precisar estar na tela de cadastro de paciente, ele estará executando ações desnecessárias.

Use hooks somente para comportamentos realmente compartilhados.

---

# 🧪 Independência dos testes

Os testes devem ser independentes sempre que possível.

### ❌ Evite

```text
Teste 1
   ↓
Cria usuário

Teste 2
   ↓
Usa usuário criado pelo Teste 1
```

Se o primeiro teste falhar, o segundo poderá falhar por consequência.

### ✅ Prefira

```text
Teste 1
└── prepara seus próprios dados

Teste 2
└── prepara seus próprios dados

Teste 3
└── prepara seus próprios dados
```

---

# 🧱 Page Object Model

O **Page Object Model (POM)** permite separar a lógica de interação com a interface dos casos de teste.

Estrutura:

```text
projeto-playwright/
│
├── tests/
│   ├── login.spec.ts
│   └── pacientes.spec.ts
│
├── pages/
│   ├── LoginPage.ts
│   └── PacientesPage.ts
│
├── fixtures/
│   └── usuarios.ts
│
├── utils/
│   └── helpers.ts
│
├── playwright.config.ts
└── package.json
```

Exemplo:

```typescript
import { Page } from '@playwright/test';

export class LoginPage {
    constructor(private page: Page) {}

    async realizarLogin(
        usuario: string,
        senha: string
    ) {
        await this.page
            .getByLabel('Usuário')
            .fill(usuario);

        await this.page
            .getByLabel('Senha')
            .fill(senha);

        await this.page
            .getByRole('button', {
                name: 'Entrar'
            })
            .click();
    }
}
```

---

# 🔎 Locators confiáveis

Prefira locators que representam elementos de forma estável e próxima da experiência do usuário.

### ✅ Preferíveis

```typescript
page.getByRole('button', {
    name: 'Salvar'
});
```

```typescript
page.getByLabel('E-mail');
```

```typescript
page.getByText('Registro salvo com sucesso');
```

```typescript
page.getByPlaceholder('Digite seu e-mail');
```

```typescript
page.getByTestId('salvar-paciente');
```

### ⚠️ Evite seletores frágeis

```typescript
page.locator(
    'div:nth-child(3) > button'
);
```

---

# ⏱️ Evite waitForTimeout()

### ❌ Evite

```typescript
await page.waitForTimeout(5000);
```

### ✅ Prefira

```typescript
await expect(
    page.getByText('Registro salvo com sucesso')
).toBeVisible();
```

O Playwright possui mecanismos de auto-wait para diversas operações.

---

# 🧪 Utilize asserções

Um teste precisa verificar se o resultado esperado realmente aconteceu.

### ❌ Insuficiente

```typescript
await page.getByRole('button', {
    name: 'Salvar'
}).click();
```

### ✅ Melhor

```typescript
await page.getByRole('button', {
    name: 'Salvar'
}).click();

await expect(
    page.getByText('Registro salvo com sucesso')
).toBeVisible();
```

---

# 🔐 Proteção de credenciais

Nunca coloque credenciais reais diretamente no código.

### ❌ Evite

```typescript
const SENHA = 'MinhaSenhaReal123';
```

### ✅ Prefira

```typescript
const SENHA = process.env.TEST_PASSWORD;
```

Também não envie para o GitHub:

* Senhas
* Tokens
* API Keys
* Cookies
* Credenciais reais

---

# 📝 Nomes claros

### ❌ Evite

```typescript
test('teste 01', async ({ page }) => {
    // ...
});
```

### ✅ Prefira

```typescript
test(
    'Cadastrar paciente com dados válidos',
    async ({ page }) => {
        // ...
    }
);
```

O nome deve deixar claro **qual comportamento está sendo testado**.

---

# 📂 Organização dos testes

Uma estrutura possível:

```text
tests/
│
├── login/
│   ├── login-sucesso.spec.ts
│   └── login-falha.spec.ts
│
├── pacientes/
│   ├── cadastro.spec.ts
│   ├── edicao.spec.ts
│   └── exclusao.spec.ts
│
└── agenda/
    ├── cadastro.spec.ts
    └── conflito.spec.ts
```

---

# 🧭 test.describe()

Podemos agrupar testes relacionados utilizando `test.describe()`.

```typescript
test.describe('Módulo de pacientes', () => {

    test('Cadastrar paciente', async ({ page }) => {
        // ...
    });

    test('Editar paciente', async ({ page }) => {
        // ...
    });

    test('Excluir paciente', async ({ page }) => {
        // ...
    });

});
```

Também podemos utilizar hooks dentro do grupo:

```typescript
test.describe('Módulo de pacientes', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('/pacientes');
    });

    test('Cadastrar paciente', async ({ page }) => {
        // ...
    });

    test('Editar paciente', async ({ page }) => {
        // ...
    });

});
```

---

# 🏷️ Tags

Tags podem ajudar a organizar e filtrar testes.

Exemplo:

```typescript
test(
    'Cadastrar paciente @smoke',
    async ({ page }) => {
        // ...
    }
);
```

Exemplos de categorias:

```text
@smoke
@regression
@critical
@e2e
```

---

# 🧠 DRY não significa eliminar toda repetição

É importante entender que **DRY não significa transformar qualquer repetição em uma função ou classe**.

Uma abstração desnecessária pode deixar o código mais difícil de entender.

### ❌ Abstração exagerada

Criar uma função para uma ação extremamente simples que só é utilizada uma única vez pode não trazer benefício.

### ✅ Regra prática

Antes de criar uma abstração, pergunte:

* Essa lógica realmente se repete?
* Ela possui uma responsabilidade clara?
* A reutilização facilitará a manutenção?
* A abstração deixa o teste mais fácil de entender?

O objetivo do DRY é **reduzir duplicação significativa**, e não eliminar toda repetição visual do código.

---

# 📋 Checklist de boas práticas

* [ ] Utilizar DRY para evitar duplicação desnecessária
* [ ] Utilizar Page Objects quando fizer sentido
* [ ] Organizar testes por funcionalidade
* [ ] Manter testes independentes
* [ ] Utilizar `beforeEach` para preparação compartilhada
* [ ] Utilizar `beforeAll` apenas quando apropriado
* [ ] Evitar hooks desnecessariamente complexos
* [ ] Utilizar nomes claros
* [ ] Utilizar `UPPER_SNAKE_CASE` para constantes quando adotado pelo projeto
* [ ] Utilizar `camelCase` para funções e variáveis
* [ ] Utilizar `PascalCase` para classes e tipos
* [ ] Evitar código duplicado
* [ ] Utilizar locators confiáveis
* [ ] Evitar `waitForTimeout()` desnecessário
* [ ] Utilizar asserções
* [ ] Separar dados de teste quando necessário
* [ ] Proteger credenciais
* [ ] Evitar testes dependentes
* [ ] Refatorar gradualmente
* [ ] Executar os testes depois da refatoração

---

# 🚀 Resumo

Uma automação Playwright organizada pode seguir esta estrutura:

```text
Playwright
│
├── Testes
│   └── .spec.ts
│
├── Page Objects
│   └── pages/
│
├── Fixtures
│   └── fixtures/
│
├── Dados
│   └── data/
│
├── Helpers
│   └── utils/
│
├── Hooks
│   ├── beforeEach
│   ├── afterEach
│   ├── beforeAll
│   └── afterAll
│
├── DRY
│   └── Evitar duplicação
│
└── Configuração
    └── playwright.config.ts
```

## 🎯 Principais conceitos

| Conceito           | Objetivo                                  |
| ------------------ | ----------------------------------------- |
| Refatoração        | Melhorar a estrutura do código            |
| DRY                | Evitar duplicação desnecessária           |
| POM                | Separar interação da interface dos testes |
| `beforeEach`       | Preparar cada teste                       |
| `beforeAll`        | Executar preparação uma vez               |
| `afterEach`        | Executar ações após cada teste            |
| `afterAll`         | Executar ações ao final da suíte          |
| Fixtures           | Criar recursos reutilizáveis              |
| `UPPER_SNAKE_CASE` | Convenção para constantes                 |
| `camelCase`        | Convenção para funções e variáveis        |
| `PascalCase`       | Convenção para classes e tipos            |
| Locators           | Localizar elementos da página             |
| Assertions         | Validar resultados                        |

> **Uma boa automação com Playwright não é apenas aquela que funciona. Ela também deve ser organizada, reutilizável, legível, independente e fácil de manter.**
