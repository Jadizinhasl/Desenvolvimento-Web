const readline = require('readline');
const { somar, subtrair, multiplicar, dividir } = require('./operacoes_node');

const opMatematica = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

opMatematica.question('Digite o primeiro número: ', (valor1) => {
  const n1 = parseFloat(valor1);

  opMatematica.question('Digite o operador (+, -, *, /): ', (operador) => {
    const operadorValue = operador.trim();

    opMatematica.question('Digite o segundo número: ', (valor2) => {
      const n2 = parseFloat(valor2);
      let resultadoOperacao;

      if (operadorValue === '+') {
        resultadoOperacao = somar(n1, n2);
      } else if (operadorValue === '-') {
        resultadoOperacao = subtrair(n1, n2);
      } else if (operadorValue === '*') {
        resultadoOperacao = multiplicar(n1, n2);
      } else if (operadorValue === '/') {
        resultadoOperacao = dividir(n1, n2);
      } else {
        resultadoOperacao = 'Operador inválido';
      }

      console.log(`Resultado: ${resultadoOperacao}`);
      opMatematica.close();
    });
  });
});