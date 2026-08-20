# Atividade Avaliativa: 

## Escreva testes para uma funcionalidade de sua escolha no seu projeto

* Criar uma feature com descrição clara
* Criar 02 Cenários, contendo:
* Caminho feliz
* Caminhos alternativos usando “mas”

---


```gherkin
Feature: Cadastro de sala

# Caminho Feliz
 
 Scenario: Cadastrar sala com dados válidos
    Given que o administrador está no módulo "Salas"
    When informa um nome válido para a sala
    And clica no botão "+Novo registro"
    Then o sistema deve cadastrar a sala com sucesso
    And a sala deve ser exibida na lista de salas

# Caminho Alternativo 

 Scenario: Tentar cadastrar sala sem informar o nome
    Given que o administrador está no módulo "Salas"
    When deixa o campo "Nome da sala" vazio
    And clica no botão "+Novo registro"
    But o nome da sala não foi informado
    Then o sistema deve impedir o cadastro
    And deve apresentar uma mensagem informando que o nome é obrigatório

# Caminho Feliz

Scenario: Cadastrar sala com nome diferente
    Given que o administrador está no módulo "Salas"
    When informa o nome "Sala 02"
    And clica no botão "+Novo registro"
    Then o sistema deve cadastrar a sala com sucesso
    And "Sala 02" deve ser exibida na lista de salas

# Caminho Alternativo 

Scenario: Tentar cadastrar sala com caracteres inválidos
    Given que o administrador está no módulo "Salas"
    When informa caracteres inválidos no campo "Nome da sala"
    And clica no botão "+Novo registro"
    But o nome informado não é válido
    Then o sistema deve impedir o cadastro
    And deve apresentar uma mensagem informando que o nome é inválido

# Caminho Feliz 

Scenario: Cadastrar sala com nome descritivo
    Given que o administrador está no módulo "Salas"
    When informa o nome "Sala de Atendimento 01"
    And clica no botão "+Novo registro"
    Then o sistema deve cadastrar a sala com sucesso
    And a sala deve aparecer na lista de salas

# Caminho Alternativo 

 Scenario: Tentar cadastrar sala preenchendo apenas espaços
    Given que o administrador está no módulo "Salas"
    When informa apenas espaços no campo "Nome da sala"
    And clica no botão "+Novo registro"
    But o nome informado não possui caracteres válidos
    Then o sistema deve impedir o cadastro
    And deve apresentar uma mensagem de validação


