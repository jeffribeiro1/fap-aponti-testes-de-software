# 📝 Atividade Avaliativa:

Dado um sistema proposto, elaborar um checklist de testes não funcionais, cobrindo obrigatoriamente:

* Performance  
* Segurança
* Usabilidade
* Compatibilidade
Cada item do checklist deve indicar o que será verificado e qual o risco associado

===

#  Checklist de Testes Não Funcionais

## Sistema: PACO – Plataforma de Agendamento de Consultas

O **PACO** é uma plataforma web para agendamento de consultas médicas.  
Pelo sistema, o usuário pode fazer cadastro, login, consultar profissionais disponíveis, agendar e cancelar consultas.

O sistema também possui uma área administrativa para gerenciamento dos horários.

Com base nas características apresentadas, foi criado o seguinte checklist de **testes não funcionais**, dividido em:

- Performance
- Segurança
- Usabilidade
- Compatibilidade

---

# 1. Checklist de Performance

Os testes de **performance** servem para verificar se o sistema continua funcionando corretamente mesmo quando existem vários usuários utilizando a plataforma.

| Checklist | O que será verificado | Risco associado |
|---|---|---|
| [X] Tempo de carregamento | Verificar se as páginas carregam rapidamente. | O usuário pode desistir de utilizar o sistema por causa da demora. |
| [X] Login com vários usuários | Verificar se vários usuários conseguem fazer login ao mesmo tempo. | O sistema pode ficar lento ou apresentar erros em horários de pico. |
| [X] Agendamentos simultâneos | Verificar se vários usuários conseguem realizar agendamentos ao mesmo tempo. | O sistema pode travar ou registrar informações incorretas. |
| [X] Consulta de horários | Verificar se a lista de horários disponíveis é carregada rapidamente. | O usuário pode receber informações atrasadas sobre os horários disponíveis. |
| [X] Horários de pico | Simular muitos usuários acessando o sistema ao mesmo tempo. | O sistema pode ficar indisponível ou muito lento. |
| [X] Área administrativa | Verificar se o administrador consegue acessar e gerenciar horários sem lentidão. | O administrador pode ter dificuldades para gerenciar os atendimentos. |

---

# 2. Checklist de Segurança

Os testes de **segurança** verificam se os dados dos usuários estão protegidos e se pessoas não autorizadas conseguem acessar partes restritas do sistema.

| Checklist | O que será verificado | Risco associado |
|---|---|---|
| [X] Login obrigatório | Verificar se apenas usuários autenticados conseguem realizar agendamentos. | Uma pessoa não autorizada pode realizar agendamentos. |
| [X] Senha protegida | Verificar se a senha do usuário não fica visível ou exposta no sistema. | A senha pode ser descoberta por outras pessoas. |
| [X] Área administrativa protegida | Verificar se usuários comuns não conseguem acessar a área do administrador. | Usuários podem alterar ou excluir informações sem autorização. |
| [X]Proteção dos dados pessoais | Verificar se dados pessoais dos pacientes não ficam disponíveis para outros usuários. | Pode ocorrer vazamento de informações pessoais. |
| [X]Encerramento da sessão | Verificar se após sair da conta o usuário não consegue continuar acessando páginas protegidas. | Outra pessoa pode acessar informações do usuário. |
| [X]Acesso direto por URL | Tentar acessar páginas restritas sem fazer login. | Pessoas não autorizadas podem acessar funcionalidades internas. |
| [X] Dados enviados pelo sistema | Verificar se informações importantes são transmitidas de forma segura. | Dados pessoais podem ser interceptados. |
| [X] Entrada de dados inválidos | Inserir caracteres e informações inesperadas nos campos. | Entradas maliciosas podem causar erros ou comprometer o sistema. |

---

# 3. Checklist de Usabilidade

Os testes de **usabilidade** verificam se o sistema é fácil de entender e utilizar.

