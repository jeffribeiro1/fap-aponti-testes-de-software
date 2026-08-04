# Atividade Avaliativa - Plano de Testes para um sistema de um banco digital

#  1. Escopo de Testes

O escopo informa quais funcionalidades serão testadas e quais não serão o foco neste primeiro momento.

## 1.1 Funcionalidades que serão testadas

### Login

Serão verificados os seguintes cenários:

* Login com usuário e senha válidos;
* Login com senha incorreta;
* Login com campos vazios;
* Bloqueio após várias tentativas incorretas;
* Recuperação de senha;
* Encerramento da sessão;
* Tentativa de acessar uma conta sem estar autenticado.

### Consulta de saldo

Serão verificados:

* Exibição correta do saldo;
* Atualização do saldo após PIX;
* Atualização do saldo após transferência;
* Atualização do saldo após pagamento;
* Exibição de saldo positivo, zerado ou negativo;
* Proteção do saldo na tela inicial.

### PIX

Serão testados:

* PIX com chave válida;
* PIX com chave inexistente;
* PIX com saldo suficiente;
* PIX com saldo insuficiente;
* PIX com valor zero;
* PIX com valor negativo;
* PIX acima do limite permitido;
* Cancelamento antes da confirmação;
* Duplo clique no botão de confirmar;
* Geração do comprovante;
* Atualização do saldo e do extrato.

### Transferências

Serão verificados:

* Transferência entre contas válidas;
* Transferência para conta inexistente;
* Transferência com saldo insuficiente;
* Transferência com valor inválido;
* Transferência acima do limite;
* Atualização da conta de origem;
* Atualização da conta de destino;
* Registro no extrato;
* Geração de comprovante.

### Pagamento de contas

Serão testados:

* Pagamento com código de barras válido;
* Código de barras inválido;
* Conta vencida;
* Saldo insuficiente;
* Pagamento duplicado;
* Atualização do saldo;
* Registro no extrato;
* Geração do comprovante.

### Extrato

Serão verificados:

* Exibição das movimentações;
* Data e horário das operações;
* Valor correto das movimentações;
* Identificação de entrada e saída;
* Ordem das transações;
* Exibição do PIX, transferência e pagamento realizados;
* Acesso aos comprovantes.

### Cartão

Serão testados:

* Bloqueio do cartão;
* Desbloqueio do cartão;
* Tentativa de utilização do cartão bloqueado;
* Confirmação da operação;
* Atualização do status do cartão.

---

## 1.2 Funcionalidades fora do escopo inicial

Neste primeiro plano, não serão testadas profundamente:

* Investimentos;
* Empréstimos;
* Financiamentos;
* Seguros;
* Programa de pontos;
* Atendimento por chatbot;
* Integração com corretoras.

Essas funcionalidades ficarão para versões futuras, pois o prazo é limitado e o time é reduzido.

A prioridade será testar as funções essenciais para o cliente acessar a conta e movimentar seu dinheiro.

---

# 2. Tipos de Teste Aplicados

## 2.1 Teste Funcional

O teste funcional verificará se cada funcionalidade realiza corretamente aquilo que foi solicitado.

Exemplos:

* Verificar se o login permite o acesso com dados válidos;
* Verificar se o PIX envia o valor correto;
* Verificar se o saldo é atualizado;
* Verificar se o pagamento aparece no extrato.

### Motivo da escolha

Esse teste é muito importante porque identifica falhas nas funções principais do banco.

---

## 2.2 Teste de Integração

O teste de integração verificará se diferentes partes do sistema funcionam corretamente juntas.

Exemplo de integração do PIX:

1. O cliente informa a chave PIX;
2. O sistema localiza a conta de destino;
3. O valor é retirado da conta de origem;
4. O valor é enviado para a conta de destino;
5. O saldo é atualizado;
6. A operação aparece no extrato;
7. O comprovante é gerado;
8. A notificação é enviada.

### Motivo da escolha

Uma parte do sistema pode funcionar sozinha, mas apresentar erro ao trocar informações com outro serviço.

---

## 2.3 Teste de Regressão

O teste de regressão será executado após correções ou novas versões.

Exemplo:

Se o desenvolvedor corrigir um problema no PIX, deverão ser testados novamente:

* Login;
* Saldo;
* PIX;
* Extrato;
* Comprovante;
* Limite de transferência.

### Motivo da escolha

Uma alteração pode corrigir um problema e causar outro em uma funcionalidade que já estava funcionando.

