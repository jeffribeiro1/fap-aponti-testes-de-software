# Testes E2E (End-to-End)

Os **testes E2E (End-to-End)**, ou **testes de ponta a ponta**, verificam se uma aplicação funciona corretamente do início ao fim, simulando o comportamento de um usuário real.

O objetivo é validar não apenas uma função isolada, mas **todo o fluxo da aplicação**, incluindo interface, regras de negócio, comunicação com APIs e banco de dados quando aplicável.

---

## 🎯 Objetivo dos testes E2E

Os testes E2E buscam responder:

> **"O sistema funciona corretamente quando um usuário realiza uma tarefa completa?"**

Por exemplo, em um sistema de clínica:

1. Usuário acessa a página de login.
2. Informa usuário e senha.
3. Realiza o login.
4. Acessa o módulo de pacientes.
5. Cadastra um paciente.
6. Salva o cadastro.
7. Verifica se o paciente aparece na lista.

Nesse caso, estamos testando o **fluxo completo**, e não apenas cada etapa individualmente.

---

## 🔎 O que os testes E2E verificam?

Podemos testar:

* Login e logout
* Cadastro de usuários
* Preenchimento de formulários
* Navegação entre páginas
* Botões e menus
* Validações de campos
* Mensagens de sucesso e erro
* Integração entre frontend e backend
* Consumo de APIs
* Fluxos de compra
* Fluxos de pagamento
* Permissões de usuários
* Persistência de dados
* Comportamento da aplicação em diferentes cenários

---

# 🧪 Exemplo de teste E2E

Imagine um sistema que possui cadastro de pacientes.

### Cenário

**Cadastrar um novo paciente com dados válidos**

```text
Dado que o usuário está autenticado como administrador
Quando acessa o módulo de pacientes
E preenche o formulário com dados válidos
E clica em "Salvar registro"
Então o sistema deve cadastrar o paciente
E apresentar a mensagem "Registro salvo com sucesso"
E o paciente deve aparecer na lista
```

Esse é um teste E2E porque percorre o fluxo completo da funcionalidade.

---

# 🖥️ Testes E2E com Playwright

Uma ferramenta bastante utilizada para automação E2E é o **Playwright**.

Exemplo:

```typescript
import { test, expect } from '@playwright/test';

test('Cadastrar paciente com dados válidos', async ({ page }) => {
    await page.goto('http://localhost:3000');

    await page.getByLabel('Usuário').fill('admin');
    await page.getByLabel('Senha').fill('123456');

    await page.getByRole('button', { name: 'Entrar' }).click();

    await page.getByRole('link', { name: 'Pacientes' }).click();

    await page.getByLabel('Nome').fill('João da Silva');
    await page.getByLabel('CPF').fill('12345678900');

    await page.getByRole('button', { name: 'Salvar registro' }).click();

    await expect(
        page.getByText('Registro salvo com sucesso')
    ).toBeVisible();
});
```

---

## 📌 O que acontece nesse teste?

### `test()`

Cria um caso de teste.

```typescript
test('Cadastrar paciente com dados válidos', async ({ page }) => {
```

O primeiro parâmetro é o nome do teste.

O `page` representa a página do navegador que será utilizada durante o teste.

---

### `page.goto()`

Acessa a aplicação.

```typescript
await page.goto('http://localhost:3000');
```

Nesse exemplo, o Playwright acessa uma aplicação rodando localmente.

---

### `getByLabel()`

Localiza um campo através do seu `label`.

```typescript
await page.getByLabel('Usuário').fill('admin');
```

Nesse exemplo, o Playwright encontra o campo **Usuário** e preenche com `admin`.

---

### `fill()`

Preenche um campo de formulário.

```typescript
await page.getByLabel('Senha').fill('123456');
```

---

### `click()`

Simula um clique do usuário.

```typescript
await page.getByRole('button', { name: 'Entrar' }).click();
```

Nesse exemplo, o Playwright encontra o botão **Entrar** e realiza o clique.

---

### `expect()`

Realiza uma **asserção**, verificando se o resultado esperado aconteceu.

