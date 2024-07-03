let inputValorBruto = document.getElementById('valor-bruto')
let inputValorLiquido = document.getElementById('valor-liquido')
let inputTaxa = document.getElementById('valor-taxa')
let botao = document.getElementById('btn-calcular')

// inputValorBruto.addEventListener('blur', () => {
// })

botao.addEventListener('click', () => {
    let valorBruto = Number(inputValorBruto.value)
    let taxa = Number(inputTaxa.value)

    if (valorBruto - taxa > 0) {
        inputValorLiquido.value = valorBruto - taxa
    }
    else {
        alert('Valor liquido invalido')
    }
})

