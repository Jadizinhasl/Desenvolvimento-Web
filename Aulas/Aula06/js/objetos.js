// Objetos literais em Javascript

// var pessoa = ['Fulano', 10, 'Rua XPTO', 30, 'Analista', 'Maria']
// var pessoa2 = new Object()

var pessoa = {
    nome: 'Fulano',
    idade: 30,
    endereco: 'Rua XPTO',
    numeroCasa: 30,
    cargo: 'Analista',
    conjuge: 'Maria',
    ehMaiorIdade: true,
    telefone: ["11934545454", "1133445363", "53253254332"],
    filhos: [
        {
            nome: "Joaozinho",
            idade: 10
        },
        {
            nome: "Luizinha",
            idade: 5
        }
    ]
}

console.log(pessoa)