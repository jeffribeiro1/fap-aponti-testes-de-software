# Escreva testes para uma funcionalidade de sua escolha no seu projeto
Criar uma feature com descrição clara
Criar 02 Cenários, contendo:

Caminho feliz
Caminhos alternativos usando “mas”

* Checklist mental ao escrever Gherkin
* Está na terceira pessoa?
* Um comportamento por cenário?
* Ordem lógica respeitada?
* Linguagem de negócio?
* Leitura clara e natural?

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

# Checklist Mental ao Escrever Gherkin

Após criar os cenários de teste, foi realizada uma revisão utilizando o seguinte checklist:

## 1. Está na terceira pessoa? 

* [x] Os cenários utilizam "o administrador" em vez de "eu" ou "nós".
* [x] As ações estão descritas de forma objetiva.

**Exemplo:**

> Given que o administrador está no módulo "Salas"

---

## 2. Um comportamento por cenário? 

* [x] Cada cenário valida um comportamento específico.
* [x] O caminho feliz e o caminho alternativo estão relacionados ao mesmo comportamento.

**Exemplo:**

> Cadastrar uma sala com nome válido.

---

## 3. Ordem lógica respeitada? 

* [x] Primeiro é definida a condição inicial (`Given`).
* [x] Depois são realizadas as ações (`When` / `And`).
* [x] Por fim, é verificado o resultado (`Then` / `And`).

**Ordem utilizada:**

```text
Given → condição inicial
When  → ação realizada
Then  → resultado esperado
```

---

## 4. Linguagem de negócio? 

* [x] Foram utilizados termos relacionados ao sistema PSI.
* [x] Os cenários descrevem o comportamento esperado pelo usuário.
* [x] Não foram utilizados detalhes técnicos de implementação ou código.

**Exemplos de termos utilizados:**

* Administrador
* Sala
* Cadastro
* Nome da sala
* Lista de salas

---

## 5. Leitura clara e natural? 

* [x] Os cenários podem ser entendidos facilmente.
* [x] As frases são objetivas e diretas.
* [x] O comportamento esperado está claramente descrito.
* [x] Os cenários podem ser compreendidos por pessoas técnicas e não técnicas.

## Conclusão

Os cenários foram revisados e atendem às boas práticas de escrita em Gherkin, mantendo uma estrutura clara, objetiva e focada no comportamento do sistema.