---

## 2.4 Teste de Segurança

Serão realizados testes básicos de segurança, como:

* Bloqueio após tentativas incorretas;
* Proteção da senha;
* Encerramento da sessão;
* Impedimento de acesso à conta de outro cliente;
* Ocultação de dados sensíveis;
* Validação da autenticação;
* Verificação de mensagens de erro.

### Motivo da escolha

O banco trabalha com dinheiro, documentos e informações pessoais.

---

## 2.5 Teste de Usabilidade

Serão avaliados:

* Clareza das mensagens;
* Facilidade para encontrar o PIX;
* Facilidade para consultar o saldo;
* Visibilidade dos valores;
* Confirmação antes de transferir;
* Facilidade para cancelar uma operação;
* Clareza dos comprovantes.

### Motivo da escolha

O sistema deve ser utilizado por pessoas com diferentes níveis de conhecimento em tecnologia.

---

## 2.6 Teste de Compatibilidade

O sistema será testado em:

* Celular Android;
* Celular iPhone;
* Computador;
* Google Chrome;
* Microsoft Edge;
* Mozilla Firefox;
* Diferentes tamanhos de tela.

### Motivo da escolha

Os clientes não utilizarão todos o mesmo celular ou navegador.

---

## 2.7 Teste de Performance

Serão realizados testes básicos para verificar:

* Tempo de carregamento da tela de login;
* Tempo de consulta do saldo;
* Tempo para concluir um PIX;
* Tempo para abrir o extrato;
* Comportamento com vários usuários;
* Comportamento durante muitas transferências.

### Motivo da escolha

O sistema bancário não pode apresentar muita lentidão, principalmente durante uma operação financeira.

---

# 3. Critérios de Entrada

Os critérios de entrada representam as condições necessárias para iniciar os testes.

Os testes poderão começar quando:

* Os requisitos das funcionalidades estiverem definidos;
* O ambiente de testes estiver disponível;
* A versão do sistema estiver instalada;
* O banco de dados de testes estiver funcionando;
* Os usuários de teste estiverem cadastrados;
* O QA tiver acesso ao sistema;
* As principais telas estiverem disponíveis;
* Os casos de teste estiverem preparados;
* Os desenvolvedores informarem quais funções foram concluídas;
* Não existir um erro que impeça totalmente o acesso ao sistema.

## Dados necessários para iniciar

Serão necessários pelo menos os seguintes usuários:

| Usuário   | Situação                         |
| --------- | -------------------------------- |
| Cliente 1 | Conta com saldo de R$ 5.000,00   |
| Cliente 2 | Conta com saldo de R$ 500,00     |
| Cliente 3 | Conta sem saldo                  |
| Cliente 4 | Conta bloqueada                  |
| Cliente 5 | Conta com limite de PIX reduzido |

Também serão necessárias:

* Chave PIX válida;
* Chave PIX inexistente;
* Conta bancária válida;
* Conta bancária inexistente;
* Código de barras válido;
* Código de barras inválido;
* Cartão ativo;
* Cartão bloqueado.

---

# 4. Critérios de Saída

Os critérios de saída representam as condições necessárias para finalizar os testes e liberar a versão.

A versão poderá ser aprovada quando:

* Todos os testes das funcionalidades principais forem executados;
* Login, saldo, PIX, transferência, extrato e pagamento estiverem funcionando;
* Não existirem defeitos críticos abertos;
* Não existirem defeitos que causem perda financeira;
* Não existirem falhas graves de segurança conhecidas;
* O saldo for atualizado corretamente;
* As operações não forem duplicadas;
* Os comprovantes forem gerados corretamente;
* Os defeitos corrigidos forem testados novamente;
* O teste de regressão for concluído;
* Pelo menos 95% dos testes prioritários forem aprovados.

## Exemplos de defeitos que impedem a liberação

A versão não deverá ser liberada se:

* O usuário conseguir acessar a conta de outro cliente;
* O PIX retirar um valor incorreto;
* A transferência for duplicada;
* O saldo não for atualizado;
* O pagamento for realizado mais de uma vez;
* A senha aparecer na tela;
* O sistema permitir transferência sem confirmação;
* O comprovante apresentar dados de outra pessoa;
* O aplicativo fechar durante uma operação financeira.

## Defeitos que podem ser aceitos temporariamente

Alguns defeitos menores poderão ser aceitos, desde que não impeçam o uso do sistema.

Exemplos:

* Pequeno desalinhamento de um botão;
* Cor diferente do padrão;
* Erro de escrita sem alterar o entendimento;
* Espaçamento incorreto;
* Ícone com tamanho diferente.

Esses problemas deverão ser registrados para correção futura.

---

# 5. Ambiente de Testes

O ambiente de testes será separado do ambiente utilizado pelos clientes reais.

Nenhuma operação de teste deverá movimentar dinheiro verdadeiro.

## Configuração do ambiente

| Item                   | Configuração                             |
| ---------------------- | ---------------------------------------- |
| Ambiente               | Homologação ou ambiente de QA            |
| Aplicação              | Versão de teste do banco digital         |
| Banco de dados         | Banco com clientes fictícios             |
| Navegador principal    | Google Chrome                            |
| Navegadores adicionais | Edge e Firefox                           |
| Sistema mobile         | Android e iOS                            |
| Rede                   | Wi-Fi e internet móvel                   |
| Dados financeiros      | Valores fictícios                        |
| Integrações            | Serviços simulados ou ambiente de testes |

## Dispositivos utilizados

Considerando que o time é reduzido, serão utilizados:

* Um computador com Windows;
* Um celular Android;
* Um celular iPhone, quando disponível;
* Ferramentas de simulação de tamanho de tela;
* Navegadores Chrome, Edge e Firefox.

## Cuidados com o ambiente

O ambiente deverá:

* Possuir dados fictícios;
* Permitir limpar ou restaurar os dados;
* Não enviar mensagens reais aos clientes;
* Não utilizar cartões reais;
* Não movimentar dinheiro real;
* Permitir consultar registros das operações;
* Registrar erros para análise.

---

# 6. Recursos e Responsabilidades

Como o time é reduzido, cada pessoa terá responsabilidades bem definidas.

## Equipe do projeto

| Participante              |     Quantidade | Responsabilidades                                 |
| ------------------------- | -------------: | ------------------------------------------------- |
| Analista de QA            |              1 | Planejar, criar, executar e registrar os testes   |
| Desenvolvedor Front-end   |              1 | Corrigir problemas nas telas e na navegação       |
| Desenvolvedor Back-end    |              1 | Corrigir regras, APIs, banco de dados e operações |
| Responsável pelo produto  |              1 | Explicar requisitos e definir prioridades         |
| Especialista de segurança | Apoio eventual | Avaliar problemas graves de segurança             |

## Responsabilidades do QA

O analista de QA será responsável por:

* Analisar os requisitos;
* Identificar os principais riscos;
* Criar casos de teste;
* Preparar os dados;
* Executar testes manuais;
* Registrar os defeitos;
* Retestar as correções;
* Executar regressão;
* Informar a situação da qualidade;
* Apoiar a decisão de liberar ou não a versão.

## Responsabilidades dos desenvolvedores

Os desenvolvedores serão responsáveis por:

* Criar as funcionalidades;
* Realizar testes unitários;
* Corrigir os defeitos;
* Informar quais alterações foram realizadas;
* Apoiar a análise de erros;
* Revisar os registros técnicos.

## Responsabilidade do responsável pelo produto

O responsável pelo produto deverá:

* Explicar as regras do sistema;
* Informar as prioridades;
* Tirar dúvidas sobre as funcionalidades;
* Avaliar o impacto dos defeitos;
* Aprovar ou rejeitar comportamentos;
* Participar da decisão de liberação.

---

# 7. Cronograma Básico

Para este plano, será considerado um prazo de quatro semanas.

## Semana 1 — Planejamento e preparação

Atividades:

* Analisar os requisitos;
* Identificar os riscos;
* Definir o escopo;
* Criar casos de teste;
* Preparar usuários e contas fictícias;
* Verificar o ambiente;
* Testar o acesso inicial.

Funcionalidades analisadas:

* Login;
* Recuperação de senha;
* Tela inicial;
* Consulta de saldo.

---

## Semana 2 — Operações financeiras

Atividades:

* Executar testes de PIX;
* Executar testes de transferência;
* Verificar atualização do saldo;
* Verificar extrato;
* Verificar comprovantes;
* Registrar defeitos;
* Enviar defeitos aos desenvolvedores.

Prioridade da semana:

* Evitar valores incorretos;
* Evitar operações duplicadas;
* Garantir atualização das contas.

---

## Semana 3 — Pagamentos, segurança e compatibilidade

Atividades:

