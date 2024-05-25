// Arrays/Listas/Vetores
// Arrays se assemelham com bancos de dados
// Um array deve ser capaz de: Adicionar, Remover, Buscar/Listar Atualizar

// var nome = 'Fulano' // variavel simples
var nomes = ['Miguel', 'Mateus', 'Monica'] //variavel composta (array)
// var idades = new Array()

console.log(nomes)
// console.log(idades)
// console.log(nomes[0]) // Acessa posição 0 - Miguel
// console.log(nomes[1]) // Acessa posição 1 - Mateus
// console.log(nomes[2]) // Acessa posição 2 - Monica

nomes.push('Davi', 'Fulano', 'Ciclano') // Adiciona elemento no array
console.log(nomes)

console.log(nomes.length) // Tamanho do array

nomes.pop() // por padrão remove o ultimo elemento do array 
console.log(nomes)

nomes.reverse() // inverte meu array
console.log(nomes)

nomes.shift() // por padrão remove o primeiro elemento do array
console.log(nomes)

nomes.sort() // ordena o array
console.log(nomes)

nomes.push('Fulano')
console.log(nomes)

var posicaoFulano = nomes.indexOf('Fulano') // Busca por indice o elemento do parametro

nomes[posicaoFulano] = 'Ciclano'
console.log(nomes)

nomes.splice(posicaoFulano, 1) // primeiro parametro é a posicao do item a ser removido, o segundo parametro é a quantidade de elemento excluidos
console.log(nomes)

var array = [true, 'teste', 10, NaN, undefined, , , , , 'teste2']

console.log(array[1000])