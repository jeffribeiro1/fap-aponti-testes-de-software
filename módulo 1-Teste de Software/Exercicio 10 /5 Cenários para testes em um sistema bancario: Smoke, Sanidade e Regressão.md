# Atividade Avaliativa 

## Cenário

Uma nova versão de um sistema bancário foi implantada com:

- Correção no login.
- Ajuste na exibição do saldo na tela inicial.

Propor: 05 cenários para cada um dos tipos testes vistos (Smoke, Sanidade e Regressão) e justificar a escolha de cada

---

# Testes de Smoke, Sanidade e Regressão

## Sistema Bancário

Nesta atividade, vamos considerar que uma nova versão do sistema bancário foi implantada.

As principais alterações realizadas foram:

* Correção da funcionalidade de login;
* Alteração na forma como o saldo é apresentado na tela inicial.

---

# 1. Testes de Smoke

## Objetivo

Verificar rapidamente se as principais funcionalidades do sistema estão disponíveis e funcionando após a implantação da nova versão.

Os testes de smoke são executados antes dos testes mais detalhados.

Caso alguma funcionalidade principal não funcione, os demais testes podem ser interrompidos até que o problema seja corrigido.

---

## ID: SM-01

## Título: Verificar se o sistema abre normalmente

**Tipo:** Teste de Smoke

### Pré-condições

* O sistema deve estar implantado;
* O dispositivo deve possuir conexão com a internet;
* O endereço do sistema deve estar disponível;
* O navegador deve estar funcionando corretamente.

### Passos

1. Abrir o navegador de internet;
2. Clicar na barra de endereço;
3. Digitar o endereço do sistema bancário;
4. Pressionar a tecla **Enter**;
5. Aguardar o carregamento da aplicação;
6. Verificar se a página de login foi apresentada;
7. Verificar se o logotipo do banco está visível;
8. Verificar se os campos de usuário e senha foram carregados;
9. Verificar se o botão **Entrar** está disponível;
10. Observar se alguma mensagem de erro foi apresentada.

### Resultado esperado

* O sistema deve abrir normalmente;
* A página de login deve ser carregada completamente;
* Os campos de usuário e senha devem estar disponíveis;
* O botão **Entrar** deve ser exibido;
* Nenhuma mensagem de erro deve ser apresentada.

### Justificativa

Se o sistema não abrir corretamente, não será possível executar os demais testes.

---

## ID: SM-02

## Título: Fazer login com usuário válido

**Tipo:** Teste de Smoke

### Pré-condições

* O sistema deve estar disponível;
* O usuário deve possuir cadastro ativo;
* O usuário deve possuir login e senha válidos;
* O usuário deve estar na tela de login.

### Passos

1. Acessar a página de login;
2. Localizar o campo de usuário;
3. Clicar no campo de usuário;
4. Informar um usuário válido;
5. Localizar o campo de senha;
6. Clicar no campo de senha;
7. Informar a senha correta;
8. Conferir se os dois campos foram preenchidos;
9. Clicar no botão **Entrar**;
10. Aguardar o processamento do login;
11. Observar a página apresentada após o acesso.

### Resultado esperado

* O login deve ser realizado com sucesso;
* O usuário deve ser direcionado para a área da sua conta;
* A tela inicial deve ser apresentada;
* Nenhuma mensagem de erro deve ser exibida.

### Justificativa

O login foi corrigido nesta versão e precisa funcionar corretamente para que o usuário consiga acessar sua conta.

---

## ID: SM-03

## Título: Verificar se a tela inicial é exibida

**Tipo:** Teste de Smoke

### Pré-condições

* O sistema deve estar disponível;
* O usuário deve possuir uma conta válida;
* O login deve ter sido realizado com sucesso.

### Passos

