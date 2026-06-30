
```python
def cadastrar_aluno(alunos):
    nome = input("Nome do aluno: ")
    idade = int(input("Idade: "))
    curso = input("Curso: ")

    aluno = {
        "nome": nome,
        "idade": idade,
        "curso": curso
    }

    alunos.append(aluno)
    print("\nAluno cadastrado com sucesso!\n")


def listar_alunos(alunos):
    if not alunos:
        print("\nNenhum aluno cadastrado.\n")
        return

    print("\n===== LISTA DE ALUNOS =====")

    for indice, aluno in enumerate(alunos, start=1):
        print(f"{indice}. {aluno['nome']}")
        print(f"   Idade : {aluno['idade']}")
        print(f"   Curso : {aluno['curso']}")
        print("-" * 30)


def buscar_aluno(alunos):
    nome = input("Digite o nome do aluno: ")

    encontrado = False

    for aluno in alunos:
        if aluno["nome"].lower() == nome.lower():
            print("\nAluno encontrado!")
            print(f"Nome : {aluno['nome']}")
            print(f"Idade: {aluno['idade']}")
            print(f"Curso: {aluno['curso']}")
            encontrado = True
            break

    if not encontrado:
        print("\nAluno não encontrado.")


def menu():
    alunos = []

    while True:
        print("\n========== MENU ==========")
        print("1 - Cadastrar aluno")
        print("2 - Listar alunos")
        print("3 - Buscar aluno")
        print("4 - Sair")

        opcao = input("Escolha uma opção: ")

        if opcao == "1":
            cadastrar_aluno(alunos)

        elif opcao == "2":
            listar_alunos(alunos)

        elif opcao == "3":
            buscar_aluno(alunos)

        elif opcao == "4":
            print("\nPrograma encerrado.")
            break

        else:
            print("\nOpção inválida!")


if __name__ == "__main__":
    m
