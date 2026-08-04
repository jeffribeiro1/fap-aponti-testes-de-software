# Atividade Avaliativa — Estratégia de Testes para um sistema de um banco digital

## 1. Contexto do Projeto

O sistema analisado será um **banco digital**, no qual os clientes poderão realizar operações financeiras pelo aplicativo ou pelo site.

Entre as principais funcionalidades estão:

* Cadastro de clientes;
* Login no sistema;
* Consulta de saldo;
* Consulta de extrato;
* Transferências bancárias;
* Pagamento de contas;
* PIX;
* Alteração de senha;
* Recuperação de senha;
* Bloqueio e desbloqueio de cartão;
* Recebimento de notificações.

A estratégia de testes será criada considerando o contexto, os riscos e as limitações do projeto.

---

## 2. Características do Projeto

### Possui múltiplas funcionalidades principais?

**Sim.**

O banco digital possui várias funcionalidades importantes, como login, consulta de saldo, transferências, PIX e pagamento de contas.

Essas funcionalidades precisam funcionar em conjunto. Por exemplo, após uma transferência, o saldo e o extrato precisam ser atualizados corretamente.

### Será utilizado por usuários reais?

**Sim.**

O sistema será utilizado por clientes reais que movimentarão dinheiro verdadeiro.

Por isso, qualquer erro pode causar:

* Perda financeira;
* Cobrança incorreta;
* Transferência para uma conta errada;
* Exposição de dados pessoais;
* Insatisfação dos clientes;
* Perda de confiança no banco.

### Está em fase de desenvolvimento ativo?

**Sim.**

O sistema ainda está sendo desenvolvido. Isso significa que novas funcionalidades, alterações e correções serão adicionadas durante o projeto.

Os testes deverão acompanhar o desenvolvimento para encontrar os problemas o mais cedo possível.

### Possui prazo de entrega definido?

**Sim.**

O projeto possui uma data definida para ser entregue.

Por causa do prazo, o time de QA deverá priorizar as funcionalidades que possuem maior risco para o cliente e para o banco.

### Conta com um time reduzido?

**Sim.**

O projeto possui poucos profissionais disponíveis para realizar os testes.

Por isso, será necessário organizar bem as atividades e evitar gastar muito tempo com funcionalidades de baixo risco.

### Sofrerá evoluções e correções ao longo do projeto?

**Sim.**

O sistema bancário receberá:

* Novas funcionalidades;
* Correções de defeitos;
* Melhorias de segurança;
* Alterações na interface;
* Atualizações de regras de negócio.

Sempre que uma alteração for realizada, será necessário verificar se ela não prejudicou outras partes do sistema.

---

# 3. Objetivo da Estratégia de Testes

## O que é mais importante garantir com os testes?

O principal objetivo é garantir que o sistema seja:

* Seguro;
* Confiável;
* Fácil de utilizar;
* Rápido;
* Estável;
* Correto nas operações financeiras.

Também é importante garantir que nenhuma operação cause perda ou alteração incorreta do dinheiro do cliente.

Por exemplo, ao realizar uma transferência de R$ 100,00, o sistema deverá:

1. Retirar exatamente R$ 100,00 da conta de origem;
2. Adicionar exatamente R$ 100,00 na conta de destino;
3. Registrar a operação no extrato;
4. Mostrar um comprovante;
5. Não duplicar a transferência.

## Quais aspectos do sistema merecem maior atenção?

Os aspectos que merecem maior atenção são:

### Segurança

O sistema deve proteger os dados pessoais, as senhas e o dinheiro dos clientes.

### Operações financeiras

Transferências, PIX e pagamentos devem utilizar os valores corretos e não podem ser duplicados.

### Login e autenticação

Somente o usuário autorizado deve conseguir entrar na conta.

### Saldo e extrato

O saldo e o extrato devem ser atualizados corretamente depois de cada movimentação.

### Disponibilidade

O sistema deve permanecer disponível, principalmente em horários de grande movimento.

### Desempenho

As telas e operações devem carregar em um tempo aceitável.

### Compatibilidade

O aplicativo deve funcionar em diferentes celulares, navegadores e tamanhos de tela.

---

# 4. Tipos de Teste Prioritários

## 4.1 Testes Funcionais

### Prioridade: Muito alta

Os testes funcionais verificam se cada funcionalidade realiza corretamente aquilo que foi solicitado.

