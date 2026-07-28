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
