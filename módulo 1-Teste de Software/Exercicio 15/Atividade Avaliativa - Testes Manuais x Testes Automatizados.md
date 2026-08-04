# Atividade Avaliativa - Testes Manuais e Automatizados em um sistema de banco digital

## 1. Objetivo

O objetivo desta atividade é analisar diferentes cenários de teste do banco digital e decidir se cada um deve ser executado de forma **manual** ou **automatizada**.

Para tomar essa decisão, foram considerados os seguintes pontos:

* **Custo:** esforço necessário para criar e manter a automação;
* **Repetição:** quantidade de vezes que o teste será executado;
* **Estabilidade:** frequência de mudanças na funcionalidade;
* **Objetivo:** o que realmente precisa ser avaliado no teste.

---

## 2. Classificação dos Cenários

| ID    | Cenário de teste                                               | Abordagem    | Justificativa                                                                           |
| ----- | -------------------------------------------------------------- | ------------ | --------------------------------------------------------------------------------------- |
| CT-01 | Realizar login com usuário e senha válidos                     | Automatizado | É um teste simples, estável e executado várias vezes durante a regressão.               |
| CT-02 | Tentar login com senha incorreta                               | Automatizado | É um cenário repetitivo e possui um resultado esperado fácil de validar.                |
| CT-03 | Verificar campos obrigatórios no login                         | Automatizado | Pode ser executado rapidamente com diferentes combinações de campos vazios.             |
| CT-04 | Verificar clareza da mensagem de login inválido                | Manual       | É necessário avaliar se a mensagem é fácil de entender para o usuário.                  |
| CT-05 | Verificar bloqueio após três tentativas incorretas             | Automatizado | O teste exige repetir os mesmos passos e pode ser validado automaticamente.             |
| CT-06 | Avaliar facilidade para encontrar a opção PIX                  | Manual       | O objetivo é analisar a experiência e a percepção do usuário.                           |
| CT-07 | Realizar PIX com saldo suficiente                              | Automatizado | É uma funcionalidade crítica, repetitiva e deve ser testada em todas as versões.        |
| CT-08 | Realizar PIX com saldo insuficiente                            | Automatizado | Possui entrada e resultado bem definidos, facilitando a automação.                      |
| CT-09 | Verificar se um PIX é duplicado com dois cliques               | Automatizado | Precisa ser repetido após alterações e verifica um risco financeiro grave.              |
| CT-10 | Conferir visualmente os dados antes de confirmar o PIX         | Manual       | É importante observar se nome, valor e informações estão bem apresentados na tela.      |
| CT-11 | Verificar atualização do saldo após um PIX                     | Automatizado | O cálculo pode ser comparado automaticamente antes e depois da operação.                |
| CT-12 | Verificar atualização do extrato após uma transferência        | Automatizado | É um teste objetivo, repetitivo e com resultado esperado claramente definido.           |
| CT-13 | Avaliar se o comprovante é fácil de entender                   | Manual       | A avaliação envolve clareza, organização visual e facilidade de leitura.                |
| CT-14 | Realizar pagamento com código de barras válido                 | Automatizado | É uma operação principal e deve ser repetida frequentemente na regressão.               |
| CT-15 | Tentar pagamento com código de barras inválido                 | Automatizado | O comportamento esperado é estável e pode ser validado pela mensagem de erro.           |
| CT-16 | Verificar se o sistema funciona com internet lenta             | Manual       | É necessário observar carregamento, mensagens e reação do sistema em uma situação real. |
| CT-17 | Verificar funcionamento em vários navegadores                  | Automatizado | A mesma sequência pode ser executada automaticamente no Chrome, Edge e Firefox.         |
| CT-18 | Avaliar o sistema em diferentes tamanhos de tela               | Manual       | É necessário observar cortes, sobreposição de textos, botões e facilidade de navegação. |
| CT-19 | Simular muitos usuários acessando ao mesmo tempo               | Automatizado | Um ser humano não consegue simular centenas ou milhares de acessos manualmente.         |
| CT-20 | Explorar livremente o aplicativo procurando falhas inesperadas | Manual       | O teste depende da criatividade, observação e experiência da pessoa que está testando.  |

---

# 3. Explicação dos Cenários

## CT-01 — Login com dados válidos

**Classificação: Automatizado**

Este teste será executado muitas vezes, principalmente antes de testar outras funcionalidades. A automação pode informar o usuário, a senha, clicar em entrar e verificar se a tela inicial foi apresentada.

