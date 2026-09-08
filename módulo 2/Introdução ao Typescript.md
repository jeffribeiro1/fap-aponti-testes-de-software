# 🟦 Introdução ao TypeScript

**TypeScript (TS)** é uma linguagem baseada em JavaScript que adiciona principalmente **tipagem estática** ao código.

Em JavaScript:

```javascript
let idade = 25;

idade = "vinte e cinco";
```

O JavaScript permite isso.

No TypeScript:

```typescript
let idade: number = 25;

idade = "vinte e cinco";
```

O TypeScript acusa um erro porque `idade` foi definida como `number` e não pode receber uma `string`.

## Por que usar TypeScript?

Imagine um sistema de clínica:

```typescript
let nomePaciente: string = "João";
let idadePaciente: number = 30;
let pacienteAtivo: boolean = true;
```

O código deixa explícito:

* `nomePaciente` → texto
* `idadePaciente` → número
* `pacienteAtivo` → verdadeiro ou falso

Isso ajuda a encontrar erros **antes mesmo de executar o programa**.

---

# 1. Variáveis e tipos

Os tipos básicos mais utilizados são:

```typescript
let nome: string = "Jefferson";
let idade: number = 30;
let ativo: boolean = true;
```

## `string`

Representa texto:

```typescript
let nome: string = "Maria";
```

## `number`

Representa números:

```typescript
let idade: number = 25;
let salario: number = 1500.50;
```

## `boolean`

Representa verdadeiro ou falso:

```typescript
let usuarioAtivo: boolean = true;
```

---

# 2. Inferência de tipos

O TypeScript consegue descobrir automaticamente o tipo de uma variável.

```typescript
let nome = "Maria";
let idade = 25;
```

Nesse caso, o TypeScript entende automaticamente:

```text
nome → string
idade → number
```

Isso é chamado de **inferência de tipos**.

Não é necessário escrever `: string` ou `: number` em todas as situações.

---

# 3. Funções

Funções são blocos de código criados para executar uma determinada tarefa.

Exemplo:

```typescript
function calcularIdade(anoNascimento: number): number {
    return 2026 - anoNascimento;
}
```

## Entendendo a função

### `function`

Indica que estamos criando uma função.

```typescript
function
```

### `calcularIdade`

É o nome da função:

```typescript
function calcularIdade
```

### `(anoNascimento: number)`

É o parâmetro que a função recebe.

```typescript
(anoNascimento: number)
```

Estamos dizendo:

> A função recebe uma variável chamada `anoNascimento` e ela precisa ser um número.

### `: number`

Indica o tipo de dado que a função retorna.

```typescript
): number
```

Nesse caso, a função precisa retornar um `number`.

### `return`

O `return` devolve o resultado da função.

```typescript
return 2026 - anoNascimento;
```

## Utilizando a função

```typescript
let idade = calcularIdade(1995);

console.log(idade);
```

Resultado:

```text
31
```

---

# 4. Parâmetros

Uma função pode receber vários parâmetros.

```typescript
function cadastrarPaciente(
    nome: string,
    idade: number
): string {

    return `Paciente: ${nome}, idade: ${idade}`;
}
```

Podemos chamar a função:

```typescript
cadastrarPaciente("João", 35);
```

Resultado:

```text
Paciente: João, idade: 35
```

## Entendendo os parâmetros

```typescript
nome: string
```

O primeiro parâmetro precisa ser um texto.

```typescript
idade: number
```

O segundo parâmetro precisa ser um número.

Portanto:

```typescript
cadastrarPaciente("João", 35);
```

Está correto.

Mas:

```typescript
cadastrarPaciente(100, "trinta");
```

Está errado porque os tipos estão invertidos.

---

# 5. Arrays

Um **array** é uma lista de valores.

Exemplo:

```typescript
let nomes: string[] = [
    "João",
    "Maria",
    "Carlos"
];
```

O `string[]` significa:

