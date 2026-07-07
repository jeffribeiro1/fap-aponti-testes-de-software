# Ciclo de Testes - Sistema Clínica de Psicologia

## Informações do Ciclo

| Campo | Descrição |
|--------|-----------|
| Nome do Ciclo | Ciclo 01 - Testes Funcionais |
| Sistema | Clínica de Psicologia |
| Objetivo | Validar as principais funcionalidades do sistema antes da entrega ao cliente. |
| Responsável | Jefferson Ribeiro |
| Ambiente | Homologação |
| Versão | 1.0 |
| Início | 07/07/2026 |
| Término | 10/07/2026 |
| Status | Em andamento |

---

# Escopo do Ciclo

Durante este ciclo serão testados os seguintes módulos:

- Ficha de Anamnese
- Agenda de Atendimentos
- Controle Financeiro
- Controle de Estoque

---

# Casos de Teste Executados

| ID | Caso de Teste | Prioridade | Status | Evidência |
|----|---------------|------------|--------|-----------|
| CT001 | Cadastrar ficha de anamnese válida | Alta | ✅ Aprovado | Cadastro realizado com sucesso |
| CT002 | Salvar ficha sem nome | Alta | ✅ Aprovado | Mensagem de campo obrigatório exibida |
| CT003 | Validar CPF inválido | Alta | ✅ Aprovado | CPF rejeitado |
| CT004 | Validar e-mail inválido | Média | ✅ Aprovado | Mensagem de erro exibida |
| CT005 | Data de nascimento futura | Alta | ✅ Aprovado | Cadastro bloqueado |
| CT011 | Agendar atendimento | Alta | ✅ Aprovado | Agendamento realizado |
| CT012 | Conflito de horário | Alta | ❌ Reprovado | Sistema permitiu dois atendimentos no mesmo horário |
| CT018 | Registrar receita | Alta | ✅ Aprovado | Receita cadastrada |
| CT021 | Valor negativo | Alta | ✅ Aprovado | Cadastro bloqueado |
| CT028 | Cadastrar produto | Alta | ✅ Aprovado | Produto salvo |
| CT031 | Alerta de estoque mínimo | Alta | ⚠️ Bloqueado | Funcionalidade ainda não implementada |

---

# Defeitos Encontrados

| Bug | Descrição | Severidade | Prioridade | Status |
|-----|-----------|------------|------------|--------|
| BUG-001 | Sistema permite agendar dois pacientes para o mesmo horário com o mesmo profissional. | Alta | Alta | Aberto |
| BUG-002 | Alerta de estoque mínimo não é exibido quando a quantidade fica abaixo do mínimo. | Média | Média | Aberto |

---

# Métricas do Ciclo

| Indicador | Valor |
|-----------|-------|
| Total de Casos de Teste | 11 |
| Executados | 11 |
| Aprovados | 9 |
| Reprovados | 1 |
| Bloqueados | 1 |
| Taxa de Sucesso | 81,8% |
| Bugs Encontrados | 2 |

---

# Critérios de Entrada

- Ambiente de homologação disponível.
- Sistema implantado.
- Banco de dados configurado.
- Usuários de teste cadastrados.

---

# Critérios de Saída

O ciclo será considerado concluído quando:

- Todos os casos de teste forem executados.
- Bugs críticos forem corrigidos.
- Taxa de aprovação superior a 95%.
- Não existirem defeitos críticos em aberto.

---

# Conclusão

Durante o **Ciclo 01**, foram executados **11 casos de teste** referentes às funcionalidades principais do sistema da Clínica de Psicologia.

Dos testes realizados:

- ✅ 9 foram aprovados.
- ❌ 1 foi reprovado.
- ⚠️ 1 permaneceu bloqueado.

Foram identificados **2 defeitos**, sendo um de alta prioridade relacionado ao agendamento de atendimentos e outro referente ao controle de estoque.

Após a correção dos defeitos encontrados, recomenda-se realizar um **teste de regressão** para garantir que as funcionalidades corrigidas não impactaram outras partes do sistema antes da liberação da versão.
