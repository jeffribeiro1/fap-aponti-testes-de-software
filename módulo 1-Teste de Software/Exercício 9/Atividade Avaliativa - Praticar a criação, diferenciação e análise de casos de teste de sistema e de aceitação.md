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

# Etapa 2 — Testes de Sistema

Os **testes de sistema** verificam o funcionamento do sistema como um todo, simulando ações que um usuário realizaria normalmente.

Nesta etapa foram criados:

- 2 testes de fluxo principal;
- 2 testes de fluxo alternativo.

---

## ID: CT-01 
## Título: Login realizado com sucesso ( App Itaú)

**Tipo:** Fluxo principal — Caminho feliz

### Pré-condições

- O sistema deve estar disponível.
- O usuário deve possuir cadastro válido.
- O usuário deve estar na tela de login.

### Passos

1. Acessar a tela de login.
2. Informar um usuário válido.
3. Informar uma senha válida.
4. Clicar no botão **Entrar**.

### Resultado esperado

- O login deve ser realizado com sucesso.
- O usuário deve ser direcionado para sua conta bancária.
- As informações da conta devem ser exibidas.

---

## ID: CT-02 
## Título: Visualizar saldo da conta

**Tipo:** Fluxo principal — Caminho feliz

### Pré-condições

- O sistema deve estar disponível.
- O usuário deve possuir uma conta válida.
- O usuário deve estar autenticado no sistema.

### Passos

1. Realizar o login com dados válidos.
2. Acessar a conta bancária.
3. Localizar a opção de consulta de saldo.
4. Clicar na opção de **Saldo**.

### Resultado esperado

- O sistema deve apresentar o saldo atual da conta.
- O valor exibido deve pertencer à conta do usuário autenticado.
- A consulta deve ser realizada sem apresentar erros.

---

# Testes de Fluxo Alternativo

## ID: CT-03
## Título: Login com senha incorreta

**Tipo:** Fluxo alternativo

### Pré-condições

- O sistema deve estar disponível.
- O usuário deve possuir cadastro válido.
- O usuário deve estar na tela de login.

### Passos

1. Acessar a tela de login.
2. Informar um usuário válido.
3. Informar uma senha incorreta.
4. Clicar no botão **Entrar**.

### Resultado esperado

- O login não deve ser realizado.
- O usuário não deve ter acesso à conta.
- O sistema deve apresentar uma mensagem informando que os dados de acesso estão incorretos.
- O usuário deve permanecer na tela de login.

---

## CT-04 — Login com campo de senha vazio

**Tipo:** Fluxo alternativo

### Pré-condições

- O sistema deve estar disponível.
- O usuário deve estar na tela de login.

### Passos

1. Acessar a tela de login.
2. Informar um usuário válido.
3. Deixar o campo de senha vazio.
4. Clicar no botão **Entrar**.

### Resultado esperado

- O login não deve ser realizado.
- O sistema deve informar que o campo de senha é obrigatório.
- O usuário deve permanecer na tela de login.