> Este array só pode conter valores do tipo `string`.

## Adicionando elementos

Podemos utilizar o método `push()`:

```typescript
nomes.push("Ana");
```

O `push()` adiciona um novo elemento ao final do array.

Agora o array será:

```text
["João", "Maria", "Carlos", "Ana"]
```

Se tentarmos:

```typescript
nomes.push(25);
```

O TypeScript apresentará um erro porque `25` é um `number`, enquanto o array aceita somente `string`.

---

# 6. Objetos

Objetos permitem armazenar várias informações relacionadas.

Exemplo:

```typescript
const paciente = {
    nome: "João",
    idade: 35,
    ativo: true
};
```

Podemos acessar suas propriedades:

```typescript
console.log(paciente.nome);
console.log(paciente.idade);
console.log(paciente.ativo);
```

Resultado:

```text
João
35
true
```

---

# 7. Interface

Uma das funcionalidades mais importantes do TypeScript é a `interface`.

Uma interface define a **estrutura que um objeto deve possuir**.

```typescript
interface Paciente {
    nome: string;
    idade: number;
    ativo: boolean;
}
```

Estamos dizendo:

> Um objeto do tipo `Paciente` precisa possuir `nome`, `idade` e `ativo`.

Agora podemos criar um paciente:

```typescript
const paciente: Paciente = {
    nome: "João",
    idade: 35,
    ativo: true
};
```

Isso está correto.

Porém:

```typescript
const paciente: Paciente = {
    nome: "João",
    idade: "35",
    ativo: true
};
```

Está errado.

Isso acontece porque definimos:

```typescript
idade: number;
```

Mas estamos passando:

```typescript
idade: "35";
```

`"35"` é uma `string`, enquanto `35` é um `number`.

---

# 8. Função utilizando uma interface

Podemos combinar interfaces com funções.

```typescript
interface Paciente {
    nome: string;
    idade: number;
    ativo: boolean;
}

function exibirPaciente(paciente: Paciente): string {
    return `Nome: ${paciente.nome} | Idade: ${paciente.idade}`;
}
```

Agora criamos um paciente:

```typescript
const paciente: Paciente = {
    nome: "Maria",
    idade: 28,
    ativo: true
};
```

E utilizamos a função:

```typescript
console.log(exibirPaciente(paciente));
```

Resultado:

```text
Nome: Maria | Idade: 28
```

## O que acontece na função?

```typescript
function exibirPaciente
```

Cria uma função chamada `exibirPaciente`.

```typescript
(paciente: Paciente)
```

A função recebe um objeto chamado `paciente`.

Esse objeto precisa seguir a estrutura da interface `Paciente`.

```typescript
: string
```

Indica que a função retorna uma `string`.

```typescript
paciente.nome
```

Acessa o nome do paciente.

```typescript
paciente.idade
```

Acessa a idade do paciente.

```typescript
return
```

Devolve o texto produzido pela função.

---

# 9. Propriedades opcionais

Podemos definir propriedades que não são obrigatórias utilizando `?`.

Exemplo:

```typescript
interface Paciente {
    nome: string;
    idade: number;
    telefone?: string;
}
```

O `?` indica que `telefone` é opcional.

Portanto, isso é válido:

```typescript
const paciente: Paciente = {
    nome: "João",
    idade: 30
};
```

E isso também:

```typescript
const paciente: Paciente = {
    nome: "João",
    idade: 30,
    telefone: "81999999999"
};
```

---

# 10. Union Types

O **Union Type** permite que uma variável aceite mais de um tipo ou valor específico.

Utilizamos o símbolo `|`.

Exemplo:

```typescript
let status: "ativo" | "inativo";
```

Agora a variável só pode receber:

```typescript
status = "ativo";
```

ou:

```typescript
status = "inativo";
```

Mas isso seria inválido:

```typescript
status = "cancelado";
```

## Exemplo em um sistema

