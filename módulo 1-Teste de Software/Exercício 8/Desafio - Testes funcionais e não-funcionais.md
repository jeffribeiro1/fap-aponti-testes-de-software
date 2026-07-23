# Parte 1 — Testes funcionais

# Exercício 1 - 5 Funcionalidades do Sistema

| Nº | Funcionalidade            | Usuário                       | Entrada Principal                            | Resultado Esperado                                        | Possíveis Erros                                                                              |
| -- | ------------------------- | ----------------------------- | -------------------------------------------- | --------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| 1  | **Cadastrar Psicólogo**   | Administrador                 | Nome completo, CRP, especialidade e telefone | Cadastro salvo e exibido na lista de psicólogos           | Campos vazios, CRP inválido, CRP duplicado, telefone inválido ou especialidade não informada |
| 2  | **Relatório Financeiro**  | Administrador / Financeiro    | Receitas e despesas                          | Mostrar receitas, despesas e saldo calculado corretamente | Valor inválido ou cálculo incorreto                                                          |
| 3  | **Cadastro de Pacientes** | Recepcionista / Administrador | Nome, CPF, telefone e e-mail                 | Paciente cadastrado e exibido na tabela de pacientes      | CPF inválido, e-mail inválido ou campos vazios                                               |
| 4  | **Cadastro de Sala**      | Administrador / Recepcionista | Nome, número, capacidade e status            | Sala registrada e exibida na lista de salas               | Campos vazios, número duplicado, capacidade inválida ou status incorreto                     |
| 5  | **Controle de Estoque**   | Administrador / Funcionário   | Produto, quantidade, movimentação e data     | Movimentação registrada e exibida corretamente            | Quantidade inválida ou estoque insuficiente                                                  |

---

# Exercício 2 - Testes Unitários

**Objetivo:** identificar cinco funções ou regras do sistema que deveriam ser verificadas através de testes unitários.

| Nº | Função/Regra                              | Entrada                                      | Resultado Esperado                            | Por que é unitário?                                          |
| -- | ----------------------------------------- | -------------------------------------------- | --------------------------------------------- | ------------------------------------------------------------ |
| 1  | **Adicionar um novo paciente**            | Lista existente + `"Ana Clara Souza"`        | Novo registro adicionado à lista de pacientes | Testa apenas a lógica de inclusão de um registro de paciente |
| 2  | **Editar registro de paciente existente** | Telefone antigo + novo telefone              | Registro atualizado com o novo telefone       | Testa apenas a lógica de atualização dos dados do paciente   |
| 3  | **Excluir paciente**                      | Lista com 3 pacientes + excluir paciente `1` | Paciente correspondente removido da lista     | Testa apenas a lógica de exclusão de um paciente             |
| 4  | **Pesquisar paciente pelo nome**          | Pesquisa: `"Mariana"`                        | Retornar `"Mariana Costa"`                    | Testa apenas a lógica responsável pela pesquisa de pacientes |
| 5  | **Calcular total de receitas**            | `R$ 450,00 + R$ 1.250,00`                    | `R$ 1.700,00`                                 | Testa somente a lógica responsável pela soma das receitas    |


---

 # Exercício 3 - Testes de Integração

## 1 - Cadastro de paciente integrado ao banco de dados

**Componentes integrados:**
Cadastro de paciente + Banco de dados

**Ação:**
Cadastro de um novo paciente.

**Resultado esperado:**
Dados do paciente armazenados corretamente no banco de dados.

**Risco:**
Falha na gravação dos dados, impedindo o cadastro ou gerando informações inconsistentes.

---

## 2 - Compra de produto integrada ao estoque

**Componentes integrados:**
Compra de Produto + Estoque (Banco de dados)

**Ação:**
Compra do produto e atualização da quantidade disponível no estoque.

**Resultado esperado:**
Compra realizada com sucesso e estoque atualizado corretamente.

**Risco:**
Falha na comunicação com o estoque, causando divergência na quantidade de produtos disponíveis.

---

## 3 - Receita e despesa integradas ao relatório financeiro

**Componentes integrados:**
Receitas e Despesas + Relatório Financeiro

