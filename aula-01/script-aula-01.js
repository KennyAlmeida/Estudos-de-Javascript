let nome = prompt("Qual é seu nome?")

let numero1 = prompt("Digite um numero:")

let numero2 = prompt("Digite outro numero:")

let soma = parseInt(numero1) + parseInt(numero2)

//document.writeln(`Olá ${nome} <br>`)

//document.writeln(`A soma de ${numero1} + ${numero2} é: ${soma}`)



document.getElementById('nome').innerHTML = `Olá <strong>${nome}</strong>`

document.getElementById('soma').innerHTML = `A soma de ${numero1} + ${numero2} é: ${soma}`