Como o fluxo é estável e repetitivo, a automação economiza tempo.

---

## CT-02 — Login com senha incorreta

**Classificação: Automatizado**

A automação pode inserir uma senha inválida e verificar se:

* O acesso foi negado;
* A mensagem de erro foi apresentada;
* O usuário permaneceu na tela de login.

O resultado esperado é objetivo e fácil de validar automaticamente.

---

## CT-03 — Campos obrigatórios no login

**Classificação: Automatizado**

A automação pode testar rapidamente várias combinações:

* E-mail vazio;
* Senha vazia;
* E-mail e senha vazios;
* E-mail preenchido e senha vazia.

Como esses cenários são semelhantes e repetitivos, a automação é mais adequada.

---

## CT-04 — Clareza da mensagem de erro

**Classificação: Manual**

Apesar de uma automação conseguir verificar se existe uma mensagem, ela não consegue avaliar bem se o texto é claro, educado e fácil de entender.

Uma pessoa precisa analisar se a mensagem realmente ajuda o usuário a corrigir o erro.

---

## CT-05 — Bloqueio após tentativas incorretas

**Classificação: Automatizado**

O teste exige informar uma senha incorreta várias vezes e verificar se a conta ou o acesso foi temporariamente bloqueado.

Como existe repetição de passos e uma regra definida, a automação é mais indicada.

---

## CT-06 — Facilidade para encontrar o PIX

**Classificação: Manual**

O objetivo não é somente verificar se o botão PIX existe.

É necessário avaliar se:

* O botão está visível;
* O nome é fácil de entender;
* O caminho até a função é simples;
* O usuário consegue localizar a opção rapidamente.

Essa avaliação depende da percepção humana.

---

## CT-07 — PIX com saldo suficiente

**Classificação: Automatizado**

O PIX é uma das funcionalidades mais importantes do banco digital.

O teste deverá ser repetido após correções e novas versões. A automação poderá verificar:

1. O saldo inicial;
2. O valor enviado;
3. A conclusão da operação;
4. O novo saldo;
5. O registro no extrato;
6. A geração do comprovante.

Como é um cenário crítico e repetitivo, deve ser automatizado.

---

## CT-08 — PIX com saldo insuficiente

**Classificação: Automatizado**

A automação pode tentar enviar um valor maior que o saldo disponível e verificar se:

* A operação foi impedida;
* O saldo permaneceu igual;
* Uma mensagem foi apresentada;
* Nenhum registro incorreto apareceu no extrato.

Esse teste possui regras e resultados bem definidos.

---

## CT-09 — PIX duplicado por dois cliques

**Classificação: Automatizado**

Este cenário verifica se um clique repetido pode gerar duas transferências.

A automação consegue executar rapidamente dois comandos de confirmação e depois verificar quantas operações foram registradas.

Esse teste é importante porque uma duplicação pode causar perda financeira.

---

## CT-10 — Conferência dos dados antes do PIX

**Classificação: Manual**

Antes de confirmar o PIX, o usuário deve conseguir verificar:

* Nome do destinatário;
* Instituição financeira;
* Valor;
* Data;
* Chave utilizada.

O teste manual é mais adequado porque uma pessoa pode avaliar se as informações estão organizadas e visíveis.

---

## CT-11 — Atualização do saldo

**Classificação: Automatizado**

A automação poderá armazenar o saldo anterior, realizar a operação e comparar com o novo saldo.

Exemplo:

* Saldo inicial: R$ 1.000,00;
* PIX realizado: R$ 100,00;
* Saldo esperado: R$ 900,00.

Como envolve uma comparação matemática, a automação consegue realizar a validação com precisão.

---

## CT-12 — Atualização do extrato

**Classificação: Automatizado**

Após uma transferência, o sistema deve registrar:

* Tipo da movimentação;
* Valor;
* Data;
* Horário;
* Destinatário;
* Situação da operação.

Esse teste será repetido muitas vezes e possui resultados objetivos.

---

## CT-13 — Clareza do comprovante

**Classificação: Manual**

Uma pessoa deverá analisar se o comprovante:

* É fácil de ler;
* Possui informações importantes;
* Não apresenta dados desnecessários;
* Pode ser compartilhado;
* Não possui textos cortados.

A avaliação visual e de entendimento é mais adequada ao teste manual.

---

## CT-14 — Pagamento com código de barras válido

**Classificação: Automatizado**

Esse teste verifica um fluxo principal do banco.

