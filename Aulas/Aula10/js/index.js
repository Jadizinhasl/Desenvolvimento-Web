// Import pelo node, passando a referencia de produto.js p let produto:
let produto = require('./produto.js')

produto.criar('bolo de morangu', 1, 'best')
produto.criar('bolo de cenoura', 2, 'bom demais')

let produtos = produto.buscar()

console.log(produtos)