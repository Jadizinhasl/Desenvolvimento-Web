// Função sem parametros
function imprimirNome() {
    console.log('Fulano')
}

// Função com parametros
function comparaNumero(n1, n2) {
    if (n1 === n2) { //== igual, === identico
        console.log(true)
    } else {
        console.log(false)
    }
}

console.log(imprimirNome)
imprimirNome()

console.log(comparaNumero)
comparaNumero(1, 2)