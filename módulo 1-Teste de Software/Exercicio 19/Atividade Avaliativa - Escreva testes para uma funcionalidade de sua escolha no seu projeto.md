# Atividade Avaliativa: 

## Escreva testes para uma funcionalidade de sua escolha no seu projeto

* Criar uma feature com descrição clara
* Criar 02 Cenários, contendo:
* Caminho feliz
* Caminhos alternativos usando “mas”

---

# Atividade Avaliativa — Testes BDD

## Feature: Cadastro de Sala

```gherkin
  Feature: Cadastro de sala

  # Cenário 1 — Caminho feliz
  Scenario: Cadastrar sala com dados válidos

    # Objetivo: Validar o cadastro de uma sala utilizando um nome válido.
    # Pré-condição: Administrador autenticado e no módulo "Salas".

    Given que o administrador está no módulo "Salas"
    When informa um nome válido para a sala
    And clica no botão "+Novo registro"
    Then o sistema deve cadastrar a sala com sucesso
    And a sala deve ser exibida na lista de salas


  # Cenário 2 — Caminho alternativo
  Scenario: Tentar cadastrar sala sem informar o nome

    # Objetivo: Validar se o sistema impede o cadastro de uma sala sem nome.
    # Pré-condição: Administrador autenticado e no módulo "Salas".

    Given que o administrador está no módulo "Salas"
    When deixa o campo "Nome da sala" vazio
    And clica no botão "+Novo registro"
    But o nome da sala não foi informado
    Then o sistema deve impedir o cadastro
    And deve apresentar uma mensagem informando que o nome é obrigatório


  # Cenário 3 — Caminho feliz
  Scenario: Cadastrar sala com nome diferente

    # Objetivo: Validar o cadastro de uma sala com outro nome válido.
    # Pré-condição: Administrador autenticado e no módulo "Salas".

    Given que o administrador está no módulo "Salas"
    When informa o nome "Sala 02"
    And clica no botão "+Novo registro"
    Then o sistema deve cadastrar a sala com sucesso
    And "Sala 02" deve ser exibida na lista de salas


  # Cenário 4 — Caminho alternativo
  Scenario: Tentar cadastrar sala com caracteres inválidos

    # Objetivo: Validar o comportamento do sistema diante de caracteres inválidos.
    # Pré-condição: Administrador autenticado e no módulo "Salas".

    Given que o administrador está no módulo "Salas"
    When informa caracteres inválidos no campo "Nome da sala"
    And clica no botão "+Novo registro"
    But o nome informado não é válido
    Then o sistema deve impedir o cadastro
    And deve apresentar uma mensagem informando que o nome é inválido


  # Cenário 5 — Caminho feliz
  Scenario: Cadastrar sala com nome descritivo

    # Objetivo: Validar o cadastro de uma sala utilizando um nome descritivo.
    # Pré-condição: Administrador autenticado e no módulo "Salas".

    Given que o administrador está no módulo "Salas"
    When informa o nome "Sala de Atendimento 01"
    And clica no botão "+Novo registro"
    Then o sistema deve cadastrar a sala com sucesso
    And a sala deve aparecer na lista de salas


  # Cenário 6 — Caminho alternativo
  Scenario: Tentar cadastrar sala preenchendo apenas espaços

    # Objetivo: Validar se o sistema impede o cadastro quando o campo contém apenas espaços.
    # Pré-condição: Administrador autenticado e no módulo "Salas".

    Given que o administrador está no módulo "Salas"
    When informa apenas espaços no campo "Nome da sala"
    And clica no botão "+Novo registro"
    But o nome informado não possui caracteres válidos
    Then o sistema deve impedir o cadastro
    And deve apresentar uma mensagem de validação


