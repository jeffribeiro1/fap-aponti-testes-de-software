# Etapa 1 — Compreensão do Cenário

## Cenário

Um sistema bancário permite que usuários:

- Realizem login;
- Acessem sua conta;
- Visualizem seu saldo atual.

---

## 1. Funcionalidades Envolvidas

As **funcionalidades** são as ações que o sistema permite que o usuário realize.

| Funcionalidade | Descrição |
|---|---|
| Login | Permite que o usuário informe seus dados para entrar no sistema. |
| Validação do usuário | O sistema verifica se os dados informados no login estão corretos. |
| Acesso à conta | Após o login correto, o usuário consegue acessar sua conta bancária. |
| Visualização de saldo | O usuário consegue consultar o saldo disponível em sua conta. |
| Tratamento de erros | O sistema deve informar quando alguma operação não puder ser realizada. |

### Explicação simples

Nesse sistema, o usuário primeiro precisa realizar o **login**.

Depois que o sistema confirmar que os dados estão corretos, o usuário poderá acessar sua conta e consultar o saldo.

---

## 2. Fluxo Principal

O **fluxo principal** é o caminho normal que o usuário realiza quando tudo funciona corretamente.

Esse fluxo também pode ser chamado de **caminho feliz**.

# Etapa 2 — Testes de Sistema

Os **testes de sistema** verificam o funcionamento do sistema como um todo, simulando ações que um usuário realizaria normalmente.

Nesta etapa foram criados:

- 2 testes de fluxo principal - Caminho feliz
- 2 testes de fluxo alternativo

---

## ID: CT-01 
## Título: Login realizado com sucesso ( App Itaú)

**Tipo:** Fluxo principal — Caminho feliz

### Pré-condições

- O sistema deve estar disponível.
- O usuário deve possuir cadastro válido.
- O usuário deve estar na tela de login.

### Passos

1. Acessar a tela de login.
2. Informar um usuário válido.
3. Informar uma senha válida.
4. Clicar no botão **Entrar**.

### Resultado esperado

- O login deve ser realizado com sucesso.
- O usuário deve ser direcionado para sua conta bancária.
- As informações da conta devem ser exibidas.

---

## ID: CT-02 
## Título: Visualizar saldo da conta

**Tipo:** Fluxo principal — Caminho feliz

### Pré-condições

- O sistema deve estar disponível.
- O usuário deve possuir uma conta válida.
- O usuário deve estar autenticado no sistema.

### Passos

1. Realizar o login com dados válidos.
2. Acessar a conta bancária.
3. Localizar a opção de consulta de saldo.
4. Clicar na opção de **Saldo**.

### Resultado esperado

- O sistema deve apresentar o saldo atual da conta.
- O valor exibido deve pertencer à conta do usuário autenticado.
- A consulta deve ser realizada sem apresentar erros.

---

# Testes de Fluxo Alternativo

## ID: CT-03
## Título: Login com senha incorreta

**Tipo:** Fluxo alternativo

### Pré-condições

- O sistema deve estar disponível.
- O usuário deve possuir cadastro válido.
- O usuário deve estar na tela de login.

### Passos

1. Acessar a tela de login.
2. Informar um usuário válido.
3. Informar uma senha incorreta.
4. Clicar no botão **Entrar**.

### Resultado esperado

- O login não deve ser realizado.
- O usuário não deve ter acesso à conta.
- O sistema deve apresentar uma mensagem informando que os dados de acesso estão incorretos.
- O usuário deve permanecer na tela de login.

---

## CT-04 — Login com campo de senha vazio

**Tipo:** Fluxo alternativo

### Pré-condições

- O sistema deve estar disponível.
- O usuário deve estar na tela de login.

### Passos

1. Acessar a tela de login.
2. Informar um usuário válido.
3. Deixar o campo de senha vazio.
4. Clicar no botão **Entrar**.

### Resultado esperado

- O login não deve ser realizado.
- O sistema deve informar que o campo de senha é obrigatório.
- O usuário deve permanecer na tela de login.

