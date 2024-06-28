import { somar, subtrair, multiplicar, dividir } from '../js/operacoes_web.js';

const resultadoTela = document.getElementById('resultado');
const num1 = document.getElementById('n1');
const operacao = document.getElementById('operacao');
const num2 = document.getElementById('n2');
const calcular = document.getElementById('calcular');

const resultado = document.createElement("div");
resultado.id = 'resultadoOperacao';
resultadoTela.appendChild(resultado);

calcular.addEventListener('click', () => {
  const n1 = parseFloat(num1.value);
  const operacaoValue = operacao.value.trim();
  const n2 = parseFloat(num2.value);
  let resultadoOperacao;

  if (operacaoValue === '+') {
    resultadoOperacao = somar(n1, n2);
  } else if (operacaoValue === '-') {
    resultadoOperacao = subtrair(n1, n2);
  } else if (operacaoValue === '*') {
    resultadoOperacao = multiplicar(n1, n2);
  } else if (operacaoValue === '/') {
    resultadoOperacao = dividir(n1, n2);
  } else {
    resultadoOperacao = 'Operador inválido';
  }

  resultado.textContent = `Resultado: ${resultadoOperacao}`;
});