```typescript
interface Usuario {
    nome: string;
    perfil: "Administrador" | "Psicólogo" | "Recepcionista";
}
```

Agora:

```typescript
const usuario: Usuario = {
    nome: "Carlos",
    perfil: "Administrador"
};
```

Está correto.

O perfil só pode ser um dos valores definidos:

```text
Administrador
Psicólogo
Recepcionista
```

---

# 11. `any`

O `any` permite que uma variável receba praticamente qualquer tipo de valor.

```typescript
let valor: any = "teste";

valor = 10;

valor = true;

valor = [];
```

Todos esses valores são aceitos.

Porém, o uso excessivo de `any` não é recomendado.

Isso acontece porque você perde uma das principais vantagens do TypeScript:

> **A segurança proporcionada pela tipagem.**

Sempre que possível, é melhor utilizar um tipo específico.

---

# 12. Arrow Functions

Você também encontrará muitas funções escritas dessa maneira:

```typescript
const somar = (a: number, b: number): number => {
    return a + b;
};
```

Isso é uma **Arrow Function**.

Podemos executar:

```typescript
console.log(somar(10, 20));
```

Resultado:

```text
30
```

Também podemos escrever de maneira mais curta:

```typescript
const somar = (a: number, b: number): number => a + b;
```

Nesse caso, não precisamos escrever `return` porque o resultado da expressão é retornado automaticamente.

---

# 13. Exemplo completo

Agora vamos juntar vários conceitos em um pequeno sistema de pacientes.

```typescript
interface Paciente {
    id: number;
    nome: string;
    idade: number;
    ativo: boolean;
}

const pacientes: Paciente[] = [
    {
        id: 1,
        nome: "João",
        idade: 30,
        ativo: true
    },
    {
        id: 2,
        nome: "Maria",
        idade: 25,
        ativo: true
    }
];

function buscarPaciente(id: number): Paciente | undefined {
    return pacientes.find(paciente => paciente.id === id);
}

const paciente = buscarPaciente(1);

console.log(paciente);
```

---

## Entendendo o exemplo

### Interface

```typescript
interface Paciente {
```

Cria o modelo de um paciente.

```typescript
id: number;
```

O ID precisa ser um número.

```typescript
nome: string;
```

O nome precisa ser texto.

```typescript
idade: number;
```

A idade precisa ser um número.

```typescript
ativo: boolean;
```

O status precisa ser `true` ou `false`.

---

## Array de pacientes

```typescript
const pacientes: Paciente[] = [
```

Criamos uma lista de pacientes.

O:

```typescript
Paciente[]
```

significa:

> Array contendo objetos do tipo `Paciente`.

---

## Função `buscarPaciente`

```typescript
function buscarPaciente(id: number): Paciente | undefined {
```

A função recebe:

```typescript
id: number
```

Portanto, o ID precisa ser um número.

A função pode retornar:

```typescript
Paciente
```

ou:

```typescript
undefined
```

Por isso temos:

```typescript
Paciente | undefined
```

O `|` significa **OU**.

---

# 14. O método `.find()`

Dentro da função temos:

```typescript
return pacientes.find(paciente => paciente.id === id);
```

O método `.find()` procura um elemento dentro de um array.

Esta parte:

```typescript
paciente => paciente.id === id
```

é uma Arrow Function.

Ela verifica:

> O ID deste paciente é igual ao ID que estou procurando?

Se encontrar o paciente:

```text
Paciente
```

Se não encontrar:

```text
undefined
```

---

# 15. TypeScript com React

Como o TypeScript é muito utilizado com React, é importante entender como os dois trabalham juntos.

Podemos definir o tipo de um paciente:

```typescript
interface Paciente {
    id: number;
    nome: string;
    idade: number;
}
```

Depois podemos criar as propriedades (`props`) de um componente:

```tsx
interface Props {
    paciente: Paciente;
}
```

E criar o componente:

```tsx
function CardPaciente({ paciente }: Props) {
    return (
        <div>
            <h2>{paciente.nome}</h2>
            <p>Idade: {paciente.idade}</p>
        </div>
    );
}
```

Podemos utilizar o componente:

```tsx
<CardPaciente paciente={paciente} />
```

O TypeScript verifica se `paciente` possui a estrutura esperada.

---

# 🧠 Ordem recomendada para estudar TypeScript

Para quem está começando, uma boa ordem é:

```text
1. Tipos básicos
   ↓
2. Variáveis
   ↓
3. Funções
   ↓
4. Arrays
   ↓
5. Objetos
   ↓
6. Interfaces
   ↓
7. Union Types
   ↓
8. Propriedades opcionais
   ↓
9. Type Aliases
   ↓
10. Generics
   ↓
11. Classes
   ↓
12. Promise
   ↓
13. Async/Await
   ↓
14. TypeScript + React
```

## 🎯 Conceitos mais importantes para Front-end e QA

Dê atenção especial a:

* `string`
* `number`
* `boolean`
* arrays
* objetos
* `interface`
* `type`
* funções
* union types (`|`)
* propriedades opcionais (`?`)
* `Promise`
* `async/await`
* generics (`<T>`)
* tipos de `props` no React

Dominando esses conceitos, você terá uma **boa base para começar a desenvolver aplicações com TypeScript e React**.


=====

# 🟦 Por que o TypeScript existe?

O **TypeScript** existe principalmente para resolver problemas de **segurança, previsibilidade e manutenção** que podem aparecer quando projetos JavaScript ficam maiores.

A ideia central é:

> **JavaScript é muito flexível; TypeScript adiciona regras para tornar o código mais previsível.**

---

# 1. Qual é o problema do JavaScript?

JavaScript permite que uma variável mude de tipo durante a execução.

```javascript
let idade = 30;

idade = "trinta";
```

O JavaScript permite isso porque é uma linguagem de **tipagem dinâmica**.

Isso pode ser útil em algumas situações, mas também pode causar bugs difíceis de encontrar.

---

# 2. Exemplo de um problema

Imagine uma função para calcular o dobro de um número:

```javascript
function calcularDobro(numero) {
    return numero * 2;
}
```

Podemos chamar:

```javascript
calcularDobro(10);
```

Resultado:

```text
20
```

Até aqui tudo certo.

Mas alguém pode fazer:

```javascript
calcularDobro("10");
```

O JavaScript possui conversões automáticas de tipos e pode aceitar determinadas operações mesmo quando o tipo recebido não era o esperado.

Em projetos maiores, esse tipo de comportamento pode gerar bugs difíceis de identificar.

---

# 3. Como o TypeScript resolve isso?

Podemos informar explicitamente que `numero` precisa ser um número:

```typescript
function calcularDobro(numero: number): number {
    return numero * 2;
}
```

Agora:

```typescript
calcularDobro(10);
```

Está correto.

Mas:

```typescript
calcularDobro("10");
```

O TypeScript identifica o problema.

Isso acontece **durante o desenvolvimento**, antes da aplicação ser executada.

---

# 4. O principal problema que o TypeScript resolve

Um dos principais problemas é:

> **Evitar que dados do tipo errado sejam utilizados no código.**

Por exemplo:

```typescript
function somar(a: number, b: number): number {
    return a + b;
}
```

A função espera:

```text
a → number
b → number
```

Portanto:

```typescript
somar(10, 20);
```

Está correto.

Mas:

```typescript
somar("10", "20");
```

O TypeScript acusa um erro.

---

# 5. TypeScript ajuda a definir a estrutura dos dados

Imagine um sistema de clínica.

Podemos criar uma interface:

```typescript
interface Paciente {
    nome: string;
    idade: number;
    telefone: string;
}
```

Essa interface define como um paciente deve ser representado.

Um paciente válido seria:

```typescript
const paciente: Paciente = {
    nome: "João",
    idade: 30,
    telefone: "81999999999"
};
```

Agora imagine:

```typescript
const paciente: Paciente = {
    nome: "João",
    idade: "30",
    telefone: "81999999999"
};
```

Temos um problema:

```text
idade → deveria ser number
idade → foi informado como string
```

O TypeScript identifica esse erro.

---

# 6. TypeScript funciona como um contrato

Uma forma interessante de entender o TypeScript é pensar nele como um **contrato**.

Por exemplo:

```typescript
interface Usuario {
    id: number;
    nome: string;
    email: string;
}
```

Estamos dizendo:

> Um `Usuario` precisa possuir `id`, `nome` e `email`, e cada propriedade possui um tipo específico.

Isso cria um padrão para o restante da aplicação.

---

# 7. Facilita o trabalho em equipe

Imagine que outro desenvolvedor encontre esta função:

```typescript
function cadastrarPaciente(paciente: Paciente) {
    // ...
}
```

Ele consegue saber imediatamente que a função espera um objeto do tipo `Paciente`.

Ao consultar a interface:

```typescript
interface Paciente {
    nome: string;
    idade: number;
    telefone: string;
}
```

ele sabe exatamente quais informações precisa enviar.

Sem TypeScript, poderíamos encontrar algo como:

```javascript
function cadastrarPaciente(paciente) {
    // ...
}
```

Nesse caso, não fica claro qual estrutura `paciente` deveria possuir.

---

# 8. Ajuda o VS Code

O TypeScript também melhora bastante a experiência de desenvolvimento.

Por exemplo:

```typescript
interface Paciente {
    id: number;
    nome: string;
    idade: number;
    telefone: string;
}

const paciente: Paciente = {
    id: 1,
    nome: "Maria",
    idade: 25,
    telefone: "81999999999"
};
```

Quando digitamos:

```typescript
paciente.
```

O VS Code consegue sugerir:

```text
id
nome
idade
telefone
```

Isso acontece porque o TypeScript conhece a estrutura do objeto.

---

# 9. Isso é muito importante em projetos grandes

Imagine uma aplicação React com vários componentes:

```text
Componente A
      ↓
Componente B
      ↓
Componente C
      ↓
Componente D
```

Cada componente pode receber e enviar dados.

Sem tipagem, pode ficar difícil saber:

* qual informação está sendo enviada;
* qual tipo de dado está sendo esperado;
* quais propriedades existem;
* quais propriedades são obrigatórias;
* quais funções podem receber determinado valor.

Com TypeScript, podemos definir isso explicitamente.

Por exemplo:

```typescript
interface Usuario {
    id: number;
    nome: string;
    email: string;
}
```

Agora qualquer parte da aplicação que utilize `Usuario` conhece essa estrutura.

---

# 10. TypeScript não substitui testes

Isso é muito importante para quem trabalha com **QA**.

TypeScript e testes possuem objetivos diferentes.

### TypeScript

Ajuda a encontrar problemas relacionados principalmente a:

```text
Tipos
Estruturas
Contratos
Uso incorreto de funções
Propriedades inexistentes
```

### Testes

Verificam o comportamento da aplicação:

```text
Funcionalidade
Regras de negócio
Integrações
Interface
Fluxos
Validações
Regressões
```

Por exemplo:

```typescript
function calcularIdade(anoNascimento: number): number {
    return 2026 - anoNascimento;
}
```

O TypeScript pode garantir que:

```typescript
calcularIdade("1995");
```

está utilizando o tipo errado.

Mas ele não garante que a fórmula utilizada pela aplicação está correta.

Um teste poderia verificar:

```text
Dado que o ano de nascimento é 1995
Quando calcular a idade
Então o resultado deve ser 31
```

Ou seja:

> **TypeScript ajuda a prevenir determinados erros. Testes ajudam a verificar se o sistema realmente funciona como esperado.**