---

# Etapa 3 — Testes de Aceitação

## Sistema Bancário

### Objetivo

Validar se o sistema bancário atende às necessidades básicas do usuário, permitindo que ele:

* Realize login;
* Acesse sua conta;
* Visualize seu saldo atual;
* Receba informações claras quando ocorrer algum problema.

Os testes de aceitação verificam se o sistema entrega o resultado esperado pelo **usuário** e pelo **negócio**.

Nesta etapa foram criados:

- 2 testes de fluxo principal (caminho feliz)
- 2 testes de fluxo alternativo

---

# Testes de Fluxo Principal 

## ID: TA01
## Título: Login realizado com sucesso

**Tipo:** Fluxo Principal (caminho feliz)


### Pré-condições

* O sistema bancário deve estar disponível.
* O usuário deve possuir uma conta cadastrada.
* O usuário deve possuir login e senha válidos.

### Passos

1. Acessar a página de login do sistema bancário.
2. Informar um usuário válido.
3. Informar a senha correta.
4. Clicar no botão **Entrar**.

### Resultado esperado

* O login deve ser realizado com sucesso.
* O usuário deve acessar sua conta bancária.
* A página principal da conta deve ser exibida.
* O usuário deve conseguir utilizar sua conta sem receber mensagens de erro.

### Valor entregue ao usuário

O cliente consegue acessar sua conta bancária para consultar suas informações.

### Critério de aceitação

O teste será considerado **aprovado** se o usuário conseguir entrar na conta utilizando dados válidos.

---

## ID: TA02 
## Título: Visualizar o saldo atual da conta

**Tipo:** Fluxo Principal (caminho feliz)


### Pré-condições

* O sistema bancário deve estar disponível.
* O usuário deve possuir uma conta válida.
* O usuário deve estar logado no sistema.

### Passos

1. Realizar login no sistema.
2. Acessar a página principal da conta.
3. Localizar a área de **Saldo**.
4. Visualizar o valor apresentado.

### Resultado esperado

* O sistema deve apresentar o saldo atual da conta.
* O valor deve estar visível para o usuário.
* O saldo apresentado deve corresponder ao valor registrado na conta.

**Exemplo:**

Se o usuário possui **R$ 1.500,00**, o sistema deve apresentar **R$ 1.500,00** como saldo atual.

### Valor entregue ao usuário

O cliente consegue saber quanto dinheiro possui disponível em sua conta.

### Critério de aceitação

O teste será considerado **aprovado** se o sistema apresentar corretamente o saldo atual do usuário.

---

# Testes de Fluxo Alternativo

## ID: TA-03
## Título: Tentativa de login com senha incorreta

**Tipo:** Fluxo Alternativo

### Pré-condições

* O sistema bancário deve estar disponível.
* O usuário deve possuir uma conta cadastrada.
* O usuário deve conhecer seu login.

### Passos

1. Acessar a página de login.
2. Informar um usuário válido.
3. Informar uma senha incorreta.
4. Clicar no botão **Entrar**.

### Resultado esperado

* O sistema não deve permitir o acesso à conta.
* Uma mensagem deve informar que os dados de acesso estão incorretos.
* O usuário deve permanecer na tela de login.
* As informações da conta e o saldo não devem ser exibidos.

### Valor entregue ao usuário e ao negócio

O sistema protege a conta contra acessos realizados com uma senha incorreta, mantendo as informações bancárias do cliente protegidas.

### Critério de aceitação

O teste será considerado **aprovado** se o sistema impedir o acesso com senha incorreta e apresentar uma mensagem clara ao usuário.

---

## ID: TA-04
## Título: Tentativa de login com campos vazios

**Tipo:** Fluxo Alternativo


### Pré-condições

* O sistema bancário deve estar disponível.
* A página de login deve estar acessível.

### Passos

1. Acessar a página de login.
2. Deixar o campo de usuário vazio.
3. Deixar o campo de senha vazio.
4. Clicar no botão **Entrar**.

### Resultado esperado

