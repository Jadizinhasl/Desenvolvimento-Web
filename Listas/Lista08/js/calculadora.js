let calculadora = document.getElementById('calculadora')
let numeroDigitado = ``
let result = document.getElementById('resultado')

const criarBotao = (tipo, valor, id, classe) => {
    let button = document.createElement('input');
    button.type = tipo;
    button.value = valor;
    button.className = classe;
    button.id = id;
    calculadora.appendChild(button);
    return button;
};

for (let indiceNumero = 0; indiceNumero < 10; indiceNumero++) {
    let classe = indiceNumero % 2 === 0 ? "btn-par btn" : "btn-impar btn";
    criarBotao('button', indiceNumero, `btn-${indiceNumero}`, classe)
}

criarBotao('button', '.', 'btn-ponto', 'btn btn-calculo')
criarBotao('button', '+', 'btn-soma', 'btn btn-calculo')
criarBotao('button', '-', 'btn-sub', 'btn btn-calculo')
criarBotao('button', '*', 'btn-mult', 'btn btn-calculo')
criarBotao('button', '/', 'btn-div', 'btn btn-calculo')
criarBotao('button', '=', 'btn-result', 'btn btn-calculo')

for (let index = 0; index < 10; index++) {
    document.getElementById(`btn-${index}`).addEventListener('click', (e) => {
        numeroDigitado += `${e.target.value}`
        result.textContent = numeroDigitado
    })

}

document.getElementById('btn-soma').addEventListener('click', (e) => {
    numeroDigitado += `${e.target.value}`
    result.textContent = numeroDigitado
})

document.getElementById('btn-sub').addEventListener('click', (e) => {
    numeroDigitado += `${e.target.value}`
    result.textContent = numeroDigitado
})

document.getElementById('btn-mult').addEventListener('click', (e) => {
    numeroDigitado += `${e.target.value}`
    result.textContent = numeroDigitado
})

document.getElementById('btn-div').addEventListener('click', (e) => {
    numeroDigitado += `${e.target.value}`
    result.textContent = numeroDigitado
})

document.getElementById('btn-ponto').addEventListener('click', (e) => {
    numeroDigitado += `${e.target.value}`
    result.textContent = numeroDigitado
})

document.getElementById('limpar').addEventListener('click', () => {
    numeroDigitado = ''
    result.textContent = ''
})

document.getElementById('btn-result').addEventListener('click', () => {
    numeroDigitado = eval(numeroDigitado)
    result.textContent = eval(numeroDigitado)
})