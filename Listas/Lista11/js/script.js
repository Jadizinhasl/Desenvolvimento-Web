let inputValorBruto = document.getElementById('Salario-bruto')
let inputValorLiquido = document.getElementById('Salario-liquido')
let inputTaxa = document.getElementById('Taxa-imposto')
let botao = document.getElementById('calcular')

botao.addEventListener('click', () => {
    let valorBruto = Number(inputValorBruto.value)
    let taxa = valorBruto *15 /100
    inputTaxa.value = taxa

    if (valorBruto - taxa > 0) {
        inputValorLiquido.value = valorBruto - taxa
    }
    else {
        alert('Valor liquido invalido')
    }
})