* O sistema não deve realizar o login.
* O usuário deve permanecer na página de login.
* O sistema deve informar que os campos obrigatórios precisam ser preenchidos.
* Nenhuma informação bancária deve ser apresentada.

### Valor entregue ao usuário e ao negócio

O sistema orienta o cliente sobre quais informações são necessárias para acessar sua conta e evita tentativas de login incompletas.

### Critério de aceitação

O teste será considerado **aprovado** se o sistema impedir o login e informar claramente que os campos obrigatórios precisam ser preenchidos.

---

# Etapa 4 — Justificativa e Classificação

Nesta etapa, será explicado por que cada caso criado pode ser classificado como **Teste de Sistema** ou **Teste de Aceitação**.

A principal diferença é:

* **Teste de Sistema:** verifica se as funcionalidades do sistema estão funcionando corretamente.
* **Teste de Aceitação:** verifica se o sistema atende às necessidades do usuário e do negócio.

---

# 1. Testes de Sistema

## CT-01 — Login realizado com sucesso

### Por que este é um teste de sistema?

É um teste de sistema porque verifica o funcionamento completo da funcionalidade de **login**.

O teste simula uma ação real do usuário, informando usuário e senha válidos e verificando se o sistema permite o acesso à conta.

### Objetivo do teste

Verificar se o sistema permite que um usuário com dados válidos consiga realizar o login.

### Ponto de vista adotado

Ponto de vista do funcionamento do **sistema**.

O foco é verificar se a funcionalidade de login responde corretamente aos dados informados.

### Tipo de validação realizada

Validação **funcional**.

O teste verifica se:

* O usuário consegue informar seus dados;
* O sistema valida usuário e senha;
* O acesso é permitido;
* A conta bancária é apresentada corretamente.

---

## CT-02 — Visualizar saldo da conta

### Por que este é um teste de sistema?

É um teste de sistema porque verifica se a funcionalidade de **consulta de saldo** está funcionando corretamente após o usuário entrar em sua conta.

O teste verifica a interação entre o login, o acesso à conta e a apresentação do saldo.

### Objetivo do teste

Verificar se o usuário autenticado consegue visualizar corretamente o saldo de sua conta.

### Ponto de vista adotado

Ponto de vista do funcionamento do **sistema**.

O foco está em verificar se o sistema apresenta a informação correta depois que o usuário acessa a opção de saldo.

### Tipo de validação realizada

Validação **funcional e de dados**.

O teste verifica se:

* A opção de saldo está disponível;
* O saldo é apresentado;
* O valor pertence ao usuário autenticado;
* A operação acontece sem erros.

---

## CT-03 — Login com senha incorreta

### Por que este é um teste de sistema?

É um teste de sistema porque verifica como o sistema se comporta quando o usuário informa uma **senha incorreta**.

Além de testar situações em que tudo funciona corretamente, também é importante verificar como o sistema trata situações de erro.

### Objetivo do teste

Verificar se o sistema impede o acesso quando uma senha incorreta é informada.

### Ponto de vista adotado

Ponto de vista do funcionamento e da segurança do **sistema**.

### Tipo de validação realizada

Validação **funcional e de tratamento de erro**.

O teste verifica se:

* O sistema identifica a senha incorreta;
* O login é impedido;
* Nenhuma informação da conta é apresentada;
* Uma mensagem de erro é exibida.

---

## CT-04 — Login com campo de senha vazio

### Por que este é um teste de sistema?

É um teste de sistema porque verifica a validação de um campo obrigatório da tela de login.

O sistema deve identificar que a senha não foi preenchida e impedir a continuação da operação.

### Objetivo do teste

Verificar se o campo de senha é obrigatório.

### Ponto de vista adotado

Ponto de vista do funcionamento e das validações do **sistema**.

### Tipo de validação realizada

Validação **funcional e de campo obrigatório**.

O teste verifica se:

* O sistema identifica que a senha está vazia;
* O login não é realizado;
* Uma mensagem de campo obrigatório é apresentada;
* O usuário continua na tela de login.