1. Acessar o sistema bancário;
2. Informar um usuário válido;
3. Informar a senha correta;
4. Clicar no botão **Entrar**;
5. Aguardar o carregamento da tela inicial;
6. Verificar se o nome do usuário está sendo exibido;
7. Verificar se o menu principal está disponível;
8. Verificar se as opções da conta estão visíveis;
9. Verificar se a área de saldo foi carregada;
10. Clicar em uma opção do menu;
11. Verificar se o sistema responde ao clique;
12. Observar se alguma mensagem de erro foi apresentada.

### Resultado esperado

* A tela inicial deve ser carregada corretamente;
* O nome do usuário deve ser apresentado;
* O menu principal deve estar disponível;
* As principais opções da conta devem estar visíveis;
* Nenhum erro deve impedir o uso do sistema.

### Justificativa

Esse teste confirma que o usuário consegue acessar normalmente a área principal do sistema.

---

## ID: SM-04

## Título: Verificar se o saldo é exibido

**Tipo:** Teste de Smoke

### Pré-condições

* O sistema deve estar disponível;
* O usuário deve possuir saldo cadastrado;
* O usuário deve estar autenticado no sistema.

### Passos

1. Acessar o sistema bancário;
2. Informar um usuário válido;
3. Informar a senha correta;
4. Clicar no botão **Entrar**;
5. Aguardar o carregamento da tela inicial;
6. Localizar a área de consulta de saldo;
7. Clicar na opção **Mostrar saldo**, caso exista;
8. Aguardar a apresentação do valor;
9. Verificar se o símbolo de real está sendo exibido;
10. Verificar se o valor possui duas casas decimais;
11. Verificar se o saldo está visível e legível;
12. Observar se alguma mensagem de erro foi apresentada.

### Resultado esperado

* O saldo deve ser exibido corretamente;
* O valor deve estar visível e legível;
* O saldo deve ser apresentado em formato monetário;
* Um exemplo de formato correto é **R$ 1.500,00**;
* Nenhum erro deve ocorrer durante a consulta.

### Justificativa

Como houve alteração na exibição do saldo, é importante verificar se essa funcionalidade principal continua disponível.

---

## ID: SM-05

## Título: Fazer logout do sistema

**Tipo:** Teste de Smoke

### Pré-condições

* O sistema deve estar disponível;
* O usuário deve estar autenticado;
* A opção de sair deve estar disponível.

### Passos

1. Realizar login com dados válidos;
2. Aguardar a apresentação da tela inicial;
3. Localizar o menu do usuário;
4. Clicar no menu do usuário;
5. Localizar a opção **Sair** ou **Logout**;
6. Clicar na opção **Sair**;
7. Aguardar o encerramento da sessão;
8. Verificar a página apresentada;
9. Confirmar que o sistema retornou para a tela de login;
10. Clicar no botão de voltar do navegador;
11. Verificar se a conta continua protegida.

### Resultado esperado

* O usuário deve ser desconectado;
* O sistema deve retornar para a tela de login;
* As informações da conta não devem continuar visíveis;
* O usuário não deve conseguir retornar à conta usando o botão de voltar;
* Um novo login deve ser necessário.

### Justificativa

Esse teste garante que o usuário consegue encerrar sua sessão e proteger as informações da conta.

---

# 2. Testes de Sanidade

## Objetivo

Validar de forma específica as funcionalidades que foram corrigidas ou alteradas na nova versão.

Neste exemplo, os testes de sanidade estão focados nas alterações realizadas no:

* Login;
* Saldo da conta;
* Tela inicial.

---

## ID: SA-01

## Título: Login com dados corretos

**Tipo:** Teste de Sanidade

### Pré-condições

* O sistema deve estar disponível;
* O usuário deve possuir cadastro ativo;
* O usuário deve possuir login e senha válidos;
* O usuário deve estar na página de login.

### Passos

1. Abrir o sistema bancário;
2. Aguardar a apresentação da tela de login;
3. Clicar no campo de usuário;
4. Informar um usuário válido;
5. Clicar no campo de senha;
6. Informar a senha correta;
7. Conferir os dados preenchidos;
8. Clicar no botão **Entrar**;
9. Aguardar a validação dos dados;
10. Verificar a página apresentada;
11. Verificar se o nome do usuário está correto;
12. Verificar se alguma mensagem de erro foi apresentada.

