# Atividade Avaliativa — Técnicas de Teste

## Na sua aplicação, crie casos de teste utilizando às técnicas aprendidas

* 3 casos de valor limite

* 3 casos de particionamento de equivalência

* Identifique 3 possíveis estados e transições

## Entregar testes estruturados, contendo:

* Entradas

* Técnicas utilizadas

* Resultado esperado

---

## Sistema utilizado

**Sistema:**  - Clínica Psi
**Funcionalidade escolhida:** Login

O objetivo dos testes é verificar o comportamento da funcionalidade de login utilizando as técnicas de **Análise de Valor Limite**, **Particionamento de Equivalência** e **Transição de Estados**.

---

# 1. Casos de teste — Análise de Valor Limite

A técnica de Análise de Valor Limite foi utilizada para testar valores próximos aos limites definidos pelo sistema.

### CT-VL-01 — Login com campo de senha vazio

**Entrada:**

* Usuário: `admin`
* Senha: vazio

**Técnica utilizada:**
Análise de Valor Limite — valor mínimo do campo.

**Resultado esperado:**
O sistema deve impedir o login e apresentar uma mensagem informando que a senha é obrigatória.

---

### CT-VL-02 — Login com limite de tentativas

**Entrada:**

* Usuário: `admin`
* Senha incorreta
* Realizar 3 tentativas consecutivas com senha incorreta.

**Técnica utilizada:**
Análise de Valor Limite — limite máximo de tentativas.

**Resultado esperado:**
Após atingir 3 tentativas incorretas, o sistema deve bloquear o acesso conforme a regra definida e informar o usuário sobre o bloqueio.

---

### CT-VL-03 — Login após atingir o limite de tentativas

**Entrada:**

* Usuário: `admin`
* Senha correta
* Usuário já bloqueado após atingir o limite de tentativas incorretas.

**Técnica utilizada:**
Análise de Valor Limite — valor acima do limite permitido.

**Resultado esperado:**
O sistema não deve permitir o login enquanto o usuário estiver bloqueado e deve apresentar uma mensagem informando a situação.

---

# 2. Casos de teste — Particionamento de Equivalência

O Particionamento de Equivalência foi utilizado para dividir as entradas em grupos válidos e inválidos.

### CT-PE-01 — Credenciais válidas

**Entrada:**

* Usuário: `admin`
* Senha: senha válida cadastrada no sistema.

**Técnica utilizada:**
Particionamento de Equivalência — classe válida.

**Resultado esperado:**
O sistema deve aceitar as credenciais e permitir o acesso à aplicação.

---

### CT-PE-02 — Usuário válido e senha inválida

**Entrada:**

* Usuário: `admin`
* Senha: `senha1234` incorreta.

**Técnica utilizada:**
Particionamento de Equivalência — classe inválida.

**Resultado esperado:**
O sistema deve negar o acesso e apresentar uma mensagem informando que as credenciais não são válidas.

---

### CT-PE-03 — Usuário e senha vazios

**Entrada:**

* Usuário: vazio
* Senha: vazio

**Técnica utilizada:**
Particionamento de Equivalência — classe inválida.

**Resultado esperado:**
O sistema deve impedir o login e informar que os campos obrigatórios precisam ser preenchidos.

---

# 3. Estados e Transições

Para essa parte foi utilizada a técnica de **Transição de Estados**, observando como o sistema muda de estado de acordo com as ações realizadas pelo usuário.

## Estado 1 — Usuário não autenticado

**Estado:**
O usuário está na tela de login e ainda não possui acesso ao sistema.

**Transição:**
O usuário informa credenciais válidas e seleciona a opção de entrar.

**Próximo estado:**
Usuário autenticado.

---

## Estado 2 — Usuário autenticado

**Estado:**
O usuário realizou o login corretamente e possui acesso ao sistema.

**Transição:**
O usuário seleciona a opção de sair/logout.

**Próximo estado:**
Usuário não autenticado.

---

## Estado 3 — Usuário bloqueado

**Estado:**
O usuário atingiu o limite de tentativas de login incorretas.

**Transição:**
O usuário tenta realizar um novo login.

**Próximo estado:**
O sistema deve manter o usuário bloqueado e impedir o acesso.

---

# 4. Resumo dos testes

| ID       | Técnica                         | Entrada                         | Resultado esperado                             |
| -------- | ------------------------------- | ------------------------------- | ---------------------------------------------- |
| CT-VL-01 | Valor Limite                    | Senha vazia                     | Login impedido e mensagem de campo obrigatório |
| CT-VL-02 | Valor Limite                    | 3 tentativas incorretas         | Usuário bloqueado conforme regra do sistema    |
| CT-VL-03 | Valor Limite                    | Tentativa após bloqueio         | Login não permitido                            |
| CT-PE-01 | Particionamento de Equivalência | Usuário e senha válidos         | Acesso permitido                               |
| CT-PE-02 | Particionamento de Equivalência | Usuário válido e senha inválida | Acesso negado                                  |
| CT-PE-03 | Particionamento de Equivalência | Usuário e senha vazios          | Login impedido                                 |
| TS-01    | Transição de Estados            | Credenciais válidas             | Não autenticado → Autenticado                  |
| TS-02    | Transição de Estados            | Logout                          | Autenticado → Não autenticado                  |
| TS-03    | Transição de Estados            | Limite de tentativas atingido   | Não autenticado → Bloqueado                    |

# 5. Conclusão

As técnicas utilizadas ajudam a testar diferentes comportamentos da funcionalidade de login.

A **Análise de Valor Limite** foi utilizada para verificar situações próximas aos limites, principalmente o limite de tentativas de acesso.

O **Particionamento de Equivalência** foi utilizado para separar entradas válidas e inválidas, como credenciais corretas, senha incorreta e campos vazios.

A **Transição de Estados** foi utilizada para verificar as mudanças entre os estados de usuário não autenticado, autenticado e bloqueado.

Dessa forma, os testes conseguem verificar tanto as entradas fornecidas pelo usuário quanto as mudanças de comportamento do sistema.