---

# 2. Testes de Aceitação

## TA-01 — Login realizado com sucesso

### Por que este é um teste de aceitação?

É um teste de aceitação porque verifica se uma necessidade importante do cliente está sendo atendida: **conseguir acessar sua conta bancária**.

Aqui, o foco não está somente em saber se o botão funciona, mas se o usuário consegue alcançar seu objetivo.

### Objetivo do teste

Validar que um cliente com dados corretos consegue acessar sua conta.

### Ponto de vista adotado

Ponto de vista do **usuário e do negócio**.

Para o usuário, é importante conseguir acessar sua conta.

Para o banco, é importante permitir o acesso somente para clientes que possuem dados válidos.

### Tipo de validação realizada

Validação de **aceitação funcional**.

O teste verifica se o sistema entrega o comportamento esperado pelo cliente.

---

## TA-02 — Visualizar o saldo atual da conta

### Por que este é um teste de aceitação?

É um teste de aceitação porque consultar o saldo é uma necessidade real do cliente de um sistema bancário.

O usuário precisa saber quanto dinheiro possui disponível em sua conta.

### Objetivo do teste

Validar que o cliente consegue consultar seu saldo e que o valor apresentado está correto.

### Ponto de vista adotado

Ponto de vista do **usuário**.

O foco é verificar se a funcionalidade atende à necessidade de consultar o dinheiro disponível na conta.

### Tipo de validação realizada

Validação de **aceitação funcional e regra de negócio**.

O saldo apresentado precisa ser o mesmo saldo registrado na conta do usuário.

---

## TA-03 — Tentativa de login com senha incorreta

### Por que este é um teste de aceitação?

É um teste de aceitação porque verifica uma necessidade importante tanto do usuário quanto do banco: **proteger a conta contra acessos indevidos**.

Uma pessoa que não conhece a senha correta não deve conseguir acessar informações bancárias.

### Objetivo do teste

Validar que o sistema protege a conta quando uma senha incorreta é informada.

### Ponto de vista adotado

Ponto de vista do **usuário e do negócio**.

Para o usuário, existe a necessidade de manter sua conta protegida.

Para o banco, existe a necessidade de impedir acessos não autorizados.

### Tipo de validação realizada

Validação de **aceitação, segurança e regra de negócio**.

O teste verifica se:

* O acesso é bloqueado;
* As informações bancárias não são apresentadas;
* O usuário recebe uma mensagem informando o problema.

---

## TA-04 — Tentativa de login com campos vazios

### Por que este é um teste de aceitação?

É um teste de aceitação porque verifica se o sistema orienta corretamente o usuário quando ele tenta entrar sem informar os dados necessários.

O usuário precisa entender o que deve preencher para conseguir utilizar o sistema.

### Objetivo do teste

Validar que o sistema não permite uma tentativa de login incompleta e orienta o usuário sobre os campos obrigatórios.

### Ponto de vista adotado

Ponto de vista do **usuário e do negócio**.

Para o usuário, a mensagem ajuda a entender o que precisa ser corrigido.

Para o banco, evita que solicitações de login incompletas sejam processadas.

### Tipo de validação realizada

Validação de **aceitação funcional e usabilidade**.

O teste verifica se:

* O acesso não é permitido;
* Os campos obrigatórios são identificados;
* Uma mensagem clara é apresentada;
* Nenhuma informação bancária é exibida.

---

## Exemplo Simples

No **Teste de Sistema**, podemos perguntar:

> **A funcionalidade de consultar saldo está funcionando corretamente?**

No **Teste de Aceitação**, podemos perguntar:

> **O cliente consegue consultar corretamente quanto dinheiro possui em sua conta?**

Apesar de os testes poderem executar passos parecidos, o que muda principalmente é o **objetivo e o ponto de vista do teste**.

O **Teste de Sistema** está mais preocupado com o funcionamento do software.

O **Teste de Aceitação** está mais preocupado em saber se o software resolve a necessidade do usuário e atende às regras do negócio.