* Testar pagamento de contas;
* Testar bloqueio do cartão;
* Testar tentativas incorretas de login;
* Testar encerramento da sessão;
* Testar mensagens de erro;
* Testar diferentes navegadores;
* Testar Android e iPhone;
* Retestar defeitos corrigidos.

---

## Semana 4 — Regressão e encerramento

Atividades:

* Executar os testes principais novamente;
* Testar as correções;
* Verificar se alguma alteração causou novos defeitos;
* Executar testes básicos de performance;
* Confirmar os critérios de saída;
* Elaborar o relatório final;
* Informar os riscos conhecidos;
* Apoiar a decisão de liberação.

---

## Resumo do cronograma

| Semana   | Atividades principais                        |
| -------- | -------------------------------------------- |
| Semana 1 | Planejamento, ambiente, login e saldo        |
| Semana 2 | PIX, transferências, extrato e comprovantes  |
| Semana 3 | Pagamentos, segurança e compatibilidade      |
| Semana 4 | Retestes, regressão, performance e relatório |

Os testes serão contínuos durante as quatro semanas.

Eles não ficarão concentrados apenas no final do projeto.

---

# 8. Riscos e Contingências

## 8.1 Prazo curto

### Risco

O time pode não conseguir testar todas as funcionalidades antes da entrega.

### Contingência

O QA deverá priorizar:

1. Login;
2. PIX;
3. Transferência;
4. Saldo;
5. Extrato;
6. Pagamento;
7. Segurança.

Funcionalidades de menor risco poderão ser testadas posteriormente.

---

## 8.2 Time reduzido

### Risco

Apenas uma pessoa de QA pode ficar sobrecarregada.

### Contingência

* Dividir os testes por prioridade;
* Automatizar cenários repetitivos;
* Pedir apoio dos desenvolvedores;
* Utilizar checklist;
* Evitar repetir testes sem necessidade;
* Manter os casos de teste organizados.

---

## 8.3 Ambiente de testes indisponível

### Risco

O ambiente pode ficar fora do ar e impedir a execução dos testes.

### Contingência

* Comunicar o problema ao time;
* Registrar o período de indisponibilidade;
* Utilizar um ambiente alternativo, quando disponível;
* Continuar a criação dos casos de teste;
* Revisar requisitos;
* Preparar dados para executar os testes assim que o ambiente voltar.

---

## 8.4 Dados de teste incorretos

### Risco

O usuário de teste pode não possuir o saldo ou a configuração necessária.

### Contingência

* Criar uma lista de usuários preparados;
* Registrar o saldo inicial de cada conta;
* Restaurar os dados depois dos testes;
* Manter contas específicas para cada cenário;
* Não utilizar a mesma conta em todos os testes.

---

## 8.5 Correções entregues no final do prazo

### Risco

Os defeitos podem ser corrigidos muito próximo da data de entrega.

### Contingência

* Retestar primeiro os defeitos críticos;
* Executar regressão nas áreas alteradas;
* Verificar login, saldo, PIX e extrato;
* Registrar os testes que não puderam ser executados;
* Informar claramente os riscos antes da liberação.

---

## 8.6 Operação financeira duplicada

### Risco

Um PIX, pagamento ou transferência pode ser executado duas vezes.

### Contingência

Testar:

* Duplo clique;
* Atualização da página;
* Internet lenta;
* Reenvio da operação;
* Clique repetido no botão;
* Retorno demorado do sistema.

A versão não deverá ser liberada se a duplicação for confirmada.

---

## 8.7 Saldo ou extrato incorreto

### Risco

O valor mostrado ao cliente pode não representar as operações realizadas.

### Contingência

Comparar:

* Saldo antes da operação;
* Valor enviado ou pago;
* Saldo depois da operação;
* Registro no extrato;
* Comprovante gerado;
* Conta de destino.

---

## 8.8 Falha de segurança

### Risco

Um usuário pode acessar informações de outra conta.

### Contingência

* Bloquear a liberação da versão;
* Registrar o defeito como crítico;
* Comunicar imediatamente ao time;
* Corrigir antes da publicação;
* Repetir os testes de acesso e permissão.

---

## 8.9 Falta de dispositivo para teste

### Risco

O time pode não possuir vários celulares físicos.

### Contingência

* Utilizar emuladores;
* Utilizar simuladores;
* Testar tamanhos de tela pelo navegador;
* Priorizar os dispositivos mais utilizados;
* Registrar quais dispositivos não foram testados.



