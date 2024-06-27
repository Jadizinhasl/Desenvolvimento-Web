let produtos = []

let buscar = () => {
    return produtos
}

let criar = (nome, valor, descricao) => {
    produtos.push(
        {
            nome: nome,
            valor: valor,
            descricao: descricao
        }
    )
}

//semelhante ao default, mas p/ Node
module.exports = {
    buscar,
    criar
}