### Resultado esperado

* O acesso deve ser realizado com sucesso;
* O usuário deve ser direcionado para a página inicial;
* O nome do usuário deve ser apresentado corretamente;
* Nenhuma mensagem de erro deve ser exibida.

### Justificativa

Verifica se a correção realizada na funcionalidade de login foi aplicada com sucesso.

---

## ID: SA-02

## Título: Login com senha incorreta

**Tipo:** Teste de Sanidade

### Pré-condições

* O sistema deve estar disponível;
* O usuário deve possuir cadastro válido;
* O usuário deve estar na página de login;
* O usuário válido utilizado no teste deve ser conhecido.

### Passos

1. Acessar a página de login;
2. Localizar o campo de usuário;
3. Informar um usuário válido;
4. Localizar o campo de senha;
5. Informar uma senha diferente da senha cadastrada;
6. Conferir se os campos foram preenchidos;
7. Clicar no botão **Entrar**;
8. Aguardar a validação do sistema;
9. Observar a mensagem apresentada;
10. Verificar se a tela da conta foi aberta;
11. Verificar se alguma informação bancária foi exibida;
12. Verificar se o usuário permaneceu na tela de login.

### Resultado esperado

* O sistema deve impedir o acesso;
* Uma mensagem deve informar que os dados estão incorretos;
* O usuário deve permanecer na tela de login;
* Nenhuma informação bancária deve ser apresentada;
* A conta não deve ser acessada.

### Justificativa

Confirma que a correção do login não permitiu que usuários com dados inválidos acessem o sistema.

---

## ID: SA-03

## Título: Verificar o saldo exibido

**Tipo:** Teste de Sanidade

### Pré-condições

* O sistema deve estar disponível;
* O usuário deve possuir uma conta ativa;
* O saldo esperado da conta deve ser conhecido;
* O usuário deve estar autenticado.

### Dados utilizados

* Usuário de teste: `cliente01`;
* Saldo esperado: `R$ 1.500,00`.

### Passos

1. Realizar login com dados válidos;
2. Aguardar o carregamento da tela inicial;
3. Localizar a área de saldo;
4. Clicar na opção **Mostrar saldo**, caso exista;
5. Aguardar a apresentação do valor;
6. Anotar o saldo apresentado pelo sistema;
7. Consultar o saldo esperado para a conta de teste;
8. Comparar o saldo exibido com o saldo esperado;
9. Verificar se o valor está no formato monetário correto;
10. Verificar se o saldo pertence ao usuário autenticado;
11. Observar se alguma mensagem de erro foi apresentada.

### Resultado esperado

* O saldo apresentado deve ser igual ao saldo cadastrado na conta;
* O sistema deve apresentar **R$ 1.500,00**;
* O valor deve estar em formato monetário;
* O saldo deve pertencer ao usuário autenticado;
* Nenhuma informação de outro cliente deve ser exibida.

### Justificativa

Garante que a alteração realizada na apresentação do saldo exibe a informação correta.

---

## ID: SA-04

## Título: Atualizar a tela inicial e verificar o saldo

**Tipo:** Teste de Sanidade

### Pré-condições

* O sistema deve estar disponível;
* O usuário deve estar autenticado;
* O saldo deve estar sendo apresentado na tela inicial.

### Passos

1. Realizar login com dados válidos;
2. Aguardar a exibição da tela inicial;
3. Localizar a área de saldo;
4. Clicar na opção **Mostrar saldo**, caso exista;
5. Anotar o saldo apresentado;
6. Pressionar a tecla **F5**;
7. Aguardar o novo carregamento da página;
8. Verificar se o usuário continua autenticado;
9. Localizar novamente a área de saldo;
10. Verificar se o saldo continua visível;
11. Comparar o valor apresentado com o valor anotado anteriormente;
12. Observar se algum erro ocorreu durante o carregamento.

