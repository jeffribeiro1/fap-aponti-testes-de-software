# Cenários de Teste - Sistema Clínica de Psicologia  
  
## Módulo 1 - Ficha de Anamnese  
  
| ID | Cenário de Teste | Pré-condição | Passos | Resultado Esperado | Prioridade |  
|----|------------------|--------------|---------|--------------------|------------|  
| CT001 | Cadastrar uma ficha de anamnese com todos os dados válidos | Sistema aberto | Preencher todos os campos obrigatórios e clicar em **Salvar** | Ficha cadastrada com sucesso | Alta |  
| CT002 | Tentar salvar a ficha sem informar o nome do paciente | Tela de cadastro aberta | Deixar o campo **Nome** vazio e clicar em **Salvar** | Sistema informa que o nome é obrigatório | Alta |  
| CT003 | Informar CPF inválido | Tela de cadastro aberta | Digitar um CPF inválido | Sistema exibe mensagem de CPF inválido | Alta |  
| CT004 | Informar e-mail inválido | Tela de cadastro aberta | Digitar `testegmail.com` | Sistema solicita um e-mail válido | Média |  
| CT005 | Informar data de nascimento futura | Tela de cadastro aberta | Inserir uma data maior que a atual | Sistema não permite salvar | Alta |  
| CT006 | Selecionar "Sim" em "Já fez terapia antes?" | Tela de cadastro aberta | Marcar a opção **Sim** | Campo "Por quanto tempo" é exibido | Média |  
| CT007 | Selecionar "Não" em "Já fez terapia antes?" | Tela de cadastro aberta | Marcar a opção **Não** | Campo "Por quanto tempo" permanece oculto ou desabilitado | Média |  
| CT008 | Salvar ficha apenas com os campos obrigatórios | Tela de cadastro aberta | Preencher somente os campos obrigatórios | Cadastro realizado com sucesso | Baixa |  
| CT009 | Informar telefone contendo letras | Tela de cadastro aberta | Digitar `ABC123456` | Sistema rejeita o valor informado | Média |  
| CT010 | Validar cálculo automático da idade | Tela de cadastro aberta | Informar a data de nascimento | Sistema calcula corretamente a idade | Alta |  
  
---  
  
# Módulo 2 - Agenda de Atendimentos  
  
| ID | Cenário de Teste | Pré-condição | Passos | Resultado Esperado | Prioridade |  
|----|------------------|--------------|---------|--------------------|------------|  
| CT011 | Agendar um atendimento válido | Paciente cadastrado | Informar data, hora, profissional e salvar | Atendimento agendado com sucesso | Alta |  
| CT012 | Agendar dois atendimentos no mesmo horário para o mesmo profissional | Existe um atendimento cadastrado | Tentar cadastrar outro atendimento no mesmo horário | Sistema informa conflito de agenda | Alta |  
| CT013 | Alterar status para Confirmado | Atendimento agendado | Alterar status | Status atualizado corretamente | Alta |  
| CT014 | Alterar status para Realizado | Atendimento confirmado | Alterar status | Atendimento marcado como realizado | Alta |  
| CT015 | Cancelar atendimento | Atendimento existente | Alterar status para Cancelado | Atendimento cancelado | Média |  
| CT016 | Agendar atendimento em data passada | Tela de agendamento aberta | Selecionar uma data anterior à atual | Sistema impede o cadastro | Alta |  
| CT017 | Inserir observações no atendimento | Atendimento existente | Informar observações e salvar | Observações gravadas com sucesso | Baixa |  
  
---  
  
# Módulo 3 - Controle Financeiro  
  
## Receitas  
  
| ID | Cenário de Teste | Pré-condição | Passos | Resultado Esperado | Prioridade |  
|----|------------------|--------------|---------|--------------------|------------|  
| CT018 | Registrar receita de uma sessão | Paciente cadastrado | Informar os dados da receita | Receita cadastrada com sucesso | Alta |  
| CT019 | Registrar pagamento via Pix | Tela de receita aberta | Selecionar Pix como forma de pagamento | Receita salva corretamente | Média |  
| CT020 | Alterar status para Pago | Receita cadastrada | Atualizar status | Status alterado com sucesso | Média |  
| CT021 | Informar valor negativo | Tela de receita aberta | Digitar `-100` | Sistema impede o cadastro | Alta |  
| CT022 | Deixar o valor vazio | Tela de receita aberta | Não preencher o campo Valor | Sistema informa campo obrigatório | Alta |  
  
