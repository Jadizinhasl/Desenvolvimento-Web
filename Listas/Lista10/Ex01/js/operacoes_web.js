const somar = (n1, n2) => n1 + n2;
const subtrair = (n1, n2) => n1 - n2;
const multiplicar = (n1, n2) => n1 * n2;
const dividir = (n1, n2) => n2 === 0 ? 'Erro: Divisão por zero' : n1 / n2;

export { somar, subtrair, multiplicar, dividir };