### Resultado esperado

* A página deve ser atualizada corretamente;
* O usuário deve continuar autenticado, conforme a regra do sistema;
* O saldo deve continuar sendo apresentado;
* O valor não deve ser alterado apenas por causa da atualização;
* Nenhuma mensagem de erro deve ser exibida.

### Justificativa

Confirma que o saldo permanece disponível e correto depois que a página é atualizada.

---

## ID: SA-05

## Título: Verificar o saldo de outro usuário

**Tipo:** Teste de Sanidade

### Pré-condições

* O sistema deve possuir pelo menos dois usuários cadastrados;
* Os usuários devem possuir saldos diferentes;
* Os dados de acesso dos usuários devem estar disponíveis;
* O sistema deve estar funcionando normalmente.

### Dados utilizados

**Primeiro usuário:**

* Usuário: `cliente01`;
* Saldo esperado: `R$ 1.500,00`.

**Segundo usuário:**

* Usuário: `cliente02`;
* Saldo esperado: `R$ 800,00`.

### Passos

1. Acessar a página de login;
2. Informar os dados do primeiro usuário;
3. Clicar no botão **Entrar**;
4. Acessar a área de saldo;
5. Anotar o nome e o saldo apresentados;
6. Clicar na opção **Sair**;
7. Confirmar que a sessão foi encerrada;
8. Informar os dados do segundo usuário;
9. Clicar no botão **Entrar**;
10. Acessar a área de saldo;
11. Anotar o nome e o saldo apresentados;
12. Comparar as informações dos dois usuários;
13. Verificar se os dados do primeiro usuário continuam visíveis;
14. Verificar se o saldo apresentado pertence ao segundo usuário.

### Resultado esperado

* O primeiro usuário deve visualizar apenas o próprio saldo;
* O segundo usuário deve visualizar apenas o próprio saldo;
* O sistema deve apresentar **R$ 800,00** para o segundo usuário;
* Os dados do primeiro usuário não devem aparecer na conta do segundo;
* Cada cliente deve visualizar apenas suas próprias informações.

### Justificativa

Garante a separação das informações bancárias e evita que um cliente visualize o saldo de outra pessoa.

---

# 3. Testes de Regressão

## Objetivo

Garantir que as alterações realizadas no login e na apresentação do saldo não afetaram outras funcionalidades que já existiam e funcionavam anteriormente.

---

## ID: RG-01

## Título: Realizar uma transferência

**Tipo:** Teste de Regressão

### Pré-condições

* O sistema deve estar disponível;
* O usuário deve estar autenticado;
* A conta deve possuir saldo suficiente;
* Os dados da conta de destino devem ser válidos;
* A funcionalidade de transferência deve estar disponível.

### Passos

1. Realizar login com dados válidos;
2. Aguardar o carregamento da tela inicial;
3. Acessar o menu **Transferências**;
4. Selecionar o tipo de transferência;
5. Informar o banco de destino;
6. Informar a agência de destino;
7. Informar o número da conta de destino;
8. Informar o nome do destinatário, caso solicitado;
9. Informar o CPF do destinatário, caso solicitado;
10. Digitar um valor menor ou igual ao saldo disponível;
11. Clicar no botão **Continuar**;
12. Conferir os dados da transferência;
13. Confirmar o nome do destinatário;
14. Confirmar o valor da transferência;
15. Informar a senha ou o código de confirmação;
16. Clicar em **Confirmar transferência**;
17. Aguardar o processamento da operação;
18. Verificar a mensagem apresentada;
19. Verificar se o comprovante foi gerado;
20. Consultar o saldo atualizado.

### Resultado esperado

* A transferência deve ser realizada com sucesso;
* Uma mensagem de confirmação deve ser apresentada;
* O comprovante deve conter os dados da operação;
* O valor transferido deve ser descontado do saldo;
* O novo saldo deve ser apresentado corretamente.