Exemplos:

* Realizar login com dados válidos;
* Bloquear login com senha incorreta;
* Consultar saldo;
* Realizar PIX;
* Fazer transferência;
* Pagar uma conta;
* Consultar extrato;
* Recuperar senha.

### Justificativa

Esses testes possuem prioridade alta porque um erro em uma funcionalidade bancária pode causar prejuízo financeiro.

---

## 4.2 Testes de Segurança

### Prioridade: Muito alta

Os testes de segurança verificam se o sistema protege os dados e impede acessos não autorizados.

Exemplos:

* Verificar se a senha não aparece na tela;
* Testar bloqueio após várias tentativas incorretas;
* Verificar se um cliente não consegue acessar a conta de outro;
* Testar o encerramento da sessão após um período sem uso;
* Verificar se dados sensíveis não aparecem em mensagens de erro;
* Testar autenticação em duas etapas.

### Justificativa

A segurança é uma das maiores prioridades de um banco digital porque o sistema trabalha com dinheiro e informações pessoais.

---

## 4.3 Testes de Integração

### Prioridade: Alta

Os testes de integração verificam se diferentes partes do sistema funcionam corretamente juntas.

Exemplo:

Ao realizar uma transferência, o sistema deve integrar:

* Conta do cliente;
* Saldo;
* Extrato;
* Banco de dados;
* Serviço de transferência;
* Notificação;
* Comprovante.

### Justificativa

Mesmo que cada funcionalidade funcione separadamente, podem ocorrer erros na comunicação entre elas.

---

## 4.4 Testes de Regressão

### Prioridade: Alta

Os testes de regressão verificam se uma nova alteração ou correção não quebrou algo que já funcionava.

Exemplo:

Depois de corrigir um problema no PIX, deve-se verificar novamente:

* Login;
* Saldo;
* Extrato;
* Transferência;
* Comprovante;
* Notificações.

### Justificativa

Como o sistema receberá várias evoluções e correções, existe o risco de uma mudança causar novos defeitos.

---

## 4.5 Testes de Performance

### Prioridade: Alta

Os testes de performance verificam se o sistema continua rápido e estável quando muitas pessoas o utilizam.

Exemplos:

* Simular vários usuários acessando ao mesmo tempo;
* Simular vários pagamentos;
* Simular grande quantidade de transferências;
* Medir o tempo de resposta;
* Verificar se o sistema apresenta lentidão ou fica indisponível.

### Justificativa

Um banco digital pode receber milhares de acessos ao mesmo tempo. A lentidão pode impedir o cliente de pagar uma conta ou realizar uma transferência.

---

## 4.6 Testes de Usabilidade

### Prioridade: Média

Os testes de usabilidade verificam se o sistema é fácil de entender e utilizar.

Exemplos:

* Verificar se os botões são fáceis de encontrar;
* Avaliar se as mensagens são claras;
* Verificar se o valor da transferência aparece antes da confirmação;
* Avaliar se o usuário consegue cancelar uma operação antes de confirmar;
* Verificar se a navegação é simples.

### Justificativa

A usabilidade é importante porque o banco será utilizado por pessoas com diferentes níveis de conhecimento em tecnologia.

---

## 4.7 Testes de Compatibilidade

### Prioridade: Média

Os testes de compatibilidade verificam se o sistema funciona em diferentes ambientes.

Exemplos:

* Celulares Android;
* Celulares iPhone;
* Tablets;
* Navegador Google Chrome;
* Navegador Microsoft Edge;
* Navegador Firefox;
* Diferentes tamanhos de tela.

### Justificativa

Os clientes utilizarão diferentes aparelhos e versões de sistemas operacionais.

---

## 4.8 Testes de Aparência Visual

### Prioridade: Menor

Esses testes verificam cores, alinhamentos, fontes, espaçamentos e pequenas diferenças visuais.

### Justificativa

Problemas visuais devem ser corrigidos, mas normalmente possuem menos risco do que falhas de segurança ou erros em transferências.

Entretanto, um problema visual poderá receber prioridade maior caso impeça o usuário de utilizar alguma funcionalidade.

---

# 5. Resumo das Prioridades

