# Atividade Avaliativa: 

## Escreva testes para uma funcionalidade de sua escolha no seu projeto

* Criar uma feature com descrição clara
* Criar 02 Cenários, contendo:
* Caminho feliz
* Caminhos alternativos usando “mas”

---


## Feature: Cadastro de Sala

### Cenário 1 — Cadastro de sala

**Objetivo:** Validar o cadastro de uma sala pelo administrador.

**Pré-condição:** Administrador autenticado e no módulo "Salas".

#### Caminho feliz

```gherkin
Scenario: Cadastrar sala com nome válido
  Given que o administrador está no módulo "Salas"
  When informa o nome "Sala 01"
  And clica no botão "+Novo registro"
  Then o sistema deve cadastrar a sala com sucesso
  And a sala "Sala 01" deve ser exibida na lista
```

#### Caminho alternativo

```gherkin
Scenario: Tentar cadastrar sala sem informar o nome
  Given que o administrador está no módulo "Salas"
  When deixa o campo "Nome da sala" vazio
  And clica no botão "+Novo registro"
  But o nome da sala não foi informado
  Then o sistema deve impedir o cadastro
  And deve apresentar uma mensagem informando que o nome é obrigatório
```

---

### Cenário 2 — Validação do nome da sala

**Objetivo:** Validar o comportamento do sistema diante de diferentes informações no campo de nome.

**Pré-condição:** Administrador autenticado e no módulo "Salas".

#### Caminho feliz

```gherkin
Scenario: Cadastrar sala com nome válido e descritivo
  Given que o administrador está no módulo "Salas"
  When informa o nome "Sala de Atendimento 01"
  And clica no botão "+Novo registro"
  Then o sistema deve cadastrar a sala com sucesso
  And a sala deve ser exibida na lista
```

#### Caminho alternativo

```gherkin
Scenario: Tentar cadastrar sala com nome inválido
  Given que o administrador está no módulo "Salas"
  When informa apenas espaços no campo "Nome da sala"
  And clica no botão "+Novo registro"
  But o nome informado não é válido
  Then o sistema deve impedir o cadastro
  And deve apresentar uma mensagem de validação
```



