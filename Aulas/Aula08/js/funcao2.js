var numero1 = document.getElementById('n1')
var numero2 = document.getElementById('n2')

function comparaValores() {
    
    if (Number(numero1.value) === Number(numero2.value)) {
        console.log(true)
    } else {
        console.log(false)
    }
}

// -------------- //

function Somar() {
    // converter pra Number se n concatena String
    var resultado = Number(numero1.value) + Number(numero2.value)
    alert(`O resultado é: ${resultado}`)

    var res = document.getElementById('resultado')
    res.textContent = resultado
    res.innerText = 'O resultado é' + resultado
}


// class Pessoa {
//     falar() {
//         console.log('Falando')
//     }

//     andar() {
//         console.log('Andando')
//     }
// }

// var pessoa = new Pessoa()
// pessoa.andar()