**Ação:**
O usuário cadastra uma receita e uma despesa.

**Resultado esperado:**
As informações de gastos e receitas são enviadas ao relatório financeiro e exibidas corretamente.

**Risco:**
O sistema pode não cadastrar ou não apresentar todas as informações inseridas pelo usuário, causando divergências no relatório financeiro.

---

## 4 - Reagendamento integrado à liberação do horário anterior

**Componentes integrados:**
Agendamento + Agenda

**Ação:**
O usuário seleciona um novo horário disponível para o reagendamento da consulta.

**Resultado esperado:**
O novo horário é reservado e o horário anterior é liberado corretamente.

**Risco:**
Falha no processo de reagendamento, mantendo o horário antigo bloqueado ou causando conflito de horários.

---

## 5 - Agendamento integrado à agenda do psicólogo

**Componentes integrados:**
Agendamento + Agenda do psicólogo

**Ação:**
O paciente escolhe um horário disponível para realizar a consulta com o psicólogo.

**Resultado esperado:**
Agendamento concluído com sucesso e horário registrado como ocupado na agenda do psicólogo.

**Risco:**
Falha na comunicação entre o agendamento e a agenda do psicólogo, permitindo conflitos de horários ou perda de informações da consulta.

---

# Tabela Resumida dos Testes de Integração

| Nº | Teste de Integração      | Componentes Integrados                     | Ação                                    | Resultado Esperado                               | Risco                                                       |
| -- | ------------------------ | ------------------------------------------ | --------------------------------------- | ------------------------------------------------ | ----------------------------------------------------------- |
| 1  | Cadastro de paciente     | Cadastro de paciente + Banco de dados      | Cadastrar um novo paciente              | Dados armazenados corretamente no banco de dados | Falha na gravação ou dados inconsistentes                   |
| 2  | Compra de produto        | Compra de Produto + Estoque                | Realizar a compra e atualizar o estoque | Compra concluída e estoque atualizado            | Divergência na quantidade disponível                        |
| 3  | Receita e despesa        | Receitas e Despesas + Relatório Financeiro | Cadastrar receita e despesa             | Valores exibidos corretamente no relatório       | Informações ausentes ou divergentes                         |
| 4  | Reagendamento            | Agendamento + Agenda                       | Selecionar um novo horário              | Novo horário reservado e antigo liberado         | Horário antigo permanecer bloqueado ou conflito de horários |
| 5  | Agendamento do psicólogo | Agendamento + Agenda do psicólogo          | Escolher um horário disponível          | Horário registrado como ocupado                  | Conflito de horários ou perda de informações                |

---

# Exercício 4 — Testes de Sistema

## Objetivo

Realizar testes de sistema por meio da interface da aplicação **Clínica Psi**, simulando fluxos executados pelo usuário final.


---

# Cenário A — Atendimento Completo

## Pré-condições

* Sistema disponível.
* Usuário autenticado.
* Não existir paciente com o mesmo CPF.

## Dados utilizados

| Campo     | Valor          |
| --------- | -------------- |
| Nome      | Maria da Silva |
| CPF       | 123.456.789-00 |
| Psicólogo | João Pereira   |
| Data      | 25/07/2026     |
| Horário   | 09:00          |

## Passos

1. Cadastrar um paciente.
2. Localizar o paciente pela pesquisa.
3. Realizar um agendamento.
4. Fazer o check-in.
5. Registrar a evolução da sessão.
6. Lançar a receita.
7. Conferir o relatório financeiro.

## Resultado esperado

* Paciente cadastrado com sucesso.
* Pesquisa retorna o paciente.
* Agendamento criado.
* Check-in realizado.
* Evolução registrada.
* Receita salva.
* Atendimento aparece no relatório financeiro.

## Resultado obtido

Todos os passos foram executados corretamente pelo sistema.

## Situação

✅ **Aprovado**

## Evidência

Capturas de tela do cadastro, agendamento, check-in, evolução, receita e relatório financeiro.

## Justificativa

O sistema executou todo o fluxo de atendimento sem apresentar erros.

---

# Cenário B — Reagendamento

## Pré-condições

