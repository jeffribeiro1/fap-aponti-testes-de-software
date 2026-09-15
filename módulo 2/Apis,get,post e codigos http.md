# APIs, GET, POST e Códigos HTTP

## O que é uma API?

**API** significa **Application Programming Interface** (Interface de Programação de Aplicações).

Uma API permite que diferentes sistemas se comuniquem entre si e troquem informações.

Por exemplo, em um sistema de clínica, o front-end pode solicitar à API a lista de pacientes:

```text
Front-end
    ↓
    GET /pacientes
    ↓
API
    ↓
Banco de dados
    ↓
Lista de pacientes
```

A API recebe uma **requisição (request)** e retorna uma **resposta (response)**.

---

# Request e Response

Uma comunicação com uma API normalmente possui:

### Request

É a solicitação enviada pelo cliente para o servidor.

Pode conter:

* URL/endpoint
* método HTTP
* headers
* parâmetros
* body

Exemplo:

```http
GET /pacientes
```

### Response

É a resposta enviada pelo servidor.

Pode conter:

* código HTTP
* headers
* dados
* mensagem de erro

Exemplo:

```http
HTTP/1.1 200 OK
```

```json
{
  "id": 1,
  "nome": "João da Silva"
}
```

---

# O que são métodos HTTP?

Os métodos HTTP indicam **qual operação queremos realizar** em uma API.

Os principais métodos utilizados em testes são:

| Método   | Objetivo                          |
| -------- | --------------------------------- |
| `GET`    | Consultar dados                   |
| `POST`   | Criar/enviar dados                |
| `PUT`    | Atualizar um recurso inteiro      |
| `PATCH`  | Atualizar parcialmente um recurso |
| `DELETE` | Excluir um recurso                |

Neste material, o foco será em **GET e POST**.

---

# GET

O método `GET` é utilizado principalmente para **consultar informações**.

Por exemplo:

```http
GET /pacientes
```

A API pode retornar:

```json
[
  {
    "id": 1,
    "nome": "João"
  },
  {
    "id": 2,
    "nome": "Maria"
  }
]
```

## O que o QA deve testar em um GET?

Alguns pontos importantes:

* Status code correto.
* Estrutura da resposta.
* Dados retornados.
* Tempo de resposta.
* Headers.
* Autenticação.
* Paginação, quando existir.
* Filtros.
* Ordenação.
* Comportamento quando não existem registros.
* Tratamento de parâmetros inválidos.

### Exemplo de teste

**Objetivo:** Validar a consulta de pacientes.

```text
Método: GET

Endpoint:
/pacientes

Resultado esperado:
Status Code: 200 OK

A resposta deve retornar a lista de pacientes
cadastrados no sistema.
```

---

# POST

O método `POST` é utilizado para **enviar dados ao servidor**, geralmente para criar um novo recurso.

Exemplo:

```http
POST /pacientes
```

O corpo da requisição pode ser:

```json
{
  "nome": "João da Silva",
  "cpf": "12345678900",
  "email": "joao@email.com"
}
```

Se o cadastro for realizado com sucesso, a API pode retornar:

```http
201 Created
```

E uma resposta semelhante a:

```json
{
  "id": 10,
  "nome": "João da Silva",
  "cpf": "12345678900",
  "email": "joao@email.com"
}
```

---

# O que o QA deve testar em um POST?

Ao testar um endpoint `POST`, é importante verificar:

* Campos obrigatórios.
* Campos opcionais.
* Tipos dos dados.
* Tamanho mínimo e máximo.
* Formatos válidos.
* Dados inválidos.
* Campos vazios.
* Campos nulos.
* Caracteres especiais.
* Dados duplicados.
* Autenticação.
* Autorização.
* Código HTTP.
* Mensagem de retorno.
* Estrutura do JSON.
* Persistência do registro.

---

# Exemplo de teste positivo

### Cadastro de paciente com dados válidos

```http
POST /pacientes
```

Body:

```json
{
  "nome": "João da Silva",
  "cpf": "12345678900",
  "email": "joao@email.com"
}
```

Resultado esperado:

```http
201 Created
```

O paciente deve ser criado e retornar os dados do novo registro.

---

# Exemplo de teste negativo

### Cadastro sem nome

```http
POST /pacientes
```

Body:

```json
{
  "nome": "",
  "cpf": "12345678900",
  "email": "joao@email.com"
}
```

Resultado esperado:

```http
400 Bad Request
```

A API deve informar que o campo `nome` é obrigatório e não deve criar o paciente.

---

# Códigos de Status HTTP

Os códigos HTTP indicam o resultado de uma requisição.

Eles são divididos em categorias:

| Faixa | Significado      |
| ----- | ---------------- |
| `1xx` | Informações      |
| `2xx` | Sucesso          |
| `3xx` | Redirecionamento |
| `4xx` | Erro do cliente  |
| `5xx` | Erro do servidor |

---

# Principais códigos HTTP para QA

## 200 — OK

Indica que a requisição foi processada com sucesso.

Exemplo:

```http
GET /pacientes

200 OK
```

Usado frequentemente em consultas realizadas com `GET`.

---

## 201 — Created

Indica que um novo recurso foi criado com sucesso.

Exemplo:

```http
POST /pacientes

201 Created
```

É um código comum em operações de cadastro.

---

## 400 — Bad Request

Indica que a requisição possui dados inválidos ou não pode ser processada pelo servidor.

Exemplo:

```http
POST /pacientes
```

Body:

```json
{
  "nome": "",
  "email": "email-invalido"
}
```

Resposta:

```http
400 Bad Request
```

Como QA, devemos verificar se a API rejeitou corretamente os dados inválidos.

---