### Justificativa

Verifica se a funcionalidade de transferência continua funcionando após as alterações realizadas no sistema.

---

## ID: RG-02

## Título: Consultar o extrato da conta

**Tipo:** Teste de Regressão

### Pré-condições

* O sistema deve estar disponível;
* O usuário deve estar autenticado;
* A conta deve possuir movimentações registradas;
* A opção de extrato deve estar disponível.

### Passos

1. Realizar login com dados válidos;
2. Aguardar a tela inicial;
3. Localizar o menu principal;
4. Clicar na opção **Extrato**;
5. Aguardar o carregamento das movimentações;
6. Selecionar um período para consulta;
7. Informar a data inicial;
8. Informar a data final;
9. Clicar no botão **Consultar**;
10. Verificar as datas das movimentações;
11. Verificar as descrições das operações;
12. Verificar os valores de entrada;
13. Verificar os valores de saída;
14. Verificar se as movimentações pertencem ao usuário;
15. Comparar uma movimentação com o saldo da conta;
16. Observar se alguma mensagem de erro foi apresentada.

### Resultado esperado

* O extrato deve ser exibido corretamente;
* As movimentações devem pertencer ao usuário autenticado;
* As datas devem estar corretas;
* As descrições das operações devem ser apresentadas;
* Os valores de entrada e saída devem estar corretos;
* Nenhuma informação de outro usuário deve ser exibida.

### Justificativa

Confirma que a consulta ao extrato não foi afetada pelas alterações realizadas no login e no saldo.

---

## ID: RG-03

## Título: Efetuar o pagamento de um boleto

**Tipo:** Teste de Regressão

### Pré-condições

* O sistema deve estar disponível;
* O usuário deve estar autenticado;
* A conta deve possuir saldo suficiente;
* O boleto deve estar válido;
* O boleto deve estar dentro da data de vencimento.

### Passos

1. Realizar login com dados válidos;
2. Aguardar o carregamento da tela inicial;
3. Acessar o menu **Pagamentos**;
4. Selecionar a opção **Pagar boleto**;
5. Informar o código de barras do boleto;
6. Conferir se todos os números foram digitados;
7. Clicar no botão **Continuar**;
8. Aguardar a identificação do boleto;
9. Conferir o nome do beneficiário;
10. Conferir o valor do boleto;
11. Conferir a data de vencimento;
12. Selecionar a data do pagamento;
13. Clicar no botão **Continuar**;
14. Revisar os dados do pagamento;
15. Informar a senha ou o código de confirmação;
16. Clicar em **Confirmar pagamento**;
17. Aguardar o processamento;
18. Verificar a mensagem de confirmação;
19. Verificar se o comprovante foi gerado;
20. Consultar o saldo atualizado.

### Resultado esperado

* O pagamento deve ser processado com sucesso;
* Uma mensagem de confirmação deve ser apresentada;
* O comprovante deve ser gerado;
* O valor pago deve ser descontado do saldo;
* O novo saldo deve ser apresentado corretamente.

### Justificativa

Garante que a funcionalidade de pagamento continua funcionando normalmente após a atualização.

---

## ID: RG-04

## Título: Alterar a senha da conta

**Tipo:** Teste de Regressão

### Pré-condições

* O sistema deve estar disponível;
* O usuário deve estar autenticado;
* O usuário deve conhecer a senha atual;
* A nova senha deve atender às regras do sistema.

### Passos

1. Realizar login com a senha atual;
2. Aguardar a exibição da tela inicial;
3. Acessar o menu **Configurações**;
4. Selecionar a opção **Segurança**;
5. Clicar em **Alterar senha**;
6. Informar a senha atual;
7. Informar uma nova senha válida;
8. Digitar novamente a nova senha;
9. Conferir se as duas novas senhas são iguais;
10. Clicar no botão **Salvar** ou **Confirmar**;
11. Aguardar a resposta do sistema;
12. Verificar a mensagem de confirmação;
13. Fazer logout da conta;
14. Tentar entrar utilizando a senha antiga;
15. Verificar se o acesso é recusado;
16. Voltar para a página de login;
17. Informar o usuário válido;
18. Informar a nova senha;
19. Clicar no botão **Entrar**;
20. Verificar se o acesso é permitido.