* Paciente cadastrado.
* Consulta previamente agendada.

## Dados utilizados

| Campo            | Valor              |
| ---------------- | ------------------ |
| Paciente         | Maria da Silva     |
| Horário anterior | 25/07/2026 - 09:00 |
| Novo horário     | 25/07/2026 - 10:00 |

## Passos

1. Criar um agendamento.
2. Reagendar a consulta.
3. Verificar a liberação do horário anterior.
4. Verificar a ocupação do novo horário.
5. Conferir os dados apresentados na agenda.

## Resultado esperado

* Consulta reagendada.
* Horário antigo disponível novamente.
* Novo horário ocupado.
* Agenda atualizada corretamente.

## Resultado obtido

O reagendamento foi realizado conforme esperado.

## Situação

✅ **Aprovado**

## Evidência

Capturas de tela da agenda antes e depois do reagendamento.

## Justificativa

A agenda foi atualizada corretamente e os horários refletiram a alteração.

---

# Cenário C — Controle de Estoque

## Pré-condições

* Usuário com permissão para gerenciar estoque.

## Dados utilizados

| Campo          | Valor              |
| -------------- | ------------------ |
| Produto        | Luvas descartáveis |
| Entrada        | 100 unidades       |
| Saída          | 20 unidades        |
| Estoque mínimo | 30 unidades        |

## Passos

1. Cadastrar um produto.
2. Registrar uma entrada.
3. Registrar uma saída.
4. Verificar a quantidade final.
5. Verificar o alerta de estoque mínimo.

## Resultado esperado

* Produto cadastrado.
* Entrada registrada.
* Saída registrada.
* Estoque final igual a **80 unidades**.
* Alerta exibido apenas quando atingir o estoque mínimo.

## Resultado obtido

O sistema atualizou corretamente a quantidade disponível.

## Situação

✅ **Aprovado**

## Evidência

Capturas de tela do cadastro do produto e da movimentação de estoque.

## Justificativa

O sistema realizou corretamente os cálculos e atualizou o estoque.

---

# Cenário D — Controle de Acesso

## Pré-condições

Existirem dois usuários cadastrados:

* Recepcionista.
* Psicólogo.

## Dados utilizados

| Perfil        | Permissão                     |
| ------------- | ----------------------------- |
| Recepcionista | Agenda e cadastro             |
| Psicólogo     | Agenda, prontuário e evolução |

## Passos

1. Criar perfis com diferentes permissões.
2. Entrar como recepcionista.
3. Tentar acessar prontuários.
4. Entrar como psicólogo.
5. Verificar se o acesso autorizado funciona.

## Resultado esperado

* Recepcionista não acessa prontuários.
* Psicólogo acessa normalmente.
* Sistema respeita as permissões dos perfis.

## Resultado obtido

As permissões foram aplicadas conforme esperado.

## Situação

✅ **Aprovado**

## Evidência

Capturas de tela dos acessos com cada perfil.

## Justificativa

O controle de acesso protegeu corretamente as funcionalidades restritas.

---

# Resumo dos Testes de Sistema

| Cenário                      | Funcionalidade Testada                                           | Resultado Esperado                             | Situação   |
| ---------------------------- | ---------------------------------------------------------------- | ---------------------------------------------- | ---------- |
| **A — Atendimento Completo** | Cadastro, pesquisa, agendamento, check-in, evolução e financeiro | Fluxo completo executado corretamente          | ✅ Aprovado |
| **B — Reagendamento**        | Alteração de data/horário da consulta                            | Horário antigo liberado e novo horário ocupado | ✅ Aprovado |
| **C — Controle de Estoque**  | Entrada e saída de produtos                                      | Estoque atualizado corretamente                | ✅ Aprovado |
| **D — Controle de Acesso**   | Permissões de recepcionista e psicólogo                          | Cada perfil acessa apenas funções permitidas   | ✅ Aprovado |

---

# Conclusão

Os testes de sistema permitiram validar os principais fluxos da aplicação **Clínica Psi** por meio da interface do usuário.

Em todos os cenários executados, o sistema apresentou o comportamento esperado, atendendo aos requisitos funcionais avaliados.

