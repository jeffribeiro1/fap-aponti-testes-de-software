# Atividade Avaliativa 

## Cenário

Uma nova versão de um sistema bancário foi implantada com:

- Correção no login.
- Ajuste na exibição do saldo na tela inicial.

Propor: 05 cenários para cada um dos tipos testes vistos (Smoke, Sanidade e Regressão) e justificar a escolha de cada

---

# Testes de Smoke

**Objetivo:** Verificar rapidamente se as principais funcionalidades do sistema estão funcionando após a implantação.

## Cenário 1 - Verificar se o sistema abre normalmente

**Passos:**
1. Abrir o sistema bancário.
2. Aguardar o carregamento da aplicação.

**Resultado esperado:**
O sistema deve abrir sem apresentar erros.

**Justificativa:**
Se o sistema não abrir, não será possível realizar os demais testes.

---

## Cenário 2 - Fazer login com usuário válido

**Passos:**
1. Informar um usuário válido.
2. Informar a senha correta.
3. Clicar no botão **Entrar**.

**Resultado esperado:**
O usuário deve conseguir acessar o sistema.

**Justificativa:**
O login foi corrigido nesta versão e precisa funcionar corretamente.

---

## Cenário 3 - Verificar se a tela inicial é exibida

**Passos:**
1. Realizar o login.
2. Observar a tela exibida após o acesso.

**Resultado esperado:**
A tela inicial deve ser carregada corretamente.

**Justificativa:**
Confirma que o usuário consegue acessar o sistema normalmente.

---

## Cenário 4 - Verificar se o saldo é exibido

**Passos:**
1. Realizar o login.
2. Acessar a tela inicial.
3. Localizar a área onde o saldo é apresentado.

**Resultado esperado:**
O saldo deve ser exibido corretamente.

**Justificativa:**
Como houve alteração na exibição do saldo, é importante validar essa funcionalidade.

---

## Cenário 5 - Fazer logout

**Passos:**
1. Estar logado no sistema.
2. Clicar na opção **Sair**.

**Resultado esperado:**
O usuário deve ser desconectado e retornar para a tela de login.

**Justificativa:**
Garante que o usuário consegue encerrar a sessão corretamente.

---

# Testes de Sanidade

**Objetivo:** Validar apenas as funcionalidades que foram alteradas nesta versão.

## Cenário 1 - Login com dados corretos

**Passos:**
1. Informar um usuário válido.
2. Informar a senha correta.
3. Clicar em **Entrar**.

**Resultado esperado:**
O acesso deve ser realizado com sucesso.

**Justificativa:**
Verifica se a correção do login foi aplicada com sucesso.

---

## Cenário 2 - Login com senha incorreta

**Passos:**
1. Informar um usuário válido.
2. Informar uma senha incorreta.
3. Clicar em **Entrar**.

**Resultado esperado:**
O sistema deve exibir uma mensagem de erro e impedir o acesso.

**Justificativa:**
Confirma que o sistema continua bloqueando acessos inválidos.

---

## Cenário 3 - Verificar o saldo exibido

**Passos:**
1. Fazer login.
2. Acessar a tela inicial.
3. Comparar o saldo exibido com o saldo esperado da conta.

**Resultado esperado:**
O saldo exibido deve estar correto.

**Justificativa:**
Garante que a alteração na tela inicial apresenta a informação correta.

---

## Cenário 4 - Atualizar a tela inicial

**Passos:**
1. Fazer login.
2. Atualizar a página (F5 ou botão de atualizar).
3. Verificar novamente o saldo.

**Resultado esperado:**
O saldo deve continuar sendo exibido corretamente.

**Justificativa:**
Confirma que o saldo permanece visível após atualizar a página.

---

## Cenário 5 - Verificar o saldo de outro usuário

**Passos:**
1. Fazer logout.
2. Entrar com outro usuário válido.
3. Verificar o saldo exibido.

**Resultado esperado:**
O sistema deve mostrar apenas o saldo da conta do usuário logado.

**Justificativa:**
Garante que cada cliente visualiza apenas as informações da sua própria conta.

---

# Testes de Regressão

**Objetivo:** Garantir que as alterações não afetaram funcionalidades que já funcionavam antes.

## Cenário 1 - Realizar uma transferência

**Passos:**
1. Fazer login.
2. Acessar o menu **Transferências**.
3. Informar os dados da conta de destino.
4. Informar um valor.
5. Confirmar a transferência.

**Resultado esperado:**
A transferência deve ser realizada com sucesso.

**Justificativa:**
Verifica se essa funcionalidade continua funcionando após a atualização.

---

## Cenário 2 - Consultar o extrato

**Passos:**
1. Fazer login.
2. Acessar o menu **Extrato**.

**Resultado esperado:**
O extrato deve ser exibido corretamente.

**Justificativa:**
Confirma que a consulta ao extrato não foi afetada pelas alterações.

---

## Cenário 3 - Efetuar o pagamento de um boleto

**Passos:**
1. Fazer login.
2. Acessar o menu **Pagamentos**.
3. Informar o código de barras.
4. Confirmar o pagamento.

**Resultado esperado:**
O pagamento deve ser processado com sucesso.

**Justificativa:**
Garante que o pagamento continua funcionando normalmente.

---

## Cenário 4 - Alterar a senha da conta

**Passos:**
1. Fazer login.
2. Acessar **Configurações**.
3. Selecionar **Alterar senha**.
4. Informar a senha atual.
5. Informar uma nova senha.
6. Salvar as alterações.

**Resultado esperado:**
A senha deve ser alterada com sucesso.

**Justificativa:**
Como houve mudança no login, é importante verificar se a alteração de senha continua funcionando.

---

## Cenário 5 - Fazer logout e realizar um novo login

**Passos:**
1. Fazer logout.
2. Acessar novamente a tela de login.
3. Informar usuário e senha válidos.
4. Clicar em **Entrar**.

**Resultado esperado:**
O usuário deve conseguir acessar novamente o sistema.

**Justificativa:**
Confirma que o sistema continua funcionando corretamente durante um novo acesso.

---

# Resumo dos Tipos de Teste

| Tipo de Teste | Objetivo |
|----------------|----------|
| **Smoke** | Verificar rapidamente se as principais funcionalidades do sistema estão funcionando após a nova versão. |
| **Sanidade** | Validar especificamente as funcionalidades que foram alteradas, como o login e a exibição do saldo. |
| **Regressão** | Garantir que as mudanças não afetaram funcionalidades que já funcionavam antes da atualização. |
