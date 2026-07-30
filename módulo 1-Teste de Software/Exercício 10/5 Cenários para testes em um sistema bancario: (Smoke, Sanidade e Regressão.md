# Atividade Avaliativa 

## Cenário

Uma nova versão de um sistema bancário foi implantada com:

- Correção no login.
- Ajuste na exibição do saldo na tela inicial.

Propor: 05 cenários para cada um dos tipos testes vistos (Smoke, Sanidade e Regressão) e justificar a escolha de cada

---

# Testes de Smoke

**Objetivo:** Verificar rapidamente se as principais funcionalidades do sistema estão funcionando após a implantação.

| Cenário | Teste | Justificativa |
|---------|-------|---------------|
| 1 | Verificar se o sistema abre normalmente. | Se o sistema não abrir, não será possível realizar os demais testes. |
| 2 | Fazer login com um usuário e senha válidos. | O login foi corrigido nesta versão e precisa funcionar corretamente. |
| 3 | Verificar se a tela inicial é exibida após o login. | Confirma que o usuário consegue acessar o sistema normalmente. |
| 4 | Verificar se o saldo aparece na tela inicial. | Como houve alteração na exibição do saldo, é importante validar essa funcionalidade. |
| 5 | Fazer logout do sistema. | Garante que o usuário consegue encerrar a sessão corretamente. |

---

# Testes de Sanidade

**Objetivo:** Validar apenas as funcionalidades que foram alteradas nesta versão.

| Cenário | Teste | Justificativa |
|---------|-------|---------------|
| 1 | Fazer login com usuário e senha corretos. | Verifica se a correção do login foi aplicada com sucesso. |
| 2 | Tentar fazer login com senha incorreta. | Confirma que o sistema continua bloqueando acessos inválidos. |
| 3 | Verificar se o saldo exibido é o saldo correto da conta. | Garante que a alteração na tela inicial apresenta a informação correta. |
| 4 | Atualizar a tela inicial e verificar se o saldo continua sendo exibido. | Confirma que o saldo permanece visível após atualizar a página. |
| 5 | Entrar com outro usuário e verificar se aparece o saldo da conta correta. | Garante que cada cliente visualiza apenas as informações da sua própria conta. |

---

# Testes de Regressão

**Objetivo:** Garantir que as alterações não afetaram funcionalidades que já funcionavam antes.

| Cenário | Teste | Justificativa |
|---------|-------|---------------|
| 1 | Realizar uma transferência entre contas via pix. | Verifica se essa funcionalidade continua funcionando após a atualização. |
| 2 | Consultar o extrato da conta. | Confirma que a consulta ao extrato não foi afetada pelas alterações. |
| 3 | Efetuar o pagamento de um boleto pelo código de barras. | Garante que o pagamento continua funcionando normalmente. |
| 4 | Alterar a senha da conta. | Como houve mudança no login, é importante verificar se a alteração de senha continua funcionando. |
| 5 | Fazer logout e realizar um novo login. | Confirma que o sistema continua funcionando corretamente durante um novo acesso. |


