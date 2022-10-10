let nota1 = prompt("Digite a nota do Primeiro Trimestre");
let nota2 = prompt("Digite a nota do Segundo Trimestre");
let nota3 = prompt("Digite a nota do Terceiro Trimestre");
let nota4 = prompt("Digite a nota do Quarto Trimestre");

let presenca = prompt("Digite a presença do aluno (de 0 a 100)");

let soma = parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3) + parseFloat(nota4);

let media = soma / 4;

if(media >= 6 && presenca >= 75){
    alert(`A média do aluno é: ${media} \nA presença do aluno é: ${presenca} \nO aluno está aprovado!`);
} else {
    alert("A média do aluno é: ${media} \nA presença do aluno é: ${presenca} \nO aluno está reprovado");
}


for (let i = 0; i < 10; i++) {
    console.log(i);
}