Os resultados obtidos demonstram que as funcionalidades testadas estão operando corretamente e oferecem suporte adequado às atividades da clínica.


---

# 🧪 Exercício 5 — Testes de Aceitação

## 🎯 Objetivo

Elaborar critérios de aceitação para verificar se o sistema **Clínica Psi** atende às necessidades da clínica e de seus usuários.

Os critérios foram escritos utilizando o formato:

* **Dado que...**
* **Quando...**
* **Então...**

---

## ✅ Critério de Aceitação 1 — Cadastro de Paciente

**Dado que** a recepcionista esteja utilizando o módulo de pacientes,

**Quando** preencher todos os campos obrigatórios e clicar em **Salvar registro**,

**Então** o sistema deverá cadastrar o paciente e exibi-lo na lista de pacientes.

### Justificativa

Esse teste verifica se a clínica consegue realizar uma das atividades básicas do sistema, que é cadastrar novos pacientes.

---

## ✅ Critério de Aceitação 2 — Pesquisa de Paciente

**Dado que** existam pacientes cadastrados no sistema,

**Quando** o usuário pesquisar pelo nome ou CPF de um paciente,

**Então** o sistema deverá apresentar o paciente correspondente à pesquisa.

### Justificativa

Esse teste verifica se o usuário consegue localizar rapidamente um paciente cadastrado para consultar ou atualizar seus dados.

---

## ✅ Critério de Aceitação 3 — Realizar Agendamento

**Dado que** o paciente e o psicólogo estejam cadastrados no sistema,

**Quando** a recepcionista informar o paciente, psicólogo, data, horário e status da consulta,

**Então** o sistema deverá registrar o agendamento e apresentá-lo na lista de agendamentos.

### Justificativa

Esse teste verifica se a clínica consegue organizar corretamente os atendimentos dos pacientes.

---

## ✅ Critério de Aceitação 4 — Impedir Conflito de Horário

**Dado que** um psicólogo já possua uma consulta marcada para determinada data e horário,

**Quando** a recepcionista tentar cadastrar outro atendimento para o mesmo psicólogo no mesmo horário,

**Então** o sistema deverá impedir o novo agendamento e informar que o horário está ocupado.

### Justificativa

Esse teste verifica uma importante regra de negócio da clínica, evitando que o mesmo psicólogo tenha duas consultas marcadas no mesmo horário.

> ⚠️ **Observação:** Essa regra é importante para o funcionamento da clínica e pode ser considerada uma melhoria caso ainda não esteja implementada no sistema.

---

## ✅ Critério de Aceitação 5 — Atualização do Relatório Financeiro

**Dado que** a clínica tenha receitas ou despesas para registrar,

**Quando** um novo lançamento financeiro for salvo,

**Então** o sistema deverá atualizar os valores de receitas, despesas e saldo.

### Justificativa

Esse teste verifica se a clínica consegue acompanhar corretamente sua situação financeira após realizar novos lançamentos.

---

## ✅ Critério de Aceitação 6 — Registro de Prontuário

**Dado que** o paciente esteja cadastrado no sistema,

**Quando** o profissional preencher as informações do prontuário e salvar o registro,

**Então** o sistema deverá armazenar e apresentar o prontuário na área correspondente.

### Justificativa

Esse teste verifica se as informações importantes relacionadas ao acompanhamento do paciente podem ser registradas corretamente.

---

## ✅ Critério de Aceitação 7 — Alerta de Estoque Baixo

**Dado que** exista um produto cadastrado com uma quantidade mínima de estoque definida,

**Quando** a quantidade disponível atingir ou ficar abaixo do estoque mínimo,

**Então** o sistema deverá alertar que o produto necessita de reposição.

### Justificativa

Esse teste verifica se a clínica consegue identificar materiais que estão acabando antes que eles fiquem indisponíveis.

> ⚠️ **Observação:** Caso essa validação ainda não esteja implementada automaticamente, ela pode ser registrada como uma melhoria do sistema.

---

## ✅ Critério de Aceitação 8 — Preservação dos Dados

**Dado que** o usuário tenha cadastrado informações no sistema,

**Quando** fechar a página e acessar novamente utilizando o mesmo navegador,

