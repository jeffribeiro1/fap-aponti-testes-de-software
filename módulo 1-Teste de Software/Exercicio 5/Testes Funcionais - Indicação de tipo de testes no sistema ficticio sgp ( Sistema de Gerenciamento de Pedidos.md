# Atividade Avaliativa — Níveis de Testes Funcionais:

# Dado um sistema fictício, analisar suas funcionalidades e indicar:

* Quais testes seriam unitários?
* Quais testes seriam de integração?
* Quais testes seriam de sistema?
* Quais testes seriam de aceitação?
* Justificar escolhas com base no objetivo e no nível do teste




---


| Nível de Teste | Quais testes seriam realizados | Justificativa |
|---|---|---|
| **Teste Unitário** | Testar o cálculo do valor total, adicionar produto e remover produto do carrinho. | São testes de pequenas partes do sistema de forma separada. O objetivo é verificar se cada função funciona corretamente. |
| **Teste de Integração** | Testar a comunicação com o banco de dados de produtos, serviço de autenticação e serviço de pedidos. | Verifica se diferentes partes do sistema conseguem se comunicar e funcionar juntas corretamente. |
| **Teste de Sistema** | Testar cadastro, login, consulta de produtos, carrinho e finalização do pedido. | Verifica o sistema completo, simulando o uso real do usuário do início ao fim. |
| **Teste de Aceitação** | Testar se usuário sem login não consegue finalizar pedido, se o pedido possui pelo menos um item e se um pedido confirmado não pode ser alterado. | Verifica se o sistema atende às regras de negócio e ao que foi solicitado pelo cliente. |

## Resumo

- **Unitário:** testa uma pequena parte do sistema.
- **Integração:** testa a comunicação entre partes do sistema.
- **Sistema:** testa o funcionamento completo da aplicação.
- **Aceitação:** verifica se o sistema atende às necessidades e regras do negócio.

---


# Conclusão

No Sistema de Gerenciamento de Pedidos, cada nível de teste possui um objetivo diferente.

Os **testes unitários** verificam pequenas partes do código de forma isolada. Os **testes de integração** verificam a comunicação entre componentes e serviços.

Os **testes de sistema** analisam o funcionamento completo da aplicação, simulando o uso real. Já os **testes de aceitação** verificam se o sistema atende às necessidades do cliente e às regras de negócio.

A aplicação desses diferentes níveis de teste ajuda a encontrar problemas desde as funções mais simples até o funcionamento completo do sistema.
