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

---

# Boas Práticas em Testes de API

As boas práticas ajudam a tornar os testes de API mais organizados, confiáveis, fáceis de manter e de entender.

---

## 1. Validar o Status Code

Não verificar apenas se a requisição foi executada. É importante validar se o **status HTTP retornado é o esperado**.

Exemplo:

```text
GET /pacientes
```

Esperado:

```text
200 OK
```

Para um cadastro:

```text
POST /pacientes
```

Esperado:

```text
201 Created
```

---

## 2. Testar cenários positivos e negativos

Não devemos testar apenas o caminho de sucesso.

### Cenário positivo

Enviar dados válidos:

```json
{
  "nome": "João Silva",
  "email": "joao@email.com"
}
```

Esperado:

```text
201 Created
```

### Cenário negativo

Enviar e-mail inválido:

```json
{
  "nome": "João Silva",
  "email": "email-invalido"
}
```

Esperado:

```text
400 Bad Request
```

---

## 3. Validar o corpo da resposta

Além do status code, verificar se os dados retornados estão corretos.

Exemplo:

```json
{
  "id": 10,
  "nome": "João Silva",
  "email": "joao@email.com"
}
```

Validar:

```text
✓ ID foi gerado
✓ Nome está correto
✓ E-mail está correto
✓ Campos esperados existem
✓ Tipos dos dados estão corretos
```

---

## 4. Validar os Headers

Os headers também fazem parte da resposta da API.

Por exemplo:

```text
Content-Type: application/json
```

O QA pode verificar se o servidor está retornando o tipo de conteúdo esperado.

Também podem ser validados headers relacionados a:

* Autenticação.
* Cache.
* Segurança.
* CORS.
* Content-Type.

---

## 5. Testar campos obrigatórios

Verificar o comportamento da API quando um campo obrigatório não é enviado.

Exemplo:

```json
{
  "email": "joao@email.com"
}
```

Se `nome` for obrigatório, a API deve rejeitar a requisição.

Esperado:

```text
400 Bad Request
```

---

## 6. Testar campos vazios e nulos

É importante diferenciar situações como:

```json
{
  "nome": ""
}
```

e:

```json
{
  "nome": null
}
```

A API deve tratar esses valores de acordo com as regras definidas para o campo.

---

## 7. Testar limites dos campos

Testar os limites definidos pela aplicação.

Por exemplo, se o campo aceita no máximo 100 caracteres:

```text
99 caracteres  → válido
100 caracteres → válido
101 caracteres → inválido
```

Esse tipo de teste ajuda a encontrar problemas de **boundary value**.

---

## 8. Testar tipos de dados

Verificar se a API rejeita tipos incorretos.

Esperado:

```json
{
  "idade": 25
}
```

Teste inválido:

```json
{
  "idade": "vinte e cinco"
}
```

O comportamento esperado deve estar de acordo com o contrato da API.

---

## 9. Testar dados duplicados

Verificar o comportamento quando um recurso que deveria ser único é cadastrado novamente.

Exemplo:

```text
POST /pacientes
```

Com um CPF já cadastrado.

A API deve impedir o cadastro duplicado e retornar o status definido pelo sistema, por exemplo:

```text
409 Conflict
```

---

## 10. Testar autenticação

Verificar o comportamento da API sem autenticação.

Exemplo:

```text
GET /pacientes
```

Sem token.

Esperado:

```text
401 Unauthorized
```

Também é importante testar:

```text
✓ Token válido
✓ Token inválido
✓ Token expirado
✓ Token ausente
```

---

## 11. Testar autorização

Autenticação e autorização são conceitos diferentes.

**Autenticação:**

> Quem é o usuário?

**Autorização:**

> O usuário possui permissão para executar essa ação?

Exemplo:

```text
Usuário autenticado
        ↓
Sem permissão para excluir
        ↓
403 Forbidden
```

---

## 12. Testar recursos inexistentes

Enviar uma requisição para um recurso que não existe.

Exemplo:

```text
GET /pacientes/999999
```

Se o paciente não existir:

```text
404 Not Found
```

---

## 13. Validar mensagens de erro

Não basta retornar um `400`, `401` ou `404`.

Também é importante verificar se a mensagem retornada é clara e adequada.

Exemplo:

```json
{
  "erro": "CPF inválido"
}
```

Evitar mensagens genéricas que não ajudam na identificação do problema.

---

## 14. Não utilizar dados reais

Durante os testes, utilizar **dados fictícios ou dados especificamente preparados para teste**.

Evitar utilizar:

* CPF real.
* Dados bancários reais.
* Senhas reais.
* Tokens reais.
* Informações pessoais de clientes.