---

# 11. TypeScript não substitui JavaScript

O TypeScript é baseado em JavaScript.

Normalmente temos:

```text
Código TypeScript
       ↓
   Compilação
       ↓
Código JavaScript
       ↓
   Navegador
```

Por exemplo:

```typescript
const idade: number = 30;
```

Depois da compilação, podemos ter:

```javascript
const idade = 30;
```

O navegador executa o JavaScript, não o TypeScript diretamente.

---

# 12. Por que não usar somente JavaScript?

JavaScript continua sendo excelente e não existe uma regra dizendo que todo projeto precisa utilizar TypeScript.

Porém, conforme um projeto cresce, problemas como estes podem aparecer:

```text
Projeto pequeno
     ↓
Poucos arquivos
     ↓
Poucos desenvolvedores
     ↓
Poucos dados
     ↓
JavaScript pode ser suficiente
```

Em um projeto maior:

```text
Projeto grande
     ↓
Muitos arquivos
     ↓
Muitos desenvolvedores
     ↓
Muitos componentes
     ↓
Muitos dados
     ↓
Maior possibilidade de erros
     ↓
TypeScript ajuda a controlar os tipos
```

---

# 13. Principais problemas que o TypeScript ajuda a resolver

| Problema                             | Como o TypeScript ajuda                        |
| ------------------------------------ | ---------------------------------------------- |
| Tipos incorretos                     | Verifica os tipos                              |
| Erros durante o desenvolvimento      | O compilador identifica diversos problemas     |
| Objetos inconsistentes               | `interface` e `type` definem estruturas        |
| Funções recebendo dados errados      | Tipagem dos parâmetros                         |
| Funções retornando dados inesperados | Tipagem do retorno                             |
| Código difícil de entender           | Os tipos funcionam como documentação           |
| Trabalho em equipe                   | Define contratos entre partes do sistema       |
| Refatoração arriscada                | O compilador ajuda a encontrar partes afetadas |
| Pouca ajuda do editor                | Autocomplete e informações de tipos            |

---

# 🎯 Resumindo

O TypeScript foi criado para trazer **tipagem e maior segurança ao desenvolvimento JavaScript**.

A principal diferença pode ser entendida assim:

```text
JavaScript
    ↓
Mais flexível
    ↓
Mais liberdade
    ↓
Maior possibilidade de certos erros passarem despercebidos
```

Enquanto:

```text
TypeScript
    ↓
JavaScript + Tipagem
    ↓
Mais previsibilidade
    ↓
Erros identificados durante o desenvolvimento
    ↓
Código mais fácil de manter
```

## Em uma frase:

> **TypeScript existe para tornar o JavaScript mais seguro, previsível e fácil de manter, principalmente em projetos grandes.**

E para quem está estudando **QA**, uma forma simples de lembrar é:

> **TypeScript ajuda a prevenir erros; testes ajudam a encontrar e validar comportamentos incorretos.**


===

# 🟦 Diferença entre TypeScript e JavaScript

**JavaScript** e **TypeScript** estão diretamente relacionados.

A forma mais simples de entender é:

> **TypeScript é JavaScript com recursos adicionais, principalmente tipagem estática.**

---

# 1. JavaScript

JavaScript é uma linguagem de programação utilizada principalmente para criar comportamentos e funcionalidades em aplicações web.

Exemplo:

```javascript
let nome = "João";
let idade = 30;

console.log(nome);
console.log(idade);
```

O JavaScript permite que uma variável receba diferentes tipos de dados:

```javascript
let valor = 10;

valor = "dez";

valor = true;
```

Isso acontece porque JavaScript possui **tipagem dinâmica**.

---

# 2. TypeScript

TypeScript adiciona tipagem ao JavaScript.

Exemplo:

```typescript
let nome: string = "João";
let idade: number = 30;
let ativo: boolean = true;
```