A automação poderá inserir o código de barras, confirmar o pagamento e verificar:

* Valor;
* Beneficiário;
* Novo saldo;
* Extrato;
* Comprovante.

Como será repetido em várias versões, a automação reduz o trabalho manual.

---

## CT-15 — Código de barras inválido

**Classificação: Automatizado**

A automação poderá inserir diferentes códigos inválidos e verificar se o sistema impede o pagamento.

Também poderá confirmar se o saldo não sofreu alteração.

É um teste repetitivo e com comportamento esperado bem definido.

---

## CT-16 — Uso com internet lenta

**Classificação: Manual**

Com uma conexão lenta, é importante observar:

* Se aparece um indicador de carregamento;
* Se o botão fica bloqueado após o clique;
* Se a operação é duplicada;
* Se a mensagem de erro é clara;
* Se o usuário sabe se o pagamento foi concluído.

Esse cenário pode utilizar ferramentas técnicas, mas a observação manual ajuda a avaliar a experiência do usuário.

---

## CT-17 — Diferentes navegadores

**Classificação: Automatizado**

Os mesmos testes podem ser executados automaticamente no:

* Google Chrome;
* Microsoft Edge;
* Mozilla Firefox.

A automação permite repetir o fluxo em vários navegadores sem precisar executar todos os passos manualmente.

---

## CT-18 — Diferentes tamanhos de tela

**Classificação: Manual**

O teste deverá observar se:

* Os textos estão cortados;
* Os botões estão visíveis;
* Os campos estão alinhados;
* Existe rolagem desnecessária;
* Os elementos estão sobrepostos.

Como pequenas diferenças visuais podem passar despercebidas pela automação, o teste manual é mais adequado inicialmente.

---

## CT-19 — Muitos usuários simultâneos

**Classificação: Automatizado**

Esse é um teste de carga ou performance.

Uma ferramenta poderá simular muitos usuários:

* Fazendo login;
* Consultando saldo;
* Realizando PIX;
* Abrindo o extrato;
* Pagando contas.

Seria impossível realizar esse volume manualmente. Por isso, a automação é obrigatória para esse tipo de teste.

---

## CT-20 — Teste exploratório

**Classificação: Manual**

No teste exploratório, o QA utiliza o sistema livremente e tenta encontrar comportamentos inesperados.

Exemplos:

* Voltar de tela durante um PIX;
* Fechar o aplicativo antes da confirmação;
* Alterar o valor várias vezes;
* Tocar rapidamente em diferentes botões;
* Utilizar caracteres diferentes nos campos.

Como não existe um roteiro totalmente fixo, esse teste depende da criatividade e da observação humana.

---

# 4. Resumo por Abordagem

## Testes escolhidos para automação

* Login com dados válidos;
* Login com senha incorreta;
* Campos obrigatórios;
* Bloqueio após tentativas;
* PIX com saldo suficiente;
* PIX com saldo insuficiente;
* PIX duplicado;
* Atualização do saldo;
* Atualização do extrato;
* Pagamento de contas;
* Código de barras inválido;
* Testes em navegadores;
* Testes de carga.

Esses testes foram escolhidos porque são repetitivos, estáveis e possuem resultados esperados objetivos.

---

## Testes escolhidos para execução manual

* Clareza das mensagens;
* Facilidade para encontrar o PIX;
* Conferência visual antes da operação;
* Clareza do comprovante;
* Experiência com internet lenta;
* Responsividade;
* Testes exploratórios.

Esses testes foram escolhidos porque precisam de observação, interpretação e avaliação da experiência do usuário.

---

# 5. Conclusão

Não é correto automatizar todos os testes apenas porque a automação pode ser mais rápida.
A automação possui um custo de criação e manutenção. Se uma tela muda constantemente, o teste automatizado pode quebrar várias vezes e exigir muito trabalho para ser atualizado.

Por isso, os testes repetitivos, estáveis e com resultados objetivos devem receber prioridade para automação. No banco digital, isso inclui login, PIX, transferências, pagamentos, saldo, extrato e testes de regressão.

Os testes manuais devem ser utilizados quando o objetivo for avaliar a aparência, a facilidade de uso, a clareza das mensagens ou encontrar problemas inesperados.
A melhor estratégia para o banco digital é combinar as duas abordagens. A automação ajuda a repetir rapidamente os testes principais, enquanto os testes manuais permitem analisar a experiência real do cliente e explorar situações que não foram previstas.