## Despesas  
  
| ID | Cenário de Teste | Pré-condição | Passos | Resultado Esperado | Prioridade |  
|----|------------------|--------------|---------|--------------------|------------|  
| CT023 | Registrar despesa de aluguel | Tela de despesas aberta | Informar todos os dados | Despesa cadastrada | Alta |  
| CT024 | Registrar despesa sem categoria | Tela de despesas aberta | Não selecionar categoria | Sistema solicita o preenchimento | Média |  
  
## Resumo Mensal  
  
| ID | Cenário de Teste | Pré-condição | Passos | Resultado Esperado | Prioridade |  
|----|------------------|--------------|---------|--------------------|------------|  
| CT025 | Calcular total de receitas | Existem receitas cadastradas | Abrir resumo mensal | Total de receitas exibido corretamente | Alta |  
| CT026 | Calcular total de despesas | Existem despesas cadastradas | Abrir resumo mensal | Total de despesas exibido corretamente | Alta |  
| CT027 | Calcular lucro líquido | Existem receitas e despesas cadastradas | Abrir resumo mensal | Lucro líquido calculado corretamente | Alta |  
  
---  
  
# Módulo 4 - Controle de Estoque  
  
| ID | Cenário de Teste | Pré-condição | Passos | Resultado Esperado | Prioridade |  
|----|------------------|--------------|---------|--------------------|------------|  
| CT028 | Cadastrar novo produto | Tela de estoque aberta | Informar todos os dados do produto | Produto cadastrado | Alta |  
| CT029 | Atualizar quantidade do estoque | Produto cadastrado | Alterar quantidade atual | Estoque atualizado | Alta |  
| CT030 | Informar quantidade negativa | Produto existente | Digitar quantidade negativa | Sistema impede o cadastro | Alta |  
| CT031 | Verificar alerta de estoque mínimo | Produto abaixo do mínimo | Consultar estoque | Sistema exibe alerta de estoque baixo | Alta |  
| CT032 | Cadastrar produto sem nome | Tela de cadastro aberta | Deixar o campo Nome vazio | Sistema informa campo obrigatório | Média |  
| CT033 | Informar fornecedor do produto | Produto cadastrado | Inserir fornecedor e salvar | Informação salva corretamente | Baixa |  
  
---  
  
# Casos de Teste de Validação  
  
| ID | Cenário | Resultado Esperado |  
|----|----------|--------------------|  
| CT034 | Validar campos obrigatórios | Sistema impede salvar registros incompletos |  
| CT035 | Validar campos numéricos | Sistema aceita apenas números |  
| CT036 | Validar formato de e-mail | Sistema aceita apenas e-mails válidos |  
| CT037 | Validar datas futuras | Sistema bloqueia datas inválidas |  
| CT038 | Validar mensagens de erro | Mensagens claras e objetivas para o usuário |  
| CT039 | Validar persistência dos dados | Dados permanecem salvos após consulta |  
| CT040 | Validar edição dos registros | Alterações são gravadas corretamente |  
  
---  
  
# Critérios de Aceitação  
  
- Todos os campos obrigatórios devem ser validados.  
- O CPF deve possuir formato válido.  
- O e-mail deve possuir formato válido.  
- O telefone deve aceitar apenas números.  
- A idade deve ser calculada automaticamente a partir da data de nascimento.  
- Não deve ser permitido agendar dois atendimentos para o mesmo profissional no mesmo horário.  
- O resumo financeiro deve calcular corretamente receitas, despesas e lucro líquido.  
- O sistema deve alertar quando um produto atingir a quantidade mínima em estoque.  
- Todos os dados cadastrados devem ser armazenados e recuperados corretamente.  
  
---  
  
## Resumo  
  
- **Total de cenários de teste:** 40  
- **Fluxos Positivos:** Cadastro, consulta, edição e cálculo.  
- **Fluxos Negativos:** Campos obrigatórios, formatos inválidos e valores incorretos.  
- **Validações:** Regras de negócio, integridade dos dados e consistência das informações.
