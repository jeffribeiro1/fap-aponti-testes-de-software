# Atividade Avaliativa -  Heurísticas de Testes 


## Aplique heurísticas de testes no seu projeto para identificar riscos

## Escolha duas heuristicas + Nielsen ou Testing Tours

## Aplique a uma funcionalidade

Liste:

* Falhas

* Riscos identificados

* Áreas que merecem mais atenção

* Justifique suas escolhas


---

## 1. Funcionalidade escolhida

A funcionalidade escolhida foi o **Login do sistema Psicocare**.

O login é uma funcionalidade importante porque permite que o usuário tenha acesso ao sistema de acordo com suas credenciais e seu perfil, como Administrador, Psicólogo, Recepcionista ou Paciente.

---

## 2. Heurísticas escolhidas

### Heurística 1 — Análise de Valor Limite

A Análise de Valor Limite consiste em testar valores que estão próximos dos limites aceitos pelo sistema, pois muitos erros acontecem justamente nesses pontos.

No login, podemos verificar, por exemplo:

* Campo de usuário vazio;
* Campo de senha vazio;
* Senha com poucos caracteres;
* Senha no limite mínimo permitido;
* Senha acima do limite permitido;
* Tentativas de login próximas do limite de tentativas.

### Heurística 2 — Particionamento de Equivalência

O Particionamento de Equivalência divide os dados de entrada em grupos que devem apresentar comportamentos semelhantes.

Para o login, podemos separar:

* Credenciais válidas;
* Usuário válido e senha inválida;
* Usuário inválido e senha válida;
* Usuário e senha inválidos;
* Campos vazios;
* Dados com formato incorreto.

---

## 3. Nielsen utilizada como apoio

Também foi utilizada a heurística de Nielsen **"Visibilidade do status do sistema"**.

Essa heurística verifica se o sistema informa claramente ao usuário o que está acontecendo após uma ação.

No login, por exemplo, o sistema deve informar quando:

* As credenciais estão corretas;
* As credenciais estão incorretas;
* O login foi bloqueado após várias tentativas;
* Algum campo obrigatório não foi preenchido.

---

## 4. Falhas que podem ser encontradas

Durante a aplicação das heurísticas, algumas possíveis falhas identificadas foram:

1. O sistema permitir login com os campos de usuário ou senha vazios.

2. O sistema apresentar uma mensagem muito genérica quando o login falhar.

3. O sistema não informar claramente quando o usuário atingir o limite de tentativas.

4. O sistema aceitar valores fora do limite definido para os campos.

5. O sistema não informar ao usuário que o acesso foi bloqueado após três tentativas incorretas.

6. O sistema permitir o envio do formulário mesmo quando existem campos obrigatórios vazios.

7. O sistema apresentar mensagens diferentes ou pouco claras para situações semelhantes.

---

## 5. Riscos identificados

Os principais riscos encontrados foram:

### Risco 1 — Acesso indevido

Caso o sistema não valide corretamente usuário e senha, uma pessoa não autorizada poderia conseguir acesso ao sistema.

### Risco 2 — Bloqueio não funcionar corretamente

Se o limite de três tentativas não for aplicado corretamente, um usuário poderia realizar várias tentativas de login, aumentando o risco de ataques por tentativa e erro.

### Risco 3 — Má experiência do usuário

Mensagens de erro pouco claras podem fazer com que o usuário não saiba como corrigir o problema.

### Risco 4 — Falhas de validação

Caso os limites dos campos não sejam respeitados, podem ocorrer erros no processamento das informações.

### Risco 5 — Falta de feedback

Se o sistema não informar corretamente o resultado da tentativa de login, o usuário pode pensar que o sistema não respondeu ou está com problemas.

---

## 6. Áreas que merecem mais atenção

As áreas que merecem maior atenção durante os testes são:

* Validação do usuário;
* Validação da senha;
* Campos obrigatórios;
* Limites de caracteres;
* Mensagens de erro;
* Limite de três tentativas de login;
* Bloqueio do usuário;
* Comportamento após uma tentativa inválida;
* Comportamento após uma tentativa válida;
* Segurança das mensagens apresentadas ao usuário.

---

## 7. Justificativa das escolhas

Escolhi a **Análise de Valor Limite** porque os campos de login possuem regras de validação e limites que podem apresentar erros principalmente quando o usuário informa valores próximos do mínimo ou máximo permitido.

Também escolhi o **Particionamento de Equivalência** porque é possível dividir facilmente as entradas do login em grupos válidos e inválidos. Dessa forma, não é necessário testar todas as possibilidades, podendo selecionar casos representativos de cada grupo.

A heurística de Nielsen sobre **Visibilidade do status do sistema** foi utilizada porque o usuário precisa receber um retorno claro após tentar realizar o login. Isso é importante principalmente nos casos de erro, bloqueio e preenchimento incorreto dos campos.

Essas escolhas são adequadas porque o login é uma funcionalidade crítica do Psicocare. Uma falha nessa área pode causar problemas de segurança, impedir o acesso de usuários legítimos ou prejudicar a experiência do usuário.

## 8. Conclusão

A aplicação das heurísticas mostrou que a funcionalidade de login deve receber uma atenção maior durante os testes. A combinação de **Análise de Valor Limite**, **Particionamento de Equivalência** e uma **heurística de Nielsen** permite verificar tanto as regras de entrada quanto o comportamento do sistema e as mensagens apresentadas ao usuário.

Como QA, essas técnicas ajudam a encontrar possíveis falhas antes que elas cheguem ao usuário final e permitem priorizar os pontos que apresentam maior risco para o sistema.