| Checklist | O que será verificado | Risco associado |
|---|---|---|
| [X] Facilidade para realizar cadastro | Verificar se o usuário consegue entender facilmente como realizar seu cadastro. | O usuário pode abandonar o cadastro por dificuldade. |
| [X] Facilidade para fazer login | Verificar se os campos de usuário/e-mail e senha são claros. | O usuário pode ter dificuldades para entrar no sistema. |
| [X] Agendamento simples | Verificar se o processo para escolher especialidade, profissional e horário é fácil. | O usuário pode selecionar informações incorretas ou desistir do agendamento. |
| [X] Cancelamento da consulta | Verificar se o usuário encontra facilmente a opção de cancelar. | O usuário pode não conseguir cancelar uma consulta dentro do prazo. |
| [X] Regra das 24 horas | Verificar se o sistema informa claramente que o cancelamento deve ocorrer até 24 horas antes. | O usuário pode tentar cancelar fora do prazo por não conhecer a regra. |
| [X] Mensagens de confirmação | Verificar se o sistema informa quando uma consulta foi agendada ou cancelada. | O usuário pode ficar sem saber se a operação foi concluída. |
| [X]Mensagens de erro | Verificar se mensagens de erro são simples e fáceis de entender. | O usuário pode não saber como corrigir o problema. |
| [X] Navegação pelo sistema | Verificar se menus e botões são fáceis de encontrar. | O usuário pode ficar perdido durante a utilização. |
| [X] Visualização das informações | Verificar se textos, botões e horários estão bem organizados. | Informações importantes podem passar despercebidas. |

---

# 4. Checklist de Compatibilidade

Os testes de **compatibilidade** verificam se a plataforma funciona corretamente em diferentes dispositivos, navegadores e tamanhos de tela.

| Checklist | O que será verificado | Risco associado |
|---|---|---|
| [X] Google Chrome | Verificar se todas as funcionalidades funcionam corretamente no Chrome. | Alguns usuários podem não conseguir utilizar partes do sistema. |
| [X] Microsoft Edge | Verificar o funcionamento do sistema no Edge. | Funcionalidades podem apresentar comportamentos diferentes. |
| [X] Mozilla Firefox | Verificar o funcionamento da plataforma no Firefox. | Botões, formulários ou páginas podem apresentar erros. |
| [X] Desktop e notebook | Verificar se o sistema funciona corretamente em computadores. | Elementos da tela podem aparecer desorganizados. |
| [X] Tablet | Verificar se o layout se adapta ao tamanho de tela de tablets. | Informações ou botões podem ficar fora da tela. |
| [X] Smartphone | Verificar se o sistema funciona corretamente em celulares. | O usuário pode ter dificuldades para realizar agendamentos pelo celular. |
| [X] Diferentes tamanhos de tela | Diminuir e aumentar a tela para verificar o comportamento do layout. | Textos e elementos podem ficar sobrepostos. |
| [X] Orientação da tela | Testar o celular ou tablet na posição vertical e horizontal. | Parte do conteúdo pode ficar cortada ou desorganizada. |

---

# Resumo dos Principais Riscos

| Tipo de teste | Principal risco |
|---|---|
| **Performance** | Lentidão ou indisponibilidade quando muitos usuários acessarem o sistema. |
| **Segurança** | Acesso não autorizado ou vazamento de dados pessoais. |
| **Usabilidade** | Dificuldade do usuário para utilizar as funcionalidades da plataforma. |
| **Compatibilidade** | Sistema não funcionar corretamente em determinados dispositivos ou navegadores. |

---

# Conclusão

Os **testes não funcionais** são importantes porque não verificam apenas **se uma funcionalidade funciona**, mas também **como o sistema funciona**.

No caso do **PACO**, é importante garantir que a plataforma seja:

- Rápida;
- Segura;
- Fácil de utilizar;
- Compatível com diferentes dispositivos e navegadores.

Como o sistema trabalha com **agendamentos e dados pessoais**, problemas nessas áreas podem prejudicar tanto os usuários quanto a administração da plataforma.