| Tipo de teste    | Prioridade | Motivo                                        |
| ---------------- | ---------- | --------------------------------------------- |
| Segurança        | Muito alta | Protege dinheiro e dados dos clientes         |
| Funcional        | Muito alta | Verifica as operações principais              |
| Integração       | Alta       | Verifica a comunicação entre os serviços      |
| Regressão        | Alta       | Evita que alterações quebrem o sistema        |
| Performance      | Alta       | Evita lentidão e indisponibilidade            |
| Usabilidade      | Média      | Facilita a utilização pelo cliente            |
| Compatibilidade  | Média      | Garante funcionamento em diferentes aparelhos |
| Aparência visual | Menor      | Geralmente possui menor impacto financeiro    |

---

# 6. Abordagens de Teste

## Quais testes serão realizados de forma manual?

Os testes manuais serão utilizados principalmente em situações que precisam da observação e da experiência de uma pessoa.

Serão realizados manualmente:

* Testes exploratórios;
* Testes de usabilidade;
* Verificação de mensagens de erro;
* Avaliação da facilidade de navegação;
* Testes de novas funcionalidades;
* Verificação visual das telas;
* Testes de situações diferentes do fluxo normal;
* Testes em diferentes celulares.

### Exemplo de teste manual

O QA poderá tentar realizar um PIX e observar:

* Se os campos são fáceis de entender;
* Se o valor está visível;
* Se existe uma tela de confirmação;
* Se é possível cancelar antes de confirmar;
* Se o comprovante apresenta os dados corretos.

---

## Quais testes poderão ser automatizados?

Os testes automatizados serão utilizados em cenários repetitivos e que precisam ser executados várias vezes.

Poderão ser automatizados:

* Login com usuário válido;
* Login com senha incorreta;
* Consulta de saldo;
* Consulta de extrato;
* Transferência entre contas;
* PIX;
* Pagamento de conta;
* Validação de campos obrigatórios;
* Cálculos financeiros;
* Testes de regressão;
* Testes de API;
* Testes de performance.

### Exemplo de teste automatizado

Sempre que uma nova versão do sistema for publicada, a automação poderá testar:

1. Realizar login;
2. Consultar saldo;
3. Fazer uma transferência;
4. Verificar o novo saldo;
5. Consultar o extrato;
6. Verificar o comprovante.

---

## Por que utilizar testes manuais e automatizados?

A combinação foi escolhida porque as duas abordagens possuem vantagens.

Os testes manuais são melhores para:

* Explorar o sistema;
* Avaliar a experiência do usuário;
* Encontrar problemas inesperados;
* Testar funcionalidades novas.

Os testes automatizados são melhores para:

* Repetir testes;
* Economizar tempo;
* Executar muitos cenários;
* Fazer regressão;
* Encontrar rapidamente falhas em versões novas.

A automação não substitui completamente o trabalho do QA. Ela serve como apoio para que o profissional tenha mais tempo para analisar cenários importantes.

---

# 7. Riscos e Mitigação

## Risco 1 — Transferência com valor incorreto

O sistema pode retirar ou adicionar um valor diferente do informado.

### Impacto

Pode causar prejuízo financeiro ao cliente ou ao banco.

### Mitigação

Realizar testes funcionais, testes de integração e validação dos cálculos financeiros.

---

## Risco 2 — Transferência duplicada

O cliente pode clicar duas vezes no botão e a operação ser realizada duas vezes.

### Impacto

O cliente pode perder dinheiro e precisar solicitar o estorno.

### Mitigação

Testar cliques repetidos, lentidão da internet e reenvio da mesma solicitação.

---

## Risco 3 — Acesso não autorizado

Uma pessoa pode conseguir acessar a conta de outro cliente.

### Impacto

Pode causar roubo de dados e perda financeira.

### Mitigação

Realizar testes de segurança, autenticação, controle de sessão e permissões de acesso.

---

## Risco 4 — Saldo incorreto

O saldo pode não ser atualizado depois de uma transferência ou pagamento.

### Impacto

O cliente pode tomar decisões financeiras com base em um valor incorreto.

### Mitigação

Realizar testes de integração entre transferência, saldo, extrato e banco de dados.

---

## Risco 5 — Sistema indisponível

O aplicativo pode ficar fora do ar em horários de grande movimento.

### Impacto

Os clientes não conseguirão acessar a conta ou realizar pagamentos.

### Mitigação

Realizar testes de carga, performance e monitoramento do ambiente.

---

## Risco 6 — Exposição de dados pessoais

O sistema pode mostrar CPF, senha, número do cartão ou outros dados sensíveis.

