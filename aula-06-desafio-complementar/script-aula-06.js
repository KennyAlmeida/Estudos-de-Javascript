class Veiculo {
    constructor(modelo, valor, ano, tamanhoDoTanque) {
        this.modelo = modelo;
        this.valor = parseFloat(valor);
        this.ano = Number(ano);
        this.tamanhoDoTanque = parseInt(tamanhoDoTanque);
    }
    ipva() {
        if (this.ano > 2002) {
            let ipva = this.valor * 0.03;
            console.log(`O IPVA do ${this.modelo} é R$ ${ipva}`);
        } else {
            console.log(`Não precisa pagar IPVA do ${this.modelo}`); 
        }
    }
    encherTanque(valorCombustivel) {
        let totalAPagar = this.tamanhoDoTanque * valorCombustivel;
        console.log(`O total a pagar para encher o taque do ${this.modelo} é R$ ${totalAPagar}`);
    }
    removerVeiculo() {
        // se o modelo estiver no objeto, remove o objeto
        if (this.modelo in veiculos) {
            delete veiculos[this.modelo];
        }       
    }
}

const veiculo1 = new Veiculo('Uno', '5000', '1999');
const veiculo2 = new Veiculo('Palio', '10000', '2005' , '100');

const veiculos = [];
veiculos.push(new Veiculo('Uno', '5000', '1999'));
veiculos.push(new Veiculo('Palio', '10000', '2005' , '100'));
veiculos.push(new Veiculo('Fusca', '4000', '1999'));
veiculos.push(new Veiculo('Gol', '12000', '2005' , '100'));

//ordenar veiculos por valor de acordo com o menor para o maior com o metodo sort
veiculos.sort(function(a, b) {
    return a.valor - b.valor;
}).forEach(function(veiculo) {
    console.log(veiculo.modelo + " - " + veiculo.valor);
});
