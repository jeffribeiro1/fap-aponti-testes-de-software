# Casos de Teste — Tela de Login

  
  

## CT-01 — Login com usuário e senha válidos

  

**Tipo:** Positivo 

  

**Objetivo:** Verificar se o usuário consegue acessar o sistema utilizando credenciais válidas.

  

### Pré-condição

  

* O usuário deve estar cadastrado no sistema.

* A conta deve estar ativa.

  

### Dados de teste

  

* E-mail: `usuario@teste.com`

* Senha: `Teste@123`

  

### Passos

  

1. Acessar a tela de login.

2. Digitar `usuario@teste.com` no campo de e-mail.

3. Digitar `Teste@123` no campo de senha.

4. Clicar no botão **Entrar**.

  

### Resultado esperado

  

* O sistema deve aceitar as credenciais.

* O usuário deve ser autenticado.

* O usuário deve ser direcionado para a página inicial do sistema.

  

---

  

## CT-02 — Login com senha incorreta

  

**Tipo:** Negativo

  

**Objetivo:** Verificar se o sistema impede o acesso quando a senha informada está incorreta.

  

### Pré-condição

  

* O usuário deve estar cadastrado no sistema.

  

### Dados de teste

  

* E-mail: `usuario@teste.com`

* Senha: `SenhaErrada123`

  

### Passos

  

1. Acessar a tela de login.

2. Digitar `usuario@teste.com` no campo de e-mail.

3. Digitar `SenhaErrada123` no campo de senha.

4. Clicar no botão **Entrar**.

  

### Resultado esperado

  

* O sistema não deve realizar o login.

* O usuário deve permanecer na tela de login.

* Deve ser exibida uma mensagem informando que as credenciais são inválidas.

  

---

  

## CT-03 — Campo de e-mail vazio

  

**Tipo:** Validação

  

**Objetivo:** Verificar se o campo de e-mail é obrigatório.

  

### Passos

  

1. Acessar a tela de login.

2. Deixar o campo de e-mail vazio.

3. Digitar `Teste@123` no campo de senha.

4. Clicar no botão **Entrar**.

  

### Resultado esperado

  

* O login não deve ser realizado.

* Deve ser exibida uma mensagem informando que o campo de e-mail é obrigatório.

* O usuário deve permanecer na tela de login.

  

---

  

## CT-04 — Campo de senha vazio

  

**Tipo:** Validação

  

**Objetivo:** Verificar se o preenchimento do campo de senha é obrigatório.

  

### Passos

  

1. Acessar a tela de login.

2. Digitar `usuario@teste.com` no campo de e-mail.

3. Deixar o campo de senha vazio.

4. Clicar no botão **Entrar**.

  

### Resultado esperado

  

* O login não deve ser realizado.

* Deve ser exibida uma mensagem informando que o campo de senha é obrigatório.

* O usuário deve permanecer na tela de login.

  

---

  

## CT-05 — E-mail em formato inválido

  

**Tipo:** Negativo / Validação

  

**Objetivo:** Verificar se o sistema identifica um e-mail digitado em formato inválido.

  

### Dados de teste

  

* E-mail: `usuarioteste.com`

* Senha: `Teste@123`

  

### Passos

  

1. Acessar a tela de login.

2. Digitar `usuarioteste.com` no campo de e-mail.

3. Digitar `Teste@123` no campo de senha.

4. Clicar no botão **Entrar**.

  

### Resultado esperado

  

* O login não deve ser realizado.

* Deve ser exibida uma mensagem informando que o formato do e-mail é inválido.

* O usuário deve permanecer na tela de login.

  

---

  
  

## CT-06 — E-mail com espaços antes e depois

  

**Tipo:** Alternativo

  

**Objetivo:** Verificar como o sistema trata espaços digitados antes ou depois do e-mail.

  

### Pré-condição

  

* O usuário deve estar cadastrado e ativo.

  

### Dados de teste

  

* E-mail: `usuario@teste.com`

* Senha: `Teste@123`

  

### Passos

  

1. Acessar a tela de login.

2. Digitar um espaço antes do e-mail.

3. Digitar `usuario@teste.com`.

4. Adicionar um espaço depois do e-mail.

5. Digitar a senha correta.

6. Clicar no botão **Entrar**.

  

### Resultado esperado

  

* O sistema deve ignorar os espaços antes e depois do e-mail.

* O e-mail deve ser tratado como `usuario@teste.com`.

* O usuário deve conseguir realizar o login com a senha correta.

  

---

  

## CT-07 — Vários cliques rápidos no botão Entrar

  

**Tipo:** Alternativo / Usabilidade

  

**Objetivo:** Verificar se vários cliques seguidos no botão **Entrar** causam ações duplicadas.

  

### Pré-condição

  

* O usuário deve estar cadastrado e ativo.

  

### Passos

  

1. Acessar a tela de login.

2. Informar um e-mail válido.

3. Informar uma senha válida.

4. Clicar rapidamente várias vezes no botão **Entrar**.

  

### Resultado esperado

  

* O sistema deve processar apenas uma tentativa de login.

* O usuário deve ser direcionado somente uma vez para a página inicial.

* Não devem aparecer mensagens duplicadas.

* Não devem ser abertas páginas duplicadas.

  

---

  

## CT-08 — Várias tentativas seguidas com senha incorreta

  

**Tipo:** Segurança / Alternativo

  

**Objetivo:** Verificar se o sistema possui proteção contra várias tentativas de login com senha incorreta.

  

### Pré-condição

  

* O usuário deve estar cadastrado.

  

### Dados de teste

  

* E-mail: `usuario@teste.com`

* Senha: `SenhaErrada`

  

### Passos

  

1. Acessar a tela de login.

2. Digitar um e-mail válido.

3. Digitar uma senha incorreta.

4. Clicar no botão **Entrar**.

5. Repetir a tentativa várias vezes utilizando a senha incorreta.

  

### Resultado esperado

  

* O sistema deve recusar todas as tentativas com senha incorreta.

* Ao atingir o limite definido, novas tentativas devem ser temporariamente bloqueadas.

* Deve ser exibida uma mensagem informando que o acesso foi temporariamente bloqueado.

  

---

  

## CT-09 — Acessar página interna sem realizar login

  

**Tipo:** Segurança / Alternativo

  

**Objetivo:** Verificar se uma página protegida pode ser acessada sem autenticação.

  

### Pré-condição

  

* O usuário não deve estar autenticado.

  

### Passos

  

1. Abrir o navegador.

2. Não realizar login.

3. Digitar diretamente o endereço de uma página interna.

  

Exemplo:

  

```text

https://sistema.com/dashboard

```

  

4. Pressionar **Enter**.

  

### Resultado esperado

  

* A página interna não deve ser exibida.

* O usuário deve ser direcionado para a tela de login.

* Nenhuma informação privada deve ficar visível.

  

---

  

## CT-10 — Voltar pelo navegador após realizar logout

  

**Tipo:** Segurança / Alternativo

  

**Objetivo:** Verificar se informações protegidas continuam inacessíveis após o logout.

  

### Pré-condição

  

* O usuário deve estar autenticado.

  

### Passos

  

1. Realizar login com dados válidos.

2. Acessar a página inicial do sistema.

3. Clicar no botão **Sair** ou **Logout**.

4. Aguardar o retorno para a tela de login.

5. Clicar no botão **Voltar** do navegador.

  

### Resultado esperado

  

* O usuário deve continuar desconectado.

* A página protegida não deve exibir dados da sessão anterior.

* Ao tentar acessar novamente uma página interna, o sistema deve direcionar o usuário para a tela de login.
