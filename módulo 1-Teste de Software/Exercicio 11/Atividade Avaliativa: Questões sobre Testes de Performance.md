# Análise de um Relatório de Teste de Performance de um Aplicativo Bancário

## Exemplo de cenário analisado

Um aplicativo bancário foi testado com **500 clientes utilizando o sistema ao mesmo tempo** durante 30 minutos.

Durante o teste, os usuários realizaram as seguintes operações:

* Login no aplicativo;
* Consulta de saldo;
* Consulta de extrato;
* Transferência via Pix;
* Pagamento de contas;
* Acesso à área de cartões.

Os resultados foram:

* Tempo médio de resposta: **4,5 segundos**
* Tempo máximo de resposta: **15 segundos**
* Taxa de erros: **8%**
* Uso de CPU do servidor: **95%**
* Uso de memória: **88%**
* Transações processadas: **120 por segundo**
* Quantidade esperada: **500 usuários simultâneos**
* Tempo máximo permitido: **3 segundos**
* Taxa máxima de erros permitida: **1%**

---

## 1. O sistema pode ser considerado aprovado?

**Não. O aplicativo bancário não pode ser considerado aprovado.**

O requisito informava que as operações deveriam ser concluídas em, no máximo, **3 segundos**, mas o tempo médio de resposta foi de **4,5 segundos**.

Além disso, algumas operações demoraram até **15 segundos** para serem concluídas.

A taxa de erros também ficou acima do permitido:

* Taxa esperada: até **1%**
* Taxa encontrada: **8%**

Em um aplicativo bancário, falhas em operações como login, consulta de saldo, pagamento ou Pix podem causar insegurança e insatisfação para o cliente.

O uso de CPU e memória também ficou muito alto, indicando que o servidor teve dificuldades para atender todos os usuários.

### Resposta resumida

O aplicativo bancário foi **reprovado**, pois apresentou lentidão, erros e alto consumo de recursos durante o teste.

---

## 2. Quais métricas indicam problemas de performance?

As principais métricas que indicam problemas são:

### Tempo médio de resposta

O tempo médio foi de **4,5 segundos**, enquanto o limite esperado era de **3 segundos**.

Isso significa que operações como consultar saldo, visualizar extrato ou realizar um Pix demoraram mais do que o permitido.

### Tempo máximo de resposta

Algumas operações demoraram até **15 segundos**.

Esse tempo pode fazer o cliente pensar que o aplicativo travou ou que a operação não foi realizada.

Em uma transferência Pix, por exemplo, o usuário pode tentar novamente e correr o risco de realizar uma operação duplicada.

### Taxa de erros

A taxa de erros foi de **8%**.

Isso significa que, a cada 100 requisições realizadas, aproximadamente 8 apresentaram algum tipo de falha.

Esses erros podem acontecer em operações como:

* Login;
* Consulta de saldo;
* Transferência;
* Pagamento;
* Geração de comprovante.

### Uso de CPU

A CPU do servidor chegou a **95% de utilização**.

Quando a CPU permanece próxima de 100%, o aplicativo pode ficar lento, travar ou deixar de responder.

### Uso de memória

A memória chegou a **88% de utilização**.

Um uso muito alto de memória pode causar lentidão, encerramento de processos ou indisponibilidade do aplicativo.

### Quantidade de transações por segundo

O sistema processou **120 transações por segundo**.

Essa métrica deve ser comparada com a quantidade esperada pelo banco. Caso o banco precise processar mais transações por segundo, o resultado pode ser insuficiente.

---

## 3. Quais possíveis gargalos podem existir?

Um **gargalo** é uma parte do sistema que está limitando o desempenho das outras partes.

Os possíveis gargalos são:

### Servidor com poucos recursos

O servidor pode não possuir processamento ou memória suficiente para atender 500 clientes ao mesmo tempo.

### Banco de dados lento

O aplicativo bancário precisa consultar muitas informações no banco de dados, como:

* Saldo;
* Extrato;
* Dados do cliente;
* Informações de cartões;
* Histórico de transferências.

Consultas mal desenvolvidas ou sem índices podem aumentar o tempo de resposta.

### Serviço de Pix sobrecarregado

O serviço responsável pelas transferências Pix pode estar recebendo muitas requisições e demorando para processá-las.

### Serviço de autenticação lento

O sistema responsável pelo login, senha, biometria ou token pode estar demorando para validar os usuários.

### Código sem otimização

