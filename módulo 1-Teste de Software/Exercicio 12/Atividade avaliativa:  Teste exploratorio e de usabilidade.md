# Atividade Avaliativa: Análise Exploratória e Problemas de Usabilidade

## 1. Cinco pontos que eu exploraria livremente no sistema

No teste exploratório, utilizaria o sistema de forma mais livre, tentando encontrar comportamentos inesperados, falhas e dificuldades de uso:

### 1. Login no sistema

Eu testaria diferentes situações na tela de login, como:

* Usuário e senha corretos;
* Senha incorreta;
* Campos vazios;
* Muitas tentativas de acesso;
* Uso de letras maiúsculas e minúsculas;
* Caracteres especiais nos campos.

O objetivo seria verificar se o login funciona corretamente e se o sistema apresenta mensagens claras quando ocorre algum erro.

### 2. Consulta de saldo e extrato

Eu verificaria se:

* O saldo é exibido corretamente;
* O extrato apresenta todas as movimentações;
* As datas e os valores estão corretos;
* Entradas e saídas são identificadas;
* O saldo é atualizado após uma movimentação.

O objetivo seria garantir que as informações financeiras apresentadas ao cliente são confiáveis.

### 3. Transferência via Pix

Eu exploraria situações como:

* Pix com valor válido;
* Pix com valor zero;
* Pix com valor negativo;
* Pix com saldo insuficiente;
* Chave Pix inválida;
* Tentativa de enviar o mesmo Pix duas vezes;
* Cancelamento antes da confirmação.

O objetivo seria verificar se o sistema impede operações inválidas e evita transferências duplicadas.

### 4. Pagamento de contas

Eu testaria:

* Código de barras válido;
* Código de barras inválido;
* Conta vencida;
* Conta já paga;
* Pagamento com saldo insuficiente;
* Cancelamento da operação;
* Geração do comprovante.

O objetivo seria confirmar que o pagamento é processado corretamente e que o cliente recebe uma confirmação clara.

### 5. Encerramento da sessão

Eu verificaria:

* Se o botão de sair funciona;
* Se o sistema encerra a sessão após um período sem uso;
* Se é possível voltar para a conta usando o botão de voltar do navegador;
* Se outra pessoa consegue acessar os dados após o logout;
* Se o usuário recebe um aviso antes da sessão expirar.

O objetivo seria proteger as informações bancárias do cliente.

---

## 2. Cinco possíveis problemas de usabilidade

### 1. Botões com nomes pouco claros

O sistema pode apresentar botões com nomes genéricos, como:

* “Continuar”;
* “Avançar”;
* “Confirmar”.

O usuário pode não entender exatamente qual ação será realizada.

#### Impacto para o usuário

Em uma operação bancária, o cliente precisa saber se está confirmando um Pix, um pagamento ou apenas avançando para outra tela.

Um botão pouco claro pode fazer o usuário confirmar uma operação por engano.

---

### 2. Mensagens de erro difíceis de entender

O sistema pode apresentar mensagens como:

* “Erro 500”;
* “Falha na requisição”;
* “Operação inválida”;
* “Erro inesperado”.

Essas mensagens não explicam o que aconteceu nem o que o usuário deve fazer.

#### Impacto para o usuário

O cliente pode ficar confuso, inseguro e não saber se a operação foi concluída.

Em uma transferência, por exemplo, o usuário pode tentar novamente e acabar realizando um pagamento duplicado.

---

### 3. Informações importantes com letras pequenas

O aplicativo pode apresentar saldo, taxas, datas, valores ou informações de segurança com letras muito pequenas.

#### Impacto para o usuário

Pessoas com dificuldade de visão podem não conseguir ler corretamente.

Isso pode fazer o cliente informar um valor errado, não perceber uma cobrança ou não entender uma orientação importante.

---

### 4. Falta de confirmação antes de uma operação

O sistema pode realizar um Pix ou pagamento imediatamente após o usuário clicar em um botão, sem apresentar uma tela de confirmação.

#### Impacto para o usuário

O cliente pode transferir dinheiro para a pessoa errada ou informar um valor incorreto.

Uma tela de confirmação permite revisar:

* Nome do destinatário;
* Banco;
* Chave Pix;
* Valor;
* Data da operação.

---

### 5. Navegação confusa

As opções de saldo, extrato, Pix, pagamentos e cartões podem estar escondidas ou mal organizadas.

Também pode ser difícil encontrar o botão de voltar ou retornar à tela inicial.

#### Impacto para o usuário

O cliente pode demorar mais para concluir uma tarefa simples.

Isso aumenta a frustração, pode causar erros e pode fazer o usuário abandonar o aplicativo.

---

## 3. Por que os problemas de usabilidade impactam o usuário?

Problemas de usabilidade dificultam a utilização do sistema.

Em um aplicativo bancário, isso é ainda mais grave porque o usuário está realizando operações que envolvem dinheiro e informações pessoais.

Esses problemas podem causar:

* Transferências para pessoas erradas;
* Pagamentos duplicados;
* Dificuldade para encontrar funções;
* Medo de utilizar o aplicativo;
* Perda de confiança no banco;
* Necessidade de entrar em contato com o atendimento;
* Abandono de uma operação;
* Prejuízo financeiro.

Um sistema bancário deve ser simples, claro e seguro. O usuário precisa entender o que está acontecendo em cada etapa e deve conseguir realizar suas operações sem dificuldade.