```typescript
await expect(
    page.getByText('Registro salvo com sucesso')
).toBeVisible();
```

Nesse caso, o teste verifica se a mensagem de sucesso está visível na tela.

---

### `toBeVisible()`

Verifica se determinado elemento está visível.

```typescript
await expect(elemento).toBeVisible();
```

Se o elemento estiver visível, a verificação passa.

Caso contrário, o teste falha.

---

# 🔄 E2E x Outros Tipos de Teste

| Tipo de teste    | O que testa                                 |
| ---------------- | ------------------------------------------- |
| **Unitário**     | Uma função ou unidade isolada               |
| **Integração**   | Integração entre componentes ou módulos     |
| **API**          | Comunicação e comportamento dos endpoints   |
| **E2E**          | Fluxo completo da aplicação                 |
| **Manual**       | Execução realizada manualmente pelo QA      |
| **Automatizado** | Execução realizada por código ou ferramenta |

---

## 🧩 Exemplo de comparação

Imagine uma funcionalidade de login.

### Teste unitário

Verifica uma função específica:

```text
Verificar se a função validaSenha()
retorna true para uma senha válida.
```

O teste não precisa abrir o navegador ou acessar a aplicação inteira.

---

### Teste de API

Pode testar o endpoint de login:

```text
POST /login

Enviar usuário e senha.

Verificar se o status retornado é 200.
```

Nesse caso, estamos validando diretamente a API.

---

### Teste E2E

Simula o comportamento completo do usuário:

```text
Abrir sistema
        ↓
Preencher usuário
        ↓
Preencher senha
        ↓
Clicar em "Entrar"
        ↓
Acessar Dashboard
        ↓
Verificar usuário autenticado
```

O E2E está mais próximo da experiência real do usuário.

---

# ✅ Vantagens dos testes E2E

* Simulam o comportamento real do usuário.
* Validam diferentes partes do sistema juntas.
* Detectam problemas de integração.
* Ajudam a garantir que os principais fluxos funcionem.
* Podem ser executados automaticamente.
* Podem ser executados em diferentes ambientes.
* Reduzem a necessidade de repetir manualmente testes de regressão.

---

# ⚠️ Desvantagens dos testes E2E

Os testes E2E também possuem alguns desafios:

* Podem ser mais lentos que testes unitários.
* Podem exigir maior manutenção.
* Podem apresentar instabilidade quando mal implementados.
* Dependem do ambiente de teste.
* Podem ser mais complexos de configurar.
* Um grande número de testes E2E pode aumentar o tempo do pipeline.

Por isso, normalmente não é recomendado transformar **todos os testes em E2E**.

---

# 🏗️ Pirâmide de testes

Uma estratégia comum é utilizar diferentes níveis de testes.

```text
             /\
            /  \
           / E2E\
          /------\
         /  API   \
        /----------\
       /  Unitários  \
      /--------------\
```

A ideia é ter uma quantidade maior de testes rápidos e isolados e uma quantidade menor de testes E2E, focados nos **fluxos críticos**.

Uma estratégia pode ser:

```text
Unitários → muitas verificações rápidas

API → validação das integrações

E2E → principais jornadas do usuário
```

---

# 📌 Boas práticas para testes E2E

## 1. Testar fluxos importantes

Priorize funcionalidades críticas, como:

* Login
* Cadastro
* Compra
* Pagamento
* Agendamento
* Exclusão
* Recuperação de senha
* Alteração de dados

---

## 2. Utilizar dados de teste controlados

Evite depender de dados que podem mudar constantemente.

Utilize dados preparados especificamente para os testes sempre que possível.

Exemplo:

```text
Usuário: admin_teste
Senha: 123456
E-mail: teste@exemplo.com
```

---

## 3. Utilizar seletores confiáveis

Prefira seletores que representem a forma como o usuário interage com a aplicação.

Exemplo:

```typescript
page.getByRole('button', { name: 'Salvar' });
```

Ou:

```typescript
page.getByLabel('E-mail');
```

Evite depender excessivamente de seletores frágeis, como:

```typescript
page.locator('div:nth-child(3) > button');
```

