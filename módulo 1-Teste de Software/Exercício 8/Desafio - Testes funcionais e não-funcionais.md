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

**Sistema utilizado:**
https://andrelbribeiro.github.io/clinica-psi/

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

