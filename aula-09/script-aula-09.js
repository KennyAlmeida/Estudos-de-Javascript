

document.getElementById('res').style.fontSize = '20px'

function calcular() {
    let n1 = Number(document.getElementById('txtn1').value)
    let n2 = Number(document.getElementById('txtn2').value)
    let res =document.getElementById('res')

    // pegar valor de um select
    let op = document.getElementById('operacao').value

    if (op == "somar") {
        res.innerHTML = `A soma entre ${n1} e ${n2} é igual a: ${n1 + n2}`
    } else if (op == "subtrair") {
        res.innerHTML = `A subtração entre ${n1} e ${n2} é igual a: ${n1 - n2}`
    } else if (op == "multiplicar") {
        res.innerHTML = `A multiplicação entre ${n1} e ${n2} é igual a: ${n1 * n2}`
    } else if (op == "dividir") {
        res.innerHTML = `A divisão entre ${n1} e ${n2} é igual a: ${n1 / n2}`
    } else {
        res.innerHTML = 'Operação inválida'
    }

}