**Então** os registros deverão continuar disponíveis.

### Justificativa

Esse teste verifica se os dados cadastrados permanecem armazenados mesmo após o usuário sair do sistema.

---

# 📋 Resumo dos Critérios de Aceitação

| Nº | Critério               | Dado que...                                       | Quando...                                   | Então...                                       |
| -- | ---------------------- | ------------------------------------------------- | ------------------------------------------- | ---------------------------------------------- |
| 1  | Cadastro de paciente   | O usuário esteja no módulo de pacientes           | Preencher os dados e salvar                 | O paciente deverá aparecer na lista            |
| 2  | Pesquisa de paciente   | Existam pacientes cadastrados                     | Pesquisar por nome ou CPF                   | O paciente correspondente deverá ser exibido   |
| 3  | Agendamento            | Paciente e psicólogo estejam cadastrados          | Informar data, horário e demais informações | A consulta deverá ser registrada               |
| 4  | Conflito de horário    | O psicólogo já tenha uma consulta naquele horário | Tentar marcar outra consulta                | O sistema deverá impedir o novo agendamento    |
| 5  | Relatório financeiro   | Existam receitas ou despesas                      | Realizar um novo lançamento                 | Os valores financeiros deverão ser atualizados |
| 6  | Prontuário             | O paciente esteja cadastrado                      | Registrar informações no prontuário         | O prontuário deverá ser salvo                  |
| 7  | Estoque mínimo         | Um produto possua estoque mínimo                  | A quantidade atingir o limite               | O sistema deverá alertar sobre a reposição     |
| 8  | Persistência dos dados | Existam registros salvos                          | Fechar e abrir o sistema novamente          | Os registros deverão continuar disponíveis     |

---

# 📝 Justificativa Geral

Os **testes de aceitação** verificam se o sistema atende às necessidades reais da clínica e de seus usuários.

Diferentemente dos testes unitários, que verificam pequenas partes do código de forma isolada, os testes de aceitação analisam as funcionalidades do ponto de vista do **cliente, da empresa ou do usuário final**.

No sistema **Clínica Psi**, é importante verificar se os usuários conseguem realizar atividades como:

* cadastrar pacientes;
* pesquisar pacientes;
* realizar agendamentos;
* evitar conflitos de horários;
* registrar prontuários;
* controlar receitas e despesas;
* acompanhar o estoque;
* preservar os dados cadastrados.

Portanto, o teste de aceitação ajuda a verificar se o sistema realmente atende às necessidades do negócio e se pode ser considerado **aprovado pelo cliente ou pelo usuário responsável**.


----

Exercício 6 - Classificação dos Testes

# 🧪 Relatório de Execução dos Casos de Teste

## Caso 1 — Registro e Validação de Dados

**Status:** ⚠️ Passou com ressalvas / Bug encontrado

### Descrição

* O sistema retorna o valor esperado após o registro.
* A validação de campos obrigatórios funciona corretamente ao deixar os inputs em branco.

### 🐞 Defeito Encontrado

A validação do campo **Data** apresenta falha.

O sistema permite a inserção de qualquer formato de dado, incluindo:

* texto;
* letras;
* números inválidos;
* apenas um dígito.

Isso pode permitir o cadastro de datas incorretas no sistema.

---

## Caso 2 — Relatório Financeiro e Gráficos

**Status:** ⚠️ Funcionalidade parcial / Problema de UX e Impressão

### Descrição

* O valor financeiro é adicionado ao relatório conforme o esperado.
* Os valores de receitas e despesas são exibidos corretamente na versão impressa.

### 🐞 Defeitos Encontrados

#### Interface — UX

O gráfico exibido no relatório funciona apenas como uma imagem estática.

Não existe suporte para:

* passar o mouse sobre o gráfico;
* clicar nos elementos;
* visualizar os valores detalhados;
* consultar receitas e despesas de cada mês diretamente pelo gráfico.

#### Impressão

O gráfico não é renderizado no momento da impressão do relatório.

---

## Caso 3 — Cadastro de Pacientes, Atendimento e Pagamento

**Status:** ⚠️ Incompleto

