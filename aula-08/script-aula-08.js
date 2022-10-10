let nome = prompt("Digite seu nome: ");
let cor = prompt("Digite sua cor favorita: (em ingles, hexadecimal ou rgb) ");

let titulo = document.getElementsByClassName("title");
titulo[0].innerHTML = "Olá " + nome + ", seja bem vindo";
titulo[0].style.textAlign = "center";

document.body.style.backgroundColor = cor;

document.getElementById('res').style.fontSize = '20px'

function somar() {
    var tn1 =document.getElementById('txtn1')
    var tn2 =document.getElementById('txtn2')
    var res =document.getElementById('res')

    var n1 = Number(tn1.value)
    var n2 = Number(tn2.value)

    var s = n1 + n2

    res.innerHTML = `A soma entre ${n1} e ${n2} é igual a: <strong>${s}</strong>`
}