Esse tipo de seletor pode deixar de funcionar quando a estrutura HTML da página for alterada.

---

## 4. Criar boas asserções

Não basta apenas realizar uma ação.

Depois da ação, verifique o resultado esperado.

Exemplo:

```typescript
await page.getByRole('button', { name: 'Salvar' }).click();

await expect(
    page.getByText('Registro salvo com sucesso')
).toBeVisible();
```

O teste não verifica somente o clique.

Ele também verifica se o sistema apresentou o resultado esperado.

---

## 5. Evitar testes muito grandes

Um teste E2E deve possuir um objetivo claro.

Evite criar um único teste que execute dezenas de funcionalidades diferentes.

Por exemplo, em vez de:

```text
Login
→ Cadastro
→ Edição
→ Exclusão
→ Relatório
→ Logout
→ Novo cadastro
→ Alteração de senha
```

Pode ser melhor dividir os fluxos:

```text
Teste 1 → Login

Teste 2 → Cadastro

Teste 3 → Edição

Teste 4 → Exclusão

Teste 5 → Logout
```

Isso facilita a identificação de falhas e a manutenção dos testes.

---

# 🚀 E2E no trabalho de QA

Para quem está estudando **QA e automação com TypeScript**, testes E2E são importantes porque conectam várias áreas da qualidade de software.

```text
QA
│
├── Testes manuais
├── Casos de teste
├── BDD
├── Testes de API
├── Testes E2E
│     └── Playwright
│           └── TypeScript
│
└── CI/CD
      └── Execução automática
```

Um fluxo comum de automação pode ser:

```text
Desenvolvedor cria a funcionalidade
              ↓
QA cria os casos de teste
              ↓
QA identifica os cenários automatizáveis
              ↓
QA automatiza os cenários importantes
              ↓
Playwright executa os testes
              ↓
Resultado: PASSOU / FALHOU
              ↓
Pipeline CI/CD
```

---

# 🔗 Relação entre E2E, Playwright e TypeScript

Essas três tecnologias/conceitos podem trabalhar juntos:

```text
E2E
│
└── Define o tipo de teste
       │
       ↓
Playwright
│
└── Ferramenta utilizada para automatizar
       │
       ↓
TypeScript
│
└── Linguagem utilizada para escrever os testes
```

Exemplo:

```typescript
import { test, expect } from '@playwright/test';

test('Login com dados válidos', async ({ page }) => {

    await page.goto('http://localhost:3000');

    await page.getByLabel('Usuário').fill('admin');

    await page.getByLabel('Senha').fill('123456');

    await page.getByRole('button', {
        name: 'Entrar'
    }).click();

    await expect(
        page.getByText('Dashboard')
    ).toBeVisible();
});
```

Nesse exemplo:

* **E2E** → representa o tipo de teste.
* **Playwright** → automatiza o navegador.
* **TypeScript** → é utilizado para escrever o código.
* **`test()`** → define o caso de teste.
* **`page`** → representa a página do navegador.
* **`fill()`** → preenche os campos.
* **`click()`** → realiza uma ação.
* **`expect()`** → verifica o resultado esperado.
* **`toBeVisible()`** → confirma que o elemento está visível.

---

# 📚 Resumo

Os **testes E2E (End-to-End)** validam o sistema de ponta a ponta, simulando uma jornada realizada por um usuário.

Eles podem verificar:

* Interface
* Navegação
* Formulários
* Regras de negócio
* APIs
* Integrações
* Autenticação
* Persistência de dados
* Fluxos críticos

Uma das ferramentas utilizadas para automatizar testes E2E é o **Playwright**, que pode ser utilizado com **TypeScript**.

Um exemplo de fluxo E2E:

```text
Usuário acessa o sistema
        ↓
Realiza login
        ↓
Acessa uma funcionalidade
        ↓
Preenche os dados
        ↓
Executa uma ação
        ↓
Sistema processa a solicitação
        ↓
QA verifica o resultado esperado
```

## 🎯 Em resumo

> **Teste E2E é um teste que verifica se uma funcionalidade funciona corretamente do início ao fim, simulando o comportamento de um usuário real.**
