import Cliente from "./Cliente"

export default interface ClienteRepositorio {
    salvar(cliente: Cliente): Promise<Cliente>
    Excluir(cliente: Cliente): Promise<void>
    obterTodos(): Promise<Cliente[]>
}