### Resultado esperado

* A senha deve ser alterada com sucesso;
* Uma mensagem de confirmação deve ser apresentada;
* A senha antiga não deve permitir o acesso;
* A nova senha deve permitir o login;
* A conta deve continuar funcionando normalmente.

### Justificativa

Como houve alteração na funcionalidade de login, é importante verificar se a alteração de senha continua funcionando corretamente.

---

## ID: RG-05

## Título: Fazer logout e realizar um novo login

**Tipo:** Teste de Regressão

### Pré-condições

* O sistema deve estar disponível;
* O usuário deve possuir cadastro válido;
* O usuário deve estar autenticado;
* A opção de logout deve estar disponível.

### Passos

1. Acessar o sistema com dados válidos;
2. Aguardar o carregamento da tela inicial;
3. Verificar se o nome do usuário está correto;
4. Verificar se o saldo está sendo apresentado;
5. Localizar a opção **Sair**;
6. Clicar na opção **Sair**;
7. Aguardar o encerramento da sessão;
8. Verificar se a tela de login foi apresentada;
9. Clicar no botão de voltar do navegador;
10. Confirmar que o acesso à conta não foi permitido;
11. Retornar para a tela de login;
12. Informar novamente o usuário válido;
13. Informar a senha correta;
14. Clicar no botão **Entrar**;
15. Aguardar o processamento do login;
16. Verificar se a conta foi aberta novamente;
17. Verificar se o nome do usuário está correto;
18. Verificar se o saldo está sendo apresentado;
19. Confirmar que nenhuma mensagem de erro foi exibida.

### Resultado esperado

* O logout deve encerrar a sessão corretamente;
* O usuário não deve acessar a conta pelo botão de voltar;
* Um novo login deve ser realizado com sucesso;
* A tela inicial deve ser apresentada normalmente;
* O saldo e as informações do usuário devem ser carregados corretamente.

### Justificativa

Confirma que o sistema continua funcionando corretamente durante o encerramento e o início de uma nova sessão.

---

# Resumo dos Tipos de Teste

## Teste de Smoke

O teste de smoke verifica rapidamente se as principais funcionalidades do sistema estão funcionando.

Normalmente, ele é executado depois que uma nova versão do sistema é implantada.

### Exemplos

* Abrir o sistema;
* Realizar login;
* Acessar a tela inicial;
* Visualizar o saldo;
* Fazer logout.

### Pergunta principal

> **As principais funcionalidades do sistema estão funcionando?**

---

## Teste de Sanidade

O teste de sanidade verifica de forma específica as funcionalidades que foram alteradas ou corrigidas.

Neste exercício, foram alteradas as funcionalidades de login e apresentação do saldo.

### Exemplos

* Login com dados corretos;
* Login com senha incorreta;
* Verificação do novo saldo;
* Atualização da tela;
* Consulta de saldo de usuários diferentes.

### Pergunta principal

> **A alteração realizada está funcionando corretamente?**

---

## Teste de Regressão

O teste de regressão verifica se uma nova alteração causou problemas em funcionalidades que já funcionavam antes.

### Exemplos

* Realizar transferência;
* Consultar extrato;
* Pagar boleto;
* Alterar senha;
* Fazer logout e entrar novamente.

### Pergunta principal

> **A alteração realizada afetou alguma funcionalidade que já funcionava antes?**

---

# Diferença entre Smoke, Sanidade e Regressão

## Smoke

Verifica rapidamente as principais funcionalidades do sistema.

## Sanidade

Verifica especificamente uma funcionalidade que foi alterada ou corrigida.

## Regressão

Verifica se as alterações afetaram outras funcionalidades que já funcionavam anteriormente.