### Impacto

Pode causar fraude e problemas legais para o banco.

### Mitigação

Realizar testes de segurança e verificar se os dados estão protegidos ou parcialmente ocultos.

---

## Risco 7 — Alterações quebrando funcionalidades antigas

Uma nova versão pode corrigir um defeito e causar outro problema.

### Impacto

Funcionalidades que já estavam funcionando podem parar.

### Mitigação

Executar testes de regressão após cada alteração importante.

---

## Risco 8 — Aplicativo não funcionar em alguns celulares

O sistema pode funcionar em um aparelho, mas apresentar erro em outro.

### Impacto

Parte dos clientes poderá ficar sem acesso ao banco.

### Mitigação

Realizar testes de compatibilidade em diferentes aparelhos, versões e tamanhos de tela.

---

# 8. Como a Estratégia Reduz os Riscos

A estratégia de testes reduz os riscos porque:

* Prioriza as funcionalidades mais importantes;
* Testa as operações financeiras com mais cuidado;
* Verifica a segurança dos dados;
* Executa testes durante o desenvolvimento;
* Realiza regressão após alterações;
* Automatiza os cenários repetitivos;
* Testa o sistema em diferentes dispositivos;
* Simula muitos usuários acessando ao mesmo tempo;
* Registra os defeitos encontrados;
* Acompanha as correções realizadas pelo time.

---

# 9. Recursos Necessários

## Quantas pessoas estarão envolvidas nos testes?

Considerando um time reduzido, poderão participar:

| Profissional              |           Quantidade | Responsabilidade                                    |
| ------------------------- | -------------------: | --------------------------------------------------- |
| Analista de QA            |                    1 | Planejar, criar e executar os testes                |
| Desenvolvedores           |                    2 | Corrigir defeitos e realizar testes técnicos        |
| Responsável pelo produto  |                    1 | Explicar os requisitos e validar as funcionalidades |
| Profissional de segurança | 1, quando necessário | Avaliar riscos e falhas de segurança                |

O principal responsável pelos testes será o analista de QA, mas a qualidade deve ser responsabilidade de todo o time.

---

# 10. Cronograma de Testes

## Em quais momentos do projeto os testes ocorrerão?

Os testes acontecerão em vários momentos.

### Antes do desenvolvimento

O QA analisará os requisitos e tentará identificar regras ausentes, dúvidas e possíveis riscos.

### Durante o desenvolvimento

O QA criará os cenários e casos de teste enquanto os desenvolvedores criam as funcionalidades.

### Após a entrega de cada funcionalidade

Serão executados testes funcionais, de integração e exploratórios.

### Após uma correção

O defeito será testado novamente para confirmar se foi corrigido.

Também será realizada uma pequena regressão nas áreas relacionadas.

### Antes da publicação

Serão executados:

* Testes de regressão;
* Testes de segurança;
* Testes de performance;
* Testes de compatibilidade;
* Testes das principais funcionalidades.

### Depois da publicação

O time acompanhará:

* Erros;
* Lentidão;
* Indisponibilidade;
* Reclamações dos clientes;
* Operações com falha.

---

# 11. Os Testes Serão Contínuos ou Concentrados?

Os testes serão realizados de forma **contínua** durante todo o projeto.

Não é recomendado deixar todos os testes apenas para o final, porque os defeitos poderão ser descobertos muito tarde.

Quando um problema é encontrado no início, normalmente ele é mais fácil e mais barato de corrigir.

Mesmo com testes contínuos, antes da publicação será realizada uma etapa mais completa de validação.

Portanto, a estratégia será:

* Testes contínuos durante o desenvolvimento;
* Testes mais completos antes da publicação;
* Monitoramento após a publicação.

---

# 12. Exemplo de Organização por Etapas

| Etapa                  | Testes realizados                                   |
| ---------------------- | --------------------------------------------------- |
| Análise dos requisitos | Revisão das regras e identificação dos riscos       |
| Desenvolvimento        | Testes unitários e testes de API                    |
| Funcionalidade pronta  | Testes funcionais e exploratórios                   |
| Integração             | Testes entre os diferentes serviços                 |
| Correção de defeitos   | Reteste e regressão                                 |
| Antes da publicação    | Regressão, segurança, performance e compatibilidade |
| Depois da publicação   | Monitoramento e análise de erros                    |



