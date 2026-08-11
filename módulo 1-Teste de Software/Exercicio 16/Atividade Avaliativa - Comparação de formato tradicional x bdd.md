# Atividade Avaliativa — Cenário BDD x Tradicional

## Comparar o mesmo comportamento do sistema usando duas abordagens diferentes.
Criar um cenário BDD e um cenário Tradicional e responder:

* Qual o formato mais fácil de escrever?
* Qual comunica melhor o comportamento?
* Qual seria mais fácil de manter?

## 1. Cenário BDD

```gherkin
  Feature: Acesso ao módulo Salas
  Scenario: Administrador acessa o módulo Salas
  Given que o administrador está na tela de login
  When ele informa suas credenciais válidas e acessa o módulo "Salas"
  Then o sistema deve apresentar a tela de gerenciamento de salas
```

## 2. Cenário Tradicional

**ID:** CT-SALA-001

**Título:** Administrador acessa o módulo Salas

### Pré-condições

* O sistema está disponível.
* O usuário possui credenciais válidas de Administrador.
* O usuário está na tela de login.

### Passos

1. Acessar a tela de login.
2. Informar o usuário do Administrador.
3. Informar a senha válida.
4. Clicar no botão **Entrar**.
5. Acessar o módulo **Salas**.

### Resultado esperado

O sistema deve permitir o login do Administrador e apresentar a tela de gerenciamento do módulo **Salas**.

---

## 3. Comparação entre as abordagens

| Pergunta                                   | Resposta                                                                                                                            |
| ------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------- |
| **Qual formato é mais fácil de escrever?** | **Tradicional**, porque utiliza uma estrutura simples com pré-condições, passos e resultado esperado.                               |
| **Qual comunica melhor o comportamento?**  | **BDD**, porque deixa mais claro o comportamento esperado do sistema usando Given, When e Then.                                     |
| **Qual seria mais fácil de manter?**       | **BDD**, principalmente quando existem muitos cenários e diferentes comportamentos, pois a estrutura é mais objetiva e padronizada. |

---

## 4. Justificativa

Para este teste, considero o formato **Tradicional mais fácil de escrever**, porque estou acostumado a descrever os testes utilizando pré-condições, passos e resultado esperado.

Porém, o **BDD comunica melhor o comportamento do sistema**, pois apresenta de forma simples a condição inicial, a ação realizada e o resultado esperado.

Para manutenção, considero o **BDD mais fácil**, pois os cenários ficam mais objetivos e podem ser compreendidos tanto pela equipe de QA quanto pelos desenvolvedores e outras pessoas envolvidas no projeto.

---

## 5. Conclusão

Para o projeto **Clínica Psi**, a abordagem escolhida é o **BDD**.
O BDD é mais adequado quando queremos destacar o **comportamento do sistema**, especialmente em funcionalidades como login, permissões e acesso aos módulos.
O formato tradicional continua sendo muito útil para a execução detalhada dos testes e para o registro dos casos de teste em ferramentas como o Jira.
