export const somar = (n1, n2) => {
    return (n1 + n2)
}

//export dá a permissão para ser acessado
export const subtrair = (n1, n2) => {
    console.log(n1 - n2)
}

//default p trabalhar com import via objeto (a.somar)
export default {
    somar
}