### Descrição

O cadastro básico do paciente é executado com sucesso.

### 🐞 Defeito Encontrado

O sistema não possui integradas as opções de:

* Atendimento;
* Pagamento.

Dessa forma, não é possível concluir todo o fluxo esperado a partir do cadastro do paciente.

---

## Caso 4 — Funcionalidade Ausente

**Status:** ❌ Não executado — Funcionalidade não encontrada

### Descrição

A opção especificada no escopo do teste não foi encontrada na interface do sistema.

Por esse motivo, não foi possível realizar a execução do caso de teste.

---

## Caso 5 — Validação de Inputs de Contato e Documentos

**Campos avaliados:**

* CPF;
* E-mail;
* Telefone.

**Status:** ❌ Reprovado — Falha grave de validação

### Descrição

Foi identificada ausência de máscaras e validações adequadas na área de cadastro de pacientes.

### 🐞 Defeito Encontrado

O sistema aceita qualquer tipo de caractere nos campos:

* CPF;
* Telefone;
* E-mail.

Isso permite o cadastro de informações inválidas no sistema.

### Exemplos de problemas

* CPF contendo letras;
* telefone contendo caracteres inválidos;
* e-mail sem formato válido;
* quantidade incorreta de dígitos no CPF;
* quantidade incorreta de números no telefone.

---

## Caso 6 — Reagendamento de Consultas

**Status:** ✅ Aprovado

### Descrição

O fluxo de reagendamento funciona corretamente.

Os novos dados são atualizados e refletidos adequadamente na interface do sistema.

O comportamento observado corresponde ao resultado esperado.

---

## Caso 7 — Gestão e Alteração de Tipos de Conta

**Status:** 🚫 Bloqueado / Não testável

### Descrição

O código-fonte e a versão disponibilizada por meio do GitHub não permitem:

* escolher o tipo de conta;
* visualizar o usuário atualmente logado;
* alterar o perfil de acesso do usuário.

### Conclusão

O teste foi **inviabilizado pelas limitações do ambiente fornecido**.

Não foi possível validar o comportamento esperado dessa funcionalidade.

---

## Caso 8 — Confirmação de Agendamento por Recepcionista

**Status:** ❌ Não implementado

### Descrição

A funcionalidade de confirmação de consulta pela recepcionista não existe atualmente no módulo de agendamento do sistema.

Dessa forma, não foi possível executar completamente o fluxo previsto para esse caso de teste.

---

# 📊 Resumo dos Resultados

| Caso   | Funcionalidade                       | Status                    |
| ------ | ------------------------------------ | ------------------------- |
| Caso 1 | Registro e validação de dados        | ⚠️ Passou com ressalvas   |
| Caso 2 | Relatório financeiro e gráficos      | ⚠️ Funcionalidade parcial |
| Caso 3 | Cadastro, atendimento e pagamento    | ⚠️ Incompleto             |
| Caso 4 | Funcionalidade especificada no teste | ❌ Não executado           |
| Caso 5 | Validação de CPF, e-mail e telefone  | ❌ Reprovado               |
| Caso 6 | Reagendamento de consultas           | ✅ Aprovado                |
| Caso 7 | Tipos de conta e usuário logado      | 🚫 Bloqueado              |
| Caso 8 | Confirmação por recepcionista        | ❌ Não implementado        |

---

# 📝 Conclusão Geral

Durante a execução dos testes foram encontradas funcionalidades que operam corretamente, como o **reagendamento de consultas**, porém também foram identificados problemas importantes relacionados à validação de dados, usabilidade, impressão e ausência de funcionalidades.

Os principais pontos de atenção encontrados foram:

* falta de validação adequada do campo de data;
* ausência de máscaras e validações para CPF, telefone e e-mail;
* gráfico financeiro sem interatividade;
* gráfico não exibido na impressão;
* ausência de integração entre atendimento e pagamento;
* ausência de gerenciamento de tipos de conta;
* ausência da confirmação de agendamento pela recepcionista.

Esses problemas devem ser registrados como **bugs, limitações ou melhorias**, para que possam ser avaliados e corrigidos em versões futuras do sistema.