Exemplo:

```json
{
  "nome": "Usuário Teste",
  "email": "teste@example.com"
}
```

---

## 15. Não expor informações sensíveis

Tokens, senhas, chaves de API e outras credenciais não devem ser colocados diretamente no código ou publicados no GitHub.

Evitar:

```typescript
const senha = "MinhaSenha123";
const token = "token-secreto";
```

Preferir variáveis de ambiente:

```text
API_URL
TOKEN
USERNAME
PASSWORD
```

---

## 16. Utilizar ambientes separados

Sempre que possível, separar os ambientes:

```text
Desenvolvimento
       ↓
Homologação
       ↓
Produção
```

Os testes de QA devem ser executados preferencialmente em ambientes destinados a testes, evitando alterações acidentais em produção.

---

## 17. Utilizar variáveis de ambiente

Em ferramentas como Postman, é possível utilizar variáveis:

```text
{{baseUrl}}
{{token}}
{{userId}}
```

Exemplo:

```text
GET {{baseUrl}}/pacientes/{{userId}}
```

Isso facilita a execução dos mesmos testes em diferentes ambientes.

---

## 18. Organizar as coleções de testes

Manter os testes organizados por funcionalidade.

Exemplo:

```text
API Clínica Psi
│
├── Autenticação
│   ├── Login válido
│   ├── Login inválido
│   └── Token expirado
│
├── Pacientes
│   ├── GET - Listar pacientes
│   ├── GET - Buscar paciente
│   ├── POST - Criar paciente
│   └── POST - Dados inválidos
│
└── Psicólogos
    ├── GET - Listar psicólogos
    ├── POST - Criar psicólogo
    └── DELETE - Excluir psicólogo
```

---

## 19. Validar o tempo de resposta

Uma API pode retornar `200 OK` e ainda apresentar um problema de performance.

Exemplo:

```text
Status: 200 OK
Tempo: 8 segundos
```

Dependendo do requisito, esse resultado pode ser considerado inadequado.

O QA deve verificar se o tempo de resposta está dentro do limite estabelecido.

---

## 20. Testar repetibilidade

Um bom teste deve ser **reproduzível**.

Deve ser possível executar o mesmo cenário novamente e obter um resultado consistente, considerando que o estado dos dados seja controlado.

Documentar:

```text
Endpoint
Método
Headers
Body
Dados utilizados
Resultado esperado
Resultado obtido
Status Code
Evidências
```

---

## 21. Utilizar dados de teste controlados

Criar dados específicos para cada cenário.

Exemplo:

```text
Paciente válido
Paciente com CPF inválido
Paciente com e-mail inválido
Paciente duplicado
Paciente sem nome
Paciente com telefone inválido
```

Isso facilita a identificação dos defeitos.

---

## 22. Validar o contrato da API

Quando existe uma documentação utilizando **Swagger/OpenAPI**, o QA pode comparar o comportamento real da API com o contrato definido.

Verificar:

```text
✓ Endpoint
✓ Método HTTP
✓ Parâmetros
✓ Campos obrigatórios
✓ Tipos dos campos
✓ Status Codes
✓ Estrutura da resposta
```

---

# Checklist de boas práticas

```text
[ ] Validar Status Code
[ ] Validar Response Body
[ ] Validar Headers
[ ] Testar cenários positivos
[ ] Testar cenários negativos
[ ] Testar campos obrigatórios
[ ] Testar campos vazios
[ ] Testar valores nulos
[ ] Testar limites
[ ] Testar tipos de dados
[ ] Testar dados duplicados
[ ] Testar autenticação
[ ] Testar autorização
[ ] Testar recursos inexistentes
[ ] Validar mensagens de erro
[ ] Utilizar dados fictícios
[ ] Não expor credenciais
[ ] Utilizar variáveis de ambiente
[ ] Separar ambientes
[ ] Validar tempo de resposta
[ ] Validar contrato da API
[ ] Manter os testes organizados
[ ] Documentar evidências
```

---

# Mentalidade do QA ao testar APIs

Ao testar uma API, não devemos pensar apenas:

> "A requisição funcionou?"

Devemos pensar:

> **"A API está se comportando corretamente em diferentes situações?"**

Por isso, devemos testar:

```text
             API
              │
     ┌────────┼────────┐
     ↓        ↓        ↓
  Válido   Inválido  Limites
     │        │        │
     ↓        ↓        ↓
  Sucesso    Erro    Validação
     │        │        │
     └────────┼────────┘
              ↓
        Resultado esperado
```

O objetivo do QA é verificar se a API atende aos **requisitos funcionais, regras de negócio, segurança, confiabilidade e desempenho** esperados.