Agora estamos informando explicitamente o tipo de cada variável.

```text
nome  → string
idade → number
ativo → boolean
```

Se tentarmos:

```typescript
idade = "trinta";
```

O TypeScript identificará um erro porque `idade` foi definida como `number`.

---

# 3. Principal diferença

A principal diferença está na **tipagem**.

### JavaScript

```javascript
let idade = 30;

idade = "trinta";
```

É permitido.

### TypeScript

```typescript
let idade: number = 30;

idade = "trinta";
```

É considerado um erro.

Portanto:

```text
JavaScript
→ Tipagem dinâmica

TypeScript
→ Tipagem estática
```

---

# 4. O que significa tipagem dinâmica?

Significa que o tipo de uma variável é determinado durante a execução do programa e pode mudar.

Exemplo:

```javascript
let valor = 10;
```

Nesse momento:

```text
valor → number
```

Depois:

```javascript
valor = "Olá";
```

Agora:

```text
valor → string
```

Depois:

```javascript
valor = true;
```

Agora:

```text
valor → boolean
```

O JavaScript permite essas mudanças.

---

# 5. O que significa tipagem estática?

No TypeScript, podemos definir o tipo que uma variável deve possuir.

```typescript
let idade: number = 30;
```

Estamos dizendo:

> `idade` deve ser um número.

Então:

```typescript
idade = 35;
```

Está correto.

Mas:

```typescript
idade = "trinta";
```

Está incorreto.

O TypeScript consegue identificar o problema durante o desenvolvimento.

---

# 6. Diferença nas funções

## JavaScript

```javascript
function somar(a, b) {
    return a + b;
}
```

Não sabemos pelos parâmetros qual tipo de dado a função espera.

Podemos passar:

```javascript
somar(10, 20);
```

Ou:

```javascript
somar("10", "20");
```

O JavaScript pode aceitar os dois casos.

---

## TypeScript

Podemos definir os tipos:

```typescript
function somar(a: number, b: number): number {
    return a + b;
}
```

Agora sabemos exatamente o que a função espera.

```typescript
somar(10, 20);
```

Está correto.

Mas:

```typescript
somar("10", "20");
```

O TypeScript identifica o problema.

---

# 7. Diferença nos objetos

## JavaScript

```javascript
const paciente = {
    nome: "João",
    idade: 30
};
```

O objeto possui:

```text
nome
idade
```

Mas o JavaScript não exige que outros objetos tenham exatamente essa mesma estrutura.

---

## TypeScript

Podemos utilizar uma `interface`:

```typescript
interface Paciente {
    nome: string;
    idade: number;
}
```

Agora podemos criar:

```typescript
const paciente: Paciente = {
    nome: "João",
    idade: 30
};
```

O TypeScript verifica se o objeto segue o contrato definido.

---

# 8. TypeScript ajuda o VS Code

Outra diferença importante é a experiência de desenvolvimento.

Imagine:

```typescript
interface Paciente {
    nome: string;
    idade: number;
    telefone: string;
}
```

E:

```typescript
const paciente: Paciente = {
    nome: "Maria",
    idade: 25,
    telefone: "81999999999"
};
```

Quando você digita:

```typescript
paciente.
```

O VS Code consegue sugerir:

```text
id
nome
idade
telefone
```

Isso acontece porque o TypeScript conhece a estrutura do objeto.

---

# 9. TypeScript precisa ser compilado

JavaScript pode ser executado diretamente pelo navegador.

TypeScript normalmente precisa ser **transpilado/compilado para JavaScript** antes de ser executado.

O fluxo normalmente é:

```text
TypeScript
    ↓
Compilador
    ↓
JavaScript
    ↓
Navegador
```

Por exemplo:

```typescript
const idade: number = 30;
```

Pode ser transformado em:

```javascript
const idade = 30;
```

A anotação:

```typescript
: number
```

serve para o TypeScript verificar o código durante o desenvolvimento.

