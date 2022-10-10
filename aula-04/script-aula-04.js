function imc() {

    let altura = Number(prompt("Digite sua altura"));
    let peso = Number(prompt("Digite seu peso"));

    let imc = (peso / ((altura * altura) / 10000)).toFixed(2);

    if (imc < 18.5) {
        alert(`Seu IMC é ${imc} \nVocê esta abaixo do peso!`);
    } else if (imc >= 18.5 && imc < 25) {
        alert(`Seu IMC é ${imc} \nVocê esta no peso ideal!`);
    } else if (imc >= 25 && imc < 30) {
        alert(`Seu IMC é ${imc} \nVocê esta com sobrepeso!`);
    } else if (imc >= 30 && imc < 35) {
        alert(`Seu IMC é ${imc} \nVocê esta com Obesidade grau I`);
    } else if (imc >= 35 && imc < 40) {
        alert(`Seu IMC é ${imc} \nVocê esta com Obesidade grau II (severa)`);
    } else if (imc >= 40) {
        alert(`Seu IMC é ${imc} \nVocê esta com Obesidade grau III (mórbida)`);
    } else {
        alert(`Valor inválido`);
    }

}

imc();