## 401 — Unauthorized

Indica que a requisição não possui uma autenticação válida.

Exemplo:

```http
GET /pacientes
```

Sem token de autenticação:

```http
401 Unauthorized
```

Esse cenário pode ser utilizado para testar:

* Token ausente.
* Token inválido.
* Token expirado.

---

## 403 — Forbidden

Indica que o usuário está autenticado, mas **não possui permissão** para executar determinada operação.

Exemplo:

```http
DELETE /pacientes/10
```

Usuário autenticado sem permissão:

```http
403 Forbidden
```

Esse tipo de teste é importante para validar **controle de acesso e permissões**.

---

## 404 — Not Found

Indica que o recurso solicitado não foi encontrado.

Exemplo:

```http
GET /pacientes/999999
```

Caso o paciente não exista:

```http
404 Not Found
```

Como QA, devemos verificar se a API retorna uma resposta adequada e não apresenta informações indevidas.

---

# 500 — Internal Server Error

O código `500` indica um **erro interno no servidor**.

Exemplo:

```http
GET /pacientes
```

Resposta:

```http
500 Internal Server Error
```

Esse erro geralmente indica um problema no processamento do lado do servidor.

Como QA, é importante:

* Registrar o endpoint.
* Registrar método HTTP.
* Registrar parâmetros enviados.
* Registrar o status code.
* Guardar evidências.
* Verificar logs quando disponíveis.
* Reproduzir o erro.
* Informar os passos necessários para reproduzir.

> Um `500` nem sempre significa que o teste está errado. Pode indicar um defeito no sistema que precisa ser investigado.

---

# Comparação entre 4xx e 5xx

Uma diferença importante para QA:

### 4xx — Problema relacionado à requisição

Exemplo:

```text
GET /pacientes/999
       ↓
Paciente não encontrado
       ↓
404
```

Ou:

```text
POST /pacientes
       ↓
Dados inválidos
       ↓
400
```

### 5xx — Problema no processamento do servidor

Exemplo:

```text
GET /pacientes
       ↓
Servidor apresenta erro inesperado
       ↓
500
```

---

# Exemplo completo de fluxo de teste de API

Imagine um endpoint para cadastro de pacientes:

```http
POST /pacientes
```

## Cenário 1 — Dados válidos

```json
{
  "nome": "Maria Silva",
  "cpf": "12345678900",
  "email": "maria@email.com"
}
```

Esperado:

```http
201 Created
```

---

## Cenário 2 — Campo obrigatório vazio

```json
{
  "nome": "",
  "cpf": "12345678900",
  "email": "maria@email.com"
}
```

Esperado:

```http
400 Bad Request
```

---

## Cenário 3 — Usuário não autenticado

```http
POST /pacientes
```

Sem token.

Esperado:

```http
401 Unauthorized
```

---

## Cenário 4 — Usuário sem permissão

Usuário autenticado, mas sem permissão para cadastrar pacientes.

Esperado:

```http
403 Forbidden
```

---

## Cenário 5 — Erro interno

O servidor apresenta uma falha inesperada durante o processamento.

Esperado:

```http
500 Internal Server Error
```

---

# Testes de API para QA

Ao realizar testes de API, não devemos verificar somente se o código HTTP está correto.

Também podemos validar o conteúdo da resposta.

Exemplo:

```json
{
  "id": 15,
  "nome": "Maria Silva",
  "email": "maria@email.com"
}
```

Podemos verificar:

```text
✓ Status Code = 201
✓ ID foi gerado
✓ Nome está correto
✓ E-mail está correto
✓ Estrutura do JSON está correta
✓ Registro foi criado
✓ Tempo de resposta está dentro do esperado
```

---

# Exemplo de checklist

## GET

```text
[ ] Endpoint correto
[ ] Status Code
[ ] Headers
[ ] Autenticação
[ ] Estrutura do JSON
[ ] Dados retornados
[ ] Filtros
[ ] Paginação
[ ] Ordenação
[ ] Parâmetros inválidos
[ ] Recurso inexistente
[ ] Tempo de resposta
```

## POST

```text
[ ] Endpoint correto
[ ] Status Code
[ ] Campos obrigatórios
[ ] Campos opcionais
[ ] Dados válidos
[ ] Dados inválidos
[ ] Campos vazios
[ ] Tipos de dados
[ ] Limites de tamanho
[ ] Dados duplicados
[ ] Autenticação
[ ] Autorização
[ ] Estrutura da resposta
[ ] Persistência dos dados
[ ] Tempo de resposta
```

---

# Ferramentas utilizadas em testes de API

Algumas ferramentas bastante utilizadas por profissionais de QA são:

* **Postman**
* **Insomnia**
* **Swagger / OpenAPI**
* **Playwright**
* **Cypress**
* **REST Assured**

O **Postman**, por exemplo, permite criar requisições `GET`, `POST`, `PUT`, `PATCH` e `DELETE`, além de validar respostas através de scripts de teste.

---

# Resumo

Neste estudo foram abordados conceitos fundamentais para testes de API:

* O que é uma API.
* Request e Response.
* Métodos HTTP.
* `GET`.
* `POST`.
* Códigos de status HTTP.
* Erros `400`, `401`, `403`, `404` e `500`.
* Testes positivos e negativos.
* Validação de respostas.
* Checklist para testes de API.

Para QA, conhecer APIs é importante porque permite testar o sistema **além da interface gráfica**, validando diretamente a comunicação entre aplicação, servidor e dados.

```text
              QA
               │
               ▼
        ┌──────────────┐
        │     API      │
        └──────────────┘
          │          │
       Request     Response
          │          │
          ▼          ▼
       Servidor   Status Code
                     +
                   JSON
```