---

# 10. TypeScript não é uma substituição completa do JavaScript

Isso é importante.

TypeScript é construído sobre JavaScript.

Podemos pensar:

```text
TypeScript
=
JavaScript
+
Tipagem
+
Interfaces
+
Generics
+
Recursos adicionais
+
Ferramentas de desenvolvimento
```

Por isso, para aprender TypeScript, é muito importante conhecer JavaScript.

---

# 11. Comparação rápida

| Característica                       | JavaScript         | TypeScript             |
| ------------------------------------ | ------------------ | ---------------------- |
| Tipagem                              | Dinâmica           | Estática               |
| Tipos explícitos                     | Não é obrigatório  | Sim                    |
| Interfaces                           | Não                | Sim                    |
| Detecção de erros de tipo            | Mais limitada      | Mais forte             |
| Executado diretamente pelo navegador | Sim                | Não                    |
| Precisa de compilação/transpilação   | Não                | Normalmente sim        |
| Autocomplete                         | Sim                | Mais avançado          |
| Projetos grandes                     | Pode ser utilizado | Muito útil             |
| Base                                 | Linguagem própria  | Superset de JavaScript |

---

# 12. Exemplo prático

Imagine um sistema de clínica.

## JavaScript

```javascript
function cadastrarPaciente(nome, idade) {
    console.log(`Paciente: ${nome}`);
    console.log(`Idade: ${idade}`);
}

cadastrarPaciente("João", 30);
```

Funciona.

Mas alguém poderia fazer:

```javascript
cadastrarPaciente(30, "João");
```

O JavaScript não impede necessariamente essa chamada.

---

## TypeScript

Podemos escrever:

```typescript
function cadastrarPaciente(
    nome: string,
    idade: number
): void {
    console.log(`Paciente: ${nome}`);
    console.log(`Idade: ${idade}`);
}
```

Agora:

```typescript
cadastrarPaciente("João", 30);
```

Está correto.

Mas:

```typescript
cadastrarPaciente(30, "João");
```

O TypeScript acusa erro.

Isso torna o código mais previsível.

---

# 13. TypeScript e JavaScript podem ser usados juntos?

Sim.

Um projeto pode começar em JavaScript e depois migrar gradualmente para TypeScript.

Por exemplo:

```text
Projeto
│
├── app.js
├── login.js
├── pacientes.ts
└── usuarios.ts
```

É possível migrar partes do projeto aos poucos, dependendo da configuração e da ferramenta utilizada.

---

# 14. Qual devo aprender primeiro?

Se você está começando agora, minha recomendação é:

```text
JavaScript
    ↓
Variáveis
    ↓
Tipos
    ↓
Condicionais
    ↓
Loops
    ↓
Funções
    ↓
Arrays
    ↓
Objetos
    ↓
Métodos de array
    ↓
JavaScript moderno (ES6+)
    ↓
TypeScript
```

Não precisa dominar absolutamente todo o JavaScript antes de começar TypeScript.

Mas é importante entender os fundamentos de JavaScript porque o TypeScript continua sendo JavaScript por baixo.

---

# 🎯 Resumo

A diferença principal pode ser resumida assim:

```text
                 JAVASCRIPT
                     │
             Tipagem dinâmica
                     │
              Mais flexibilidade
                     │
           Maior liberdade de código
```

Enquanto:

```text
                 TYPESCRIPT
                     │
             JavaScript + Tipagem
                     │
            Código mais previsível
                     │
       Erros identificados mais cedo
                     │
        Melhor manutenção do projeto
```

## Uma frase para memorizar

> **JavaScript permite mais liberdade; TypeScript adiciona regras para tornar essa liberdade mais segura.**

E pensando no seu estudo de **QA**:

> **JavaScript é a linguagem que executa a aplicação. TypeScript adiciona uma camada de verificação que ajuda a evitar determinados erros antes da aplicação chegar aos testes.**





