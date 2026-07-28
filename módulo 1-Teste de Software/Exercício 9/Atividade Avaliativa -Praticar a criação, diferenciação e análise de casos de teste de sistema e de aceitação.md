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

# 2. Fluxo Principal

O **fluxo principal** é o caminho normal que o usuário realiza quando tudo funciona corretamente.

Esse fluxo também pode ser chamado de **caminho feliz**.

## Fluxo

```text
Usuário acessa o sistema
        ↓
Informa usuário e senha
        ↓
Clica em "Entrar"
        ↓
Sistema valida os dados
        ↓
Login realizado com sucesso
        ↓
Usuário acessa sua conta
        ↓
Usuário consulta o saldo
        ↓
Sistema apresenta o saldo atual

---

## 3. Variações de Fluxo

As **variações de fluxo** são situações diferentes do caminho principal.

Como QA, não devemos testar apenas quando tudo funciona corretamente.

Também precisamos verificar situações como:

* Dados incorretos;
* Campos vazios;
* Valores diferentes;
* Erros do sistema.

### Exemplos de Variações

| Variação               | Situação                                     | Comportamento Esperado                                        |
| ---------------------- | -------------------------------------------- | ------------------------------------------------------------- |
| Login correto          | Usuário informa dados válidos                | O acesso deve ser permitido                                   |
| Senha incorreta        | Usuário informa uma senha errada             | O acesso deve ser negado e uma mensagem de erro deve aparecer |
| Usuário incorreto      | Usuário informa um usuário inexistente       | O acesso deve ser negado                                      |
| Usuário vazio          | Usuário não preenche o campo de usuário      | O sistema deve informar que o campo é obrigatório             |
| Senha vazia            | Usuário não preenche a senha                 | O sistema deve informar que o campo é obrigatório             |
| Todos os campos vazios | Usuário tenta entrar sem preencher os campos | O login não deve ser realizado                                |
| Saldo positivo         | A conta possui dinheiro disponível           | O sistema deve apresentar o saldo corretamente                |
| Saldo zero             | A conta não possui saldo disponível          | O sistema deve apresentar saldo igual a zero                  |
| Saldo negativo         | A conta está com saldo negativo              | O sistema deve apresentar corretamente o valor negativo       |
| Falha na consulta      | Ocorre algum problema ao consultar o saldo   | O sistema deve apresentar uma mensagem de erro                |

