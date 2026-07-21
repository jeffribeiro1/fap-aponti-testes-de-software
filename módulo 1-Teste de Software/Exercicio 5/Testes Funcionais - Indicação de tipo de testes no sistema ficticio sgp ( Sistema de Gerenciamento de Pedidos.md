# Atividade Avaliativa — Níveis de Testes Funcionais:

# Dado um sistema fictício, os alunos deverão analisar suas funcionalidades e indicar:

* Quais testes seriam unitários?
* Quais testes seriam de integração?
* Quais testes seriam de sistema?
* Quais testes seriam de aceitação?
* Justificar escolhas com base no objetivo e no nível do teste



# 1. Testes Unitários

Os **testes unitários** verificam pequenas partes do código de maneira isolada, como uma função, método ou classe.

## Possíveis testes unitários no SGP

| Teste | O que deve ser verificado | Resultado esperado |
|---|---|---|
| Calcular valor de um produto | Multiplicar o preço pela quantidade | O cálculo deve retornar o valor correto |
| Calcular total do carrinho | Somar os valores de todos os produtos | O total deve corresponder à soma dos itens |
| Adicionar produto ao carrinho | Executar a função de adicionar produto | O produto deve ser incluído no carrinho |
| Remover produto do carrinho | Executar a função de remoção | O produto deve ser removido |
| Validar carrinho vazio | Verificar a quantidade de itens | O sistema deve identificar que o carrinho está vazio |
| Validar usuário autenticado | Verificar o estado da autenticação | Deve informar corretamente se o usuário está autenticado |
| Bloquear alteração de pedido confirmado | Verificar o status do pedido | Um pedido confirmado não deve permitir alterações |

## Exemplo de teste unitário

Considere um produto com os seguintes dados:

- Preço: R$ 50,00;
- Quantidade: 3.

O cálculo esperado é:

`R$ 50,00 × 3 = R$ 150,00`

## Justificativa

Esses testes são considerados **unitários** porque verificam pequenas partes do sistema separadamente.

Por exemplo, a função responsável por multiplicar o preço pela quantidade pode ser testada sem precisar executar o sistema inteiro.

O objetivo desse nível de teste é encontrar erros nas menores partes do código.

---

# 2. Testes de Integração

Os **testes de integração** verificam se diferentes componentes, módulos ou serviços conseguem se comunicar corretamente.

## Possíveis testes de integração no SGP

| Teste | Integração envolvida | Resultado esperado |
|---|---|---|
| Consultar produtos | Sistema e banco de dados de produtos | Os produtos cadastrados devem aparecer no sistema |
| Realizar login | Sistema e serviço de autenticação | Um usuário válido deve conseguir acessar o sistema |
| Login com dados inválidos | Sistema e serviço de autenticação | O acesso deve ser recusado |
| Criar pedido | Sistema e serviço de pedidos | O pedido deve ser enviado e registrado |
| Consultar informações do produto | Sistema e banco de produtos | Preço, nome e disponibilidade devem ser apresentados |
| Finalizar pedido | Carrinho, autenticação e serviço de pedidos | O pedido deve ser registrado corretamente |
| Atualizar estoque após pedido | Serviço de pedidos e banco de produtos | A quantidade disponível deve ser atualizada |

## Exemplo de integração

Durante o login, o seguinte processo acontece:

1. O usuário informa seu e-mail e senha;
2. O SGP envia os dados para o serviço de autenticação;
3. O serviço verifica se os dados estão corretos;
4. O serviço retorna uma resposta para o SGP;
5. O acesso é permitido ou negado.

Resultados esperados:

- Usuário válido: acesso permitido;
- Usuário inválido: acesso negado.

## Justificativa

Esses testes são considerados **testes de integração** porque verificam a comunicação entre diferentes partes.

Exemplos:

- SGP e banco de dados;
- SGP e serviço de autenticação;
- SGP e serviço de pedidos.

O objetivo é verificar se os componentes conseguem trabalhar juntos corretamente.

---

# 3. Testes de Sistema

Os **testes de sistema** verificam o sistema completo, simulando situações próximas do uso real.

Nesse nível, o SGP deve ser testado com todas as suas funcionalidades e integrações funcionando em conjunto.

## Exemplo de fluxo completo

1. Cadastrar usuário;
2. Realizar login;
3. Consultar os produtos;
4. Adicionar produtos ao carrinho;
5. Alterar a quantidade;
6. Verificar o valor total;
7. Finalizar o pedido;
8. Confirmar o pedido.

## Possíveis testes de sistema no SGP

| Teste | Procedimento | Resultado esperado |
|---|---|---|
| Cadastro de usuário | Preencher os dados e confirmar o cadastro | O usuário deve ser cadastrado |
| Login com dados válidos | Informar usuário e senha corretos | O acesso deve ser permitido |
| Login com dados inválidos | Informar usuário ou senha incorretos | O acesso deve ser negado |
| Consulta de produtos | Acessar o catálogo | Os produtos disponíveis devem aparecer |
| Adicionar produto ao carrinho | Selecionar um produto e adicionar | O produto deve aparecer no carrinho |
| Remover produto do carrinho | Selecionar a opção de remoção | O produto deve desaparecer do carrinho |
| Atualizar quantidade | Alterar a quantidade de um produto | O total deve ser atualizado |
| Finalizar com carrinho vazio | Tentar finalizar sem adicionar produtos | O sistema deve impedir a finalização |
| Finalizar sem autenticação | Tentar finalizar sem realizar login | O sistema deve impedir a finalização |
| Finalizar pedido corretamente | Estar autenticado e possuir produtos | O pedido deve ser concluído |
| Alterar pedido confirmado | Confirmar o pedido e tentar modificá-lo | O sistema deve impedir a alteração |

## Justificativa

Esses testes são considerados **testes de sistema** porque verificam a aplicação completa.

Nesse nível, são testados em conjunto:

- Login;
- Consulta de produtos;
- Carrinho;
- Cálculo do valor;
- Finalização;
- Confirmação do pedido.

O objetivo é verificar se todo o sistema funciona corretamente do início ao fim.

---

# 4. Testes de Aceitação

Os **testes de aceitação** verificam se o sistema atende às necessidades do cliente e às regras de negócio definidas no projeto.

A principal pergunta desse nível de teste é:

> O sistema faz aquilo que foi solicitado pelo cliente?

## Possíveis testes de aceitação no SGP

| Regra de negócio | Teste de aceitação | Resultado esperado |
|---|---|---|
| O pedido deve conter pelo menos um item | Tentar finalizar o pedido com o carrinho vazio | O pedido não deve ser finalizado |
| O total deve considerar preço e quantidade | Adicionar produtos com diferentes quantidades | O valor total deve ser calculado corretamente |
| Usuários não autenticados não podem finalizar | Tentar finalizar um pedido sem login | O sistema deve impedir a finalização |
| Pedido confirmado não pode ser alterado | Confirmar o pedido e tentar modificá-lo | A alteração deve ser bloqueada |
| O cliente deve conseguir realizar pedidos | Executar todo o fluxo de compra | O pedido deve ser concluído |
| O administrador deve gerenciar os pedidos | Acessar as funções administrativas | O administrador deve conseguir consultar e gerenciar pedidos |

## Exemplo de teste de aceitação

Considere os seguintes produtos:

| Produto | Preço | Quantidade | Subtotal |
|---|---:|---:|---:|
| Produto A | R$ 20,00 | 2 | R$ 40,00 |
| Produto B | R$ 30,00 | 1 | R$ 30,00 |
| **Total** |  |  | **R$ 70,00** |

O sistema deve apresentar o valor total de **R$ 70,00**.

## Exemplo em formato BDD

### Cenário: impedir pedido de usuário não autenticado

**Dado** que o usuário não está autenticado  
**E** possui produtos no carrinho  
**Quando** tentar finalizar o pedido  
**Então** o sistema deve impedir a finalização  
**E** deve solicitar que o usuário realize o login.

### Cenário: impedir pedido sem produtos

**Dado** que o usuário está autenticado  
**E** o carrinho está vazio  
**Quando** tentar finalizar o pedido  
**Então** o sistema deve impedir a finalização  
**E** deve informar que o pedido precisa conter pelo menos um item.

### Cenário: impedir alteração de pedido confirmado

**Dado** que um pedido já foi confirmado  
**Quando** o usuário tentar adicionar ou remover produtos  
**Então** o sistema deve bloquear a alteração.

## Justificativa

Esses testes são considerados **testes de aceitação** porque verificam diretamente se o sistema atende às necessidades do negócio.

O foco desse nível não está apenas no código, mas principalmente no comportamento esperado pelo cliente e pelos usuários.

---

# Quadro comparativo

| Nível de teste | O que é testado | Exemplo no SGP | Objetivo |
|---|---|---|---|
| **Unitário** | Pequenas partes do código | Função que calcula preço vezes quantidade | Encontrar erros em partes isoladas |
| **Integração** | Comunicação entre componentes | SGP comunicando com o serviço de autenticação | Verificar se as partes trabalham juntas |
| **Sistema** | Aplicação completa | Login, produtos, carrinho e finalização | Verificar o funcionamento completo |
| **Aceitação** | Necessidades e regras do negócio | Impedir pedido sem itens | Confirmar se o sistema atende ao que foi solicitado |

---

# Resumo dos níveis de teste

## Teste unitário

Testa uma pequena parte do código.

**Exemplo:** função que calcula o valor de um produto.

## Teste de integração

Testa a comunicação entre duas ou mais partes.

**Exemplo:** sistema enviando os dados de login para o serviço de autenticação.

## Teste de sistema

Testa o sistema completo.

**Exemplo:** usuário realiza login, adiciona produtos e finaliza o pedido.

## Teste de aceitação

Verifica se o sistema atende às necessidades do cliente.

**Exemplo:** impedir que um usuário não autenticado finalize um pedido.

---

# Conclusão

No Sistema de Gerenciamento de Pedidos, cada nível de teste possui um objetivo diferente.

Os **testes unitários** verificam pequenas partes do código de forma isolada. Os **testes de integração** verificam a comunicação entre componentes e serviços.

Os **testes de sistema** analisam o funcionamento completo da aplicação, simulando o uso real. Já os **testes de aceitação** verificam se o sistema atende às necessidades do cliente e às regras de negócio.

A aplicação desses diferentes níveis de teste ajuda a encontrar problemas desde as funções mais simples até o funcionamento completo do sistema.