Algumas funções do aplicativo podem realizar processamentos repetidos ou desnecessários.

Isso pode aumentar o consumo de CPU e deixar as operações mais lentas.

### Falta de cache

Algumas informações consultadas frequentemente poderiam ser armazenadas temporariamente.

Por exemplo, dados da tela inicial poderiam ser carregados de maneira mais rápida com o uso de cache.

### Integração com serviços externos

O aplicativo pode depender de outros serviços, como:

* Sistema de Pix;
* Sistema de boletos;
* Serviço de cartões;
* Validação de CPF;
* Envio de SMS;
* Envio de token.

Caso algum desses serviços esteja lento, o aplicativo também poderá apresentar lentidão.

### Problemas de conexão

A comunicação entre o aplicativo, o servidor e o banco de dados pode estar apresentando atrasos.

---

## 4. Esse cenário se aproxima mais de Carga, Stress ou Capacidade?

Esse cenário se aproxima mais de um **teste de carga**.

O teste utilizou a quantidade de usuários que o aplicativo bancário deveria suportar normalmente: **500 usuários simultâneos**.

O objetivo foi verificar se o sistema conseguiria manter um bom funcionamento dentro da carga esperada.

### Teste de carga

Verifica como o sistema se comporta com a quantidade esperada de usuários.

Exemplo:

O banco espera que 500 clientes utilizem o aplicativo ao mesmo tempo. O teste é realizado com esses 500 clientes.

### Teste de stress

Aumenta a quantidade de usuários além do limite esperado para verificar quando o sistema começa a falhar.

Exemplo:

O aplicativo deveria suportar 500 usuários, mas o teste continua com 600, 800, 1.000 ou mais usuários.

### Teste de capacidade

Busca descobrir qual é a quantidade máxima de usuários ou transações que o sistema consegue suportar sem apresentar problemas.

Exemplo:

O número de usuários é aumentado aos poucos até descobrir o limite máximo do aplicativo.

### Classificação do cenário

Como foram utilizados os **500 usuários previstos no requisito**, o cenário é classificado principalmente como um **teste de carga**.

---

## 5. O que você recomendaria ao time técnico?

Eu recomendaria as seguintes ações:

### Investigar as operações mais lentas

O time deve verificar quais funcionalidades apresentaram maior tempo de resposta, como:

* Login;
* Consulta de saldo;
* Consulta de extrato;
* Pix;
* Pagamento de contas;
* Acesso aos cartões.

### Analisar o alto consumo de CPU

É necessário identificar quais serviços ou processos estão utilizando mais processamento.

### Verificar o uso de memória

O time deve analisar se existe vazamento de memória ou informações sendo mantidas no sistema por mais tempo do que o necessário.

### Revisar o banco de dados

As consultas ao banco devem ser analisadas para identificar:

* Consultas lentas;
* Consultas repetidas;
* Falta de índices;
* Excesso de dados retornados;
* Bloqueios entre transações.

### Analisar os serviços externos

O time deve verificar se a lentidão está sendo causada por serviços de Pix, cartões, boletos, SMS ou autenticação.

### Otimizar o código

As funcionalidades com maior tempo de resposta devem ser revisadas para remover processamentos desnecessários.

### Implementar cache

Informações que não mudam frequentemente podem ser armazenadas temporariamente para reduzir o número de consultas.

### Avaliar a infraestrutura

Pode ser necessário aumentar os recursos do servidor, como:

* Memória;
* Processamento;
* Quantidade de servidores;
* Capacidade de rede.

### Verificar operações duplicadas

O time deve garantir que uma demora no aplicativo não permita que o cliente realize o mesmo Pix ou pagamento duas vezes.

### Melhorar as mensagens para o usuário

Durante uma operação, o aplicativo deve mostrar mensagens claras, como:

* “Processando pagamento”;
* “Transferência em andamento”;
* “Não feche o aplicativo”;
* “Aguarde a confirmação da operação”.

### Repetir o teste

Após as correções, o teste deve ser executado novamente nas mesmas condições.

O aplicativo poderá ser aprovado quando alcançar os seguintes resultados:

* Tempo de resposta de até **3 segundos**;
* Taxa de erros de até **1%**;
* CPU e memória em níveis seguros;
* Atendimento de 500 usuários simultâneos;
* Transferências e pagamentos sem duplicidade;
* Operações concluídas corretamente;
* Comprovantes gerados após as transações.

