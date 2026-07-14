# Comparação entre Metodologia Ágil e Modelo Cascata

A metodologia **Ágil** e o modelo **Cascata** são formas diferentes de organizar o desenvolvimento de um software.

A principal diferença entre eles está na maneira como o projeto é dividido e em qual momento os testes são realizados.

---

## Tabela Comparativa

| Característica          | Metodologia Ágil                                               | Modelo Cascata                                              |
| ----------------------- | -------------------------------------------------------------- | ----------------------------------------------------------- |
| Forma de trabalho       | O projeto é dividido em pequenas etapas e entregas frequentes. | O projeto é dividido em etapas sequenciais.                 |
| Organização             | O trabalho acontece em ciclos curtos, como as Sprints.         | Uma etapa precisa terminar para a próxima começar.          |
| Mudanças                | Mudanças podem ser feitas durante o desenvolvimento.           | Mudanças são mais difíceis depois que o projeto já começou. |
| Participação do cliente | O cliente participa com frequência e fornece feedback.         | O cliente participa mais no início e no final do projeto.   |
| Entrega do sistema      | O sistema é entregue aos poucos.                               | O sistema normalmente é entregue completo no final.         |
| Momento dos testes      | Os testes acontecem durante todo o desenvolvimento.            | Os testes geralmente acontecem depois do desenvolvimento.   |
| Correção de defeitos    | Os defeitos podem ser encontrados e corrigidos mais cedo.      | Os defeitos podem ser descobertos apenas nas etapas finais. |
| Documentação            | Pode ser mais simples e atualizada durante o projeto.          | Costuma ser mais detalhada e criada no início.              |
| Flexibilidade           | Possui maior flexibilidade.                                    | Possui menor flexibilidade.                                 |
| Melhor utilização       | Projetos que podem sofrer mudanças.                            | Projetos com requisitos bem definidos e estáveis.           |

---

# Como os Testes Acontecem na Metodologia Ágil

Na metodologia **Ágil**, os testes acontecem durante todo o desenvolvimento do sistema.

A equipe desenvolve uma pequena funcionalidade e logo depois realiza os testes.

Por exemplo:

```text
Planejamento → Desenvolvimento → Testes → Entrega → Feedback
```

Depois do feedback, a equipe pode corrigir problemas ou melhorar a funcionalidade.

## Exemplo

Em um sistema de clínica de psicologia, a equipe pode desenvolver primeiro a tela de login.

Depois de criar a tela, o profissional de QA pode testar:

* Login com usuário correto;
* Login com senha incorreta;
* Campos obrigatórios vazios;
* Bloqueio após várias tentativas;
* Mensagens de erro;
* Funcionamento do botão de entrar.

Após os testes, a tela pode ser entregue. Depois, a equipe começa outra funcionalidade.

## Vantagens dos Testes no Ágil

* Os testes começam mais cedo;
* Os erros são encontrados rapidamente;
* O custo de correção pode ser menor;
* O QA participa desde o início;
* O cliente pode avaliar pequenas entregas;
* Mudanças podem ser testadas com mais facilidade;
* Existe comunicação frequente entre QA e desenvolvedores.

## Limitações dos Testes no Ágil

* O tempo para testar pode ser curto;
* Mudanças frequentes podem gerar retrabalho;
* A equipe precisa ter boa comunicação;
* O QA precisa acompanhar várias entregas;
* Pode ser necessário repetir muitos testes;
* A documentação pode ficar incompleta se a equipe não se organizar.

---

# Como os Testes Acontecem no Modelo Cascata

No modelo **Cascata**, o projeto segue etapas em sequência.

Normalmente, os testes acontecem depois que o desenvolvimento está concluído.

Exemplo:

```text
Requisitos
    ↓
Análise
    ↓
Planejamento
    ↓
Desenvolvimento
    ↓
Testes
    ↓
Implantação
```

O profissional de QA recebe o sistema quase pronto e verifica se ele atende aos requisitos definidos no início.

## Exemplo

No sistema da clínica de psicologia, primeiro seriam definidos todos os requisitos.

Depois, todas as telas seriam desenvolvidas, como:

* Login;
* Cadastro de pacientes;
* Agenda de consultas;
* Cadastro de psicólogos;
* Relatórios.

Somente depois do desenvolvimento dessas funcionalidades a equipe iniciaria a etapa de testes.

## Vantagens dos Testes no Cascata

* As etapas são bem definidas;
* Existe maior quantidade de documentação;
* Os requisitos podem estar detalhados;
* O QA pode criar casos de teste usando a documentação;
* O planejamento costuma ser mais fácil de acompanhar;
* Pode funcionar bem quando o sistema não sofre mudanças.

## Limitações dos Testes no Cascata

* Os testes acontecem mais tarde;
* Os defeitos podem ser descobertos apenas no final;
* A correção de erros pode ser mais cara;
* Alterações nos requisitos são mais difíceis;
* O cliente demora para visualizar o sistema;
* Um erro no início pode afetar várias etapas;
* O QA pode participar somente depois do desenvolvimento.

---

# Vantagens e Limitações

## Metodologia Ágil

### Vantagens

* Entregas rápidas;
* Maior participação do cliente;
* Facilidade para realizar mudanças;
* Testes contínuos;
* Problemas encontrados mais cedo;
* Melhor comunicação entre os profissionais.

### Limitações

* Pode ser difícil prever o prazo final;
* Mudanças constantes podem gerar retrabalho;
* Exige comunicação frequente;
* Pode haver menos documentação;
* A equipe precisa ser organizada.

---

## Modelo Cascata

### Vantagens

* Etapas organizadas;
* Documentação detalhada;
* Planejamento realizado no início;
* Fácil compreensão do processo;
* Pode ser adequado para projetos com poucas mudanças.

### Limitações

* Baixa flexibilidade;
* Testes realizados tarde;
* Erros podem ter alto custo;
* Mudanças são difíceis;
* O cliente recebe o sistema apenas no final.

---

# Resumo

| Modelo  | Como os testes acontecem                       | Principal vantagem                          | Principal limitação                             |
| ------- | ---------------------------------------------- | ------------------------------------------- | ----------------------------------------------- |
| Ágil    | Os testes acontecem durante o desenvolvimento. | Os erros são encontrados mais cedo.         | Mudanças frequentes podem gerar retrabalho.     |
| Cascata | Os testes acontecem após o desenvolvimento.    | Possui etapas e documentação bem definidas. | Os erros podem ser descobertos apenas no final. |

---

# Conclusão

Na metodologia **Ágil**, o profissional de QA participa durante o desenvolvimento e testa pequenas partes do sistema a cada entrega.

No modelo **Cascata**, o QA normalmente realiza os testes depois que o sistema já foi desenvolvido.

O modelo Ágil possui maior flexibilidade e permite encontrar erros mais cedo. Já o modelo Cascata possui etapas bem definidas, mas pode dificultar mudanças e aumentar o custo da correção de defeitos.

Para um profissional de QA, é importante conhecer os dois modelos, pois a forma de planejar e executar os testes pode mudar de acordo com o projeto.
