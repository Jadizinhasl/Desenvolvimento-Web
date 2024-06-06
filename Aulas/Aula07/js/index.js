var bancoDeDados = [
    {
        nome: "Bolu de murangu",
        descricao: "Melhor bolo do mundo",
        preco: 10000,
        imagem: "https://via.placeholder.com/150"
    },
    {
        nome: "Bolo de chocolate",
        descricao: "Bolo tooooop",
        preco: 100,
        imagem: "https://via.placeholder.com/150"
    },
    {
        nome: "Bolo de chocolate",
        descricao: "Bolo tooooop",
        preco: 100,
        imagem: "https://via.placeholder.com/150"
    },
    {
        nome: "Bolo de chocolate",
        descricao: "Bolo tooooop",
        preco: 100,
        imagem: "https://via.placeholder.com/150"
    },
    {
        nome: "Bolo de chocolate",
        descricao: "Bolo tooooop",
        preco: 100,
        imagem: "https://via.placeholder.com/150"
    },
    {
        nome: "Bolo de chocolate",
        descricao: "Bolo tooooop",
        preco: 100,
        imagem: "https://via.placeholder.com/150"
    },
    {
        nome: "Bolo de chocolate",
        descricao: "Bolo tooooop",
        preco: 100,
        imagem: "https://via.placeholder.com/150"
    },
    {
        nome: "Bolo de chocolate",
        descricao: "Bolo tooooop",
        preco: 100,
        imagem: "https://via.placeholder.com/150"
    },
    {
        nome: "Bolo de cenoura com chocolate",
        descricao: "Hmmmmm bolinho de cenoura",
        preco: 200,
        imagem: "https://via.placeholder.com/150"
    },
    {
        nome: "Bolo de cenoura com chocolate",
        descricao: "Hmmmmm bolinho de cenoura",
        preco: 200,
        imagem: "https://via.placeholder.com/150"
    },
    {
        nome: "Bolo de cenoura com chocolate",
        descricao: "Hmmmmm bolinho de cenoura",
        preco: 200,
        imagem: "https://via.placeholder.com/150"
    },
    {
        nome: "Bolo de cenoura com chocolate",
        descricao: "Hmmmmm bolinho de cenoura",
        preco: 200,
        imagem: "https://via.placeholder.com/150"
    },
    {
        nome: "Bolo de cenoura com chocolate",
        descricao: "Hmmmmm bolinho de cenoura",
        preco: 200,
        imagem: "https://via.placeholder.com/150"
    },
    {
        nome: "Bolo de cenoura com chocolate",
        descricao: "Hmmmmm bolinho de cenoura",
        preco: 200,
        imagem: "https://via.placeholder.com/150"
    }
]

var conteudoPrincipal = document.getElementById('conteudo-principal')

for (var produto of bancoDeDados) {

    var conteudoProduto = document.createElement('div')
    conteudoProduto.className = "conteudo-produto"

    var imagem = document.createElement('img')
    imagem.src = produto.imagem
    conteudoProduto.appendChild(imagem)

    var nomeProduto = document.createElement('h2')
    nomeProduto.textContent = produto.nome
    conteudoProduto.appendChild(nomeProduto)

    var descricaoProduto = document.createElement('p')
    descricaoProduto.textContent = produto.descricao
    conteudoProduto.appendChild(descricaoProduto)

    var precoProduto = document.createElement('p')
    precoProduto.textContent = `R$ ${produto.preco}`
    conteudoProduto.appendChild(precoProduto)

    var botoes = document.createElement('div')
    botoes.className = "btn"
    conteudoProduto.appendChild(botoes)

    var botaoComprar = document.createElement('button')
    botaoComprar.textContent = "Comprar"
    botoes.appendChild(botaoComprar)

    var botaoDetalhes = document.createElement('button')
    botaoDetalhes.textContent = "Detalhes"
    botoes.appendChild(botaoDetalhes)

    conteudoProduto.appendChild(botoes)
    conteudoPrincipal.appendChild(conteudoProduto)
}