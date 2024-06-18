let calculadora = document.getElementById('calculadora');
let result = document.getElementById('resultado');
var numeroDigitado = "";

const criarBotao = (tipo, valor, classe) => {
    let button = document.createElement('input');
    button.type = tipo;
    button.value = valor;
    button.className = classe;
    button.id = `btn-${valor}`;
    calculadora.appendChild(button);
    return button;
};

for (let index = 0; index < 10; index++) {
    let classe = index % 2 === 0 ? "btn-par btn" : "btn-impar btn";
    let button = criarBotao("button", index, classe);

    button.addEventListener('click', (e) => {
        numeroDigitado += e.target.value;
        result.textContent = numeroDigitado;
    });
}

const operadores = [
    { id: 'soma', valor: '+', classe: 'btn-par btn' },
    { id: 'sub', valor: '-', classe: 'btn-impar btn' },
    { id: 'mult', valor: '*', classe: 'btn-par btn' },
    { id: 'div', valor: '/', classe: 'btn-impar btn' },
    { id: 'ponto', valor: '.', classe: 'btn-par btn' },
    { id: 'res', valor: '=', classe: 'btn-par btn', tipo: 'button' },
    { id: 'limpar', valor: 'C', classe: 'btn-par btn', tipo: 'button' }
];

operadores.forEach(op => {
    let button = criarBotao(op.tipo || "button", op.valor, op.classe);
    button.id = op.id;

    button.addEventListener('click', (e) => {
        if (e.target.id === 'res') {
            numeroDigitado = eval(numeroDigitado);
            result.textContent = numeroDigitado;
        } else if (e.target.id === 'limpar') {

            document.getElementById('excluir').addEventListener(`click`, (e) => {
                numeroDigitado = '';
                result.textContent = '';    
            })

            numeroDigitado = '';
            result.textContent = '';
        } else {
            numeroDigitado += e.target.value;
            result.textContent = numeroDigitado;
        }
    });
});