# 🎭 Playwright

## O que é o Playwright?

O **Playwright** é um framework de automação de testes desenvolvido pela Microsoft. Ele permite automatizar aplicações web e realizar testes diretamente no navegador.

Com o Playwright é possível testar funcionalidades como:

* Login e logout
* Cadastro de usuários
* Preenchimento de formulários
* Cliques em botões
* Validação de mensagens
* Navegação entre páginas
* Testes de API
* Testes de diferentes navegadores
* Testes em diferentes tamanhos de tela

O Playwright pode trabalhar principalmente com:

* Chromium
* Firefox
* WebKit

---

## Para que serve o Playwright?

No contexto de **QA (Quality Assurance)**, o Playwright é utilizado principalmente para **automatizar testes**, reduzindo a necessidade de executar manualmente os mesmos cenários várias vezes.

Por exemplo, imagine um sistema que possui uma tela de login.

Um teste manual poderia ser:

1. Acessar o sistema.
2. Informar o usuário.
3. Informar a senha.
4. Clicar em "Entrar".
5. Verificar se o usuário foi direcionado para a página inicial.

Com Playwright, essas etapas podem ser automatizadas.

---

## Vantagens do Playwright

Algumas vantagens são:

* Automação de testes end-to-end.
* Suporte a Chromium, Firefox e WebKit.
* Execução rápida dos testes.
* Possibilidade de executar testes em paralelo.
* Captura de screenshots.
* Gravação de vídeos.
* Geração de relatórios.
* Suporte a TypeScript e JavaScript.
* Suporte a testes de API.
* Recursos para aguardar elementos automaticamente.

---

# Instalação

Para utilizar o Playwright em um projeto Node.js, primeiro é necessário ter o **Node.js** instalado.

Depois, podemos criar um projeto com:

```bash
npm init playwright@latest
```

Durante a instalação, algumas opções serão apresentadas, como:

* Linguagem do projeto
* Localização dos testes
* Instalação dos navegadores
* Configuração de CI

Para um projeto utilizando TypeScript, podemos selecionar **TypeScript**.

---

# Estrutura básica

Depois da instalação, o projeto pode possuir uma estrutura semelhante a:

```text
projeto/
├── tests/
│   └── exemplo.spec.ts
├── playwright.config.ts
├── package.json
├── package-lock.json
└── tsconfig.json
```

### `tests/`

Diretório onde normalmente ficam os arquivos de testes.

### `playwright.config.ts`

Arquivo utilizado para configurar o Playwright.

### `package.json`

Contém informações do projeto e suas dependências.

---

# Primeiro teste

Um teste simples pode ser criado desta forma:

```typescript
import { test, expect } from '@playwright/test';

test('deve acessar a página inicial', async ({ page }) => {
    await page.goto('https://example.com');

    await expect(page).toHaveTitle(/Example/);
});
```

## Explicando o código

### Importação

```typescript
import { test, expect } from '@playwright/test';
```

Importamos:

* `test`: utilizado para criar o caso de teste.
* `expect`: utilizado para realizar asserções.

---

### Criando o teste

```typescript
test('deve acessar a página inicial', async ({ page }) => {
```

O `test()` cria um caso de teste.

O texto:

```text
deve acessar a página inicial
```

é o nome do teste.

O `page` representa uma página do navegador.

---

### Acessando uma página

```typescript
await page.goto('https://example.com');
```

O método `goto()` acessa uma URL.

O `await` é utilizado porque a ação é assíncrona.

---

### Validando o título

```typescript
await expect(page).toHaveTitle(/Example/);
```

Essa linha verifica se o título da página contém o texto esperado.

Esse tipo de validação é chamado de **asserção**.

---

# Localizadores

Os **locators** são utilizados para encontrar elementos dentro da página.

Alguns exemplos:

```typescript
page.getByRole()
page.getByText()
page.getByLabel()
page.getByPlaceholder()
page.locator()
```

---

## `getByRole()`

Localiza elementos pelo papel que eles possuem na página.

Exemplo:

```typescript
await page.getByRole('button', { name: 'Entrar' }).click();
```

Nesse exemplo, o Playwright procura um botão chamado **Entrar** e realiza um clique.

---

## `getByText()`

Localiza um elemento pelo texto.

```typescript
await page.getByText('Login realizado com sucesso').click();
```

---

## `getByLabel()`

Muito utilizado em formulários.

HTML:

```html
<label for="email">E-mail</label>
<input id="email">
```

Playwright:

```typescript
await page.getByLabel('E-mail').fill('teste@email.com');
```

---

## `getByPlaceholder()`

Pode ser utilizado quando o campo possui um placeholder.

HTML:

```html
<input placeholder="Digite seu e-mail">
```

Playwright:

```typescript
await page.getByPlaceholder('Digite seu e-mail')
    .fill('teste@email.com');
```

---

# Preenchendo formulários

O método `fill()` é utilizado para preencher campos.

```typescript
await page.getByLabel('Usuário').fill('jefferson');

await page.getByLabel('Senha').fill('123456');
```

---

# Clique em elementos

Para clicar em um elemento:

```typescript
await page.getByRole('button', { name: 'Entrar' }).click();
```

Também podemos utilizar:

```typescript
await page.getByText('Cadastrar').click();
```

---

# Asserções

As asserções são utilizadas para verificar se o resultado obtido é o esperado.

Exemplo:

```typescript
await expect(page).toHaveURL(/dashboard/);
```

Verifica a URL.

Outro exemplo:

```typescript
await expect(page.getByText('Login realizado com sucesso'))
    .toBeVisible();
```

Verifica se uma mensagem está visível.

---

## Exemplos de asserções

### Verificar texto

```typescript
await expect(page.getByText('Olá, usuário'))
    .toBeVisible();
```

### Verificar URL

```typescript
await expect(page).toHaveURL(/dashboard/);
```

### Verificar título

```typescript
await expect(page).toHaveTitle(/Dashboard/);
```

### Verificar se um botão está habilitado

```typescript
await expect(page.getByRole('button', { name: 'Salvar' }))
    .toBeEnabled();
```

### Verificar se um elemento está visível

```typescript
await expect(page.getByText('Cadastro realizado'))
    .toBeVisible();
```

---

# Exemplo de teste de Login

Um exemplo simples de automação de login:

```typescript
import { test, expect } from '@playwright/test';

test('deve realizar login com dados válidos', async ({ page }) => {

    await page.goto('https://example.com/login');

    await page.getByLabel('E-mail')
        .fill('teste@email.com');

    await page.getByLabel('Senha')
        .fill('123456');

    await page.getByRole('button', { name: 'Entrar' })
        .click();

    await expect(page)
        .toHaveURL(/dashboard/);
});
```

## Fluxo do teste

O teste realiza:

1. Acessa a página de login.
2. Preenche o e-mail.
3. Preenche a senha.
4. Clica no botão **Entrar**.
5. Verifica se o usuário foi direcionado para o dashboard.

---

# Teste de Login inválido

Também podemos testar um cenário negativo.

```typescript
test('deve apresentar mensagem ao informar senha inválida', async ({ page }) => {

    await page.goto('https://example.com/login');

    await page.getByLabel('E-mail')
        .fill('teste@email.com');

    await page.getByLabel('Senha')
        .fill('senha_errada');

    await page.getByRole('button', { name: 'Entrar' })
        .click();

    await expect(
        page.getByText('Usuário ou senha inválidos')
    ).toBeVisible();
});
```

Esse tipo de teste é importante porque o QA também deve verificar comportamentos inválidos e regras de negócio.

---

# Executando os testes

Para executar os testes:

```bash
npx playwright test
```

---

## Executar um teste específico

```bash
npx playwright test tests/login.spec.ts
```

---

## Executar com o navegador visível

```bash
npx playwright test --headed
```

O modo `headed` permite visualizar o navegador durante a execução.

---

## Executar apenas um navegador

Exemplo:

```bash
npx playwright test --project=chromium
```

Também é possível configurar projetos para Firefox e WebKit.

---

# Relatório de testes

Depois da execução, podemos abrir o relatório HTML:

```bash
npx playwright show-report
```

O relatório pode apresentar informações como:

* Testes aprovados
* Testes reprovados
* Tempo de execução
* Erros
* Screenshots
* Trace
* Informações da execução

---

# Screenshots

O Playwright permite capturar screenshots.

Exemplo:

```typescript
await page.screenshot({
    path: 'evidencia-login.png'
});
```

Isso pode ser útil para gerar **evidências de testes**.

---

# Testes de API

Além de testes de interface, o Playwright também permite realizar testes de API.

Exemplo:

```typescript
import { test, expect } from '@playwright/test';

test('deve retornar uma lista de usuários', async ({ request }) => {

    const response = await request.get(
        'https://jsonplaceholder.typicode.com/users'
    );

    expect(response.status()).toBe(200);
});
```

Nesse exemplo:

1. É realizada uma requisição GET.
2. O status HTTP é obtido.
3. O teste verifica se o status é `200`.

---

# Métodos HTTP

O Playwright pode trabalhar com diferentes métodos HTTP.

### GET

```typescript
await request.get('/users');
```

### POST

```typescript
await request.post('/users', {
    data: {
        name: 'Jefferson',
        email: 'jefferson@email.com'
    }
});
```

### PUT

```typescript
await request.put('/users/1', {
    data: {
        name: 'Jefferson Ribeiro'
    }
});
```

### DELETE

```typescript
await request.delete('/users/1');
```

---

# Page Object Model (POM)

Em projetos maiores, é comum utilizar o padrão **Page Object Model (POM)**.

A ideia é separar:

* Elementos da página
* Ações realizadas na página
* Casos de teste

Exemplo:

```typescript
import { Page } from '@playwright/test';

export class LoginPage {

    constructor(private page: Page) {}

    async preencherEmail(email: string) {
        await this.page.getByLabel('E-mail').fill(email);
    }

    async preencherSenha(senha: string) {
        await this.page.getByLabel('Senha').fill(senha);
    }

    async clicarEntrar() {
        await this.page.getByRole('button', {
            name: 'Entrar'
        }).click();
    }
}
```

O teste pode utilizar essa classe:

```typescript
import { test } from '@playwright/test';
import { LoginPage } from './pages/LoginPage';

test('login com sucesso', async ({ page }) => {

    const login = new LoginPage(page);

    await page.goto('https://example.com/login');

    await login.preencherEmail('teste@email.com');
    await login.preencherSenha('123456');
    await login.clicarEntrar();
});
```

Isso ajuda a deixar o código mais organizado e facilita a manutenção dos testes.

---

# Boas práticas

## 1. Utilize locators estáveis

Prefira:

```typescript
page.getByRole('button', { name: 'Salvar' })
```

em vez de depender excessivamente de seletores CSS complexos.

---

## 2. Utilize asserções

Não basta executar uma ação.

Evite:

```typescript
await page.getByRole('button', { name: 'Entrar' }).click();
```

É importante verificar o resultado:

```typescript
await expect(page).toHaveURL(/dashboard/);
```

---

## 3. Dê nomes claros aos testes

Evite:

```typescript
test('teste 1', async ({ page }) => {
```

Prefira:

```typescript
test('deve realizar login com dados válidos', async ({ page }) => {
```

---

## 4. Evite `waitForTimeout()` sem necessidade

Evite:

```typescript
await page.waitForTimeout(5000);
```

O Playwright possui mecanismos próprios de espera e sincronização.

Prefira aguardar uma condição específica:

```typescript
await expect(
    page.getByText('Cadastro realizado')
).toBeVisible();
```

---

## 5. Mantenha os testes independentes

Um teste não deve depender do resultado de outro teste para funcionar.

Por exemplo:

```text
Teste 1 → Cadastro
Teste 2 → Login
Teste 3 → Exclusão
```

O ideal é que cada teste consiga preparar os dados necessários para sua própria execução.

---

# O que evitar

Evite:

* Seletores muito frágeis.
* Testes gigantes.
* Código duplicado.
* `waitForTimeout()` em excesso.
* Nomes genéricos para os testes.
* Testar somente cenários positivos.
* Misturar muitas funcionalidades em um único teste.
* Deixar dados de teste fixos quando eles podem causar conflitos.
* Criar testes que dependem da ordem de execução de outros testes.

---

# Playwright no processo de QA

O Playwright pode ser utilizado em diferentes etapas da estratégia de testes.

### Testes funcionais

Verificar se uma funcionalidade atende ao comportamento esperado.

### Testes de regressão

Executar novamente cenários importantes após alterações no sistema.

### Testes end-to-end

Validar um fluxo completo, desde o início até o resultado final.

### Testes de API

Validar endpoints, status HTTP, respostas e dados.

### Testes cross-browser

Verificar o comportamento da aplicação em diferentes navegadores.

---

# Exemplo de fluxo completo

Um fluxo de teste poderia ser:

```text
Acessar sistema
      ↓
Realizar login
      ↓
Acessar módulo de pacientes
      ↓
Cadastrar paciente
      ↓
Salvar cadastro
      ↓
Validar mensagem de sucesso
      ↓
Pesquisar paciente
      ↓
Validar paciente na lista
```

Esse fluxo pode ser automatizado utilizando Playwright.

---

# Playwright + TypeScript

O Playwright combina muito bem com TypeScript porque podemos utilizar:

* Tipagem estática
* Interfaces
* Types
* Classes
* Autocomplete
* Detecção de erros durante o desenvolvimento

Exemplo:

```typescript
type Usuario = {
    nome: string;
    email: string;
    senha: string;
};
```

Podemos utilizar esse tipo nos testes:

```typescript
const usuario: Usuario = {
    nome: 'Jefferson',
    email: 'teste@email.com',
    senha: '123456'
};
```

Isso ajuda a manter os dados utilizados na automação mais organizados.

---

# Resumo

O **Playwright** é uma ferramenta de automação que permite criar testes para aplicações web e APIs.

Com ele podemos:

* Automatizar navegadores.
* Criar testes E2E.
* Testar funcionalidades.
* Validar elementos.
* Realizar asserções.
* Testar APIs.
* Capturar screenshots.
* Gerar relatórios.
* Executar testes em diferentes navegadores.
* Utilizar TypeScript.
* Criar testes de regressão.

Para quem está estudando **QA e automação de testes**, o Playwright é uma ferramenta importante para aprender porque permite transformar cenários de teste manuais em testes automatizados.

---

## Comandos principais

```bash
# Instalar Playwright
npm init playwright@latest

# Executar todos os testes
npx playwright test

# Executar com navegador visível
npx playwright test --headed

# Executar um arquivo específico
npx playwright test tests/login.spec.ts

# Executar usando Chromium
npx playwright test --project=chromium

# Abrir relatório
npx playwright show-report
```

---

## Tecnologias relacionadas

```text
TypeScript
      +
Playwright
      +
Node.js
      +
Git/GitHub
      +
QA
      ↓
Automação de Testes
```
