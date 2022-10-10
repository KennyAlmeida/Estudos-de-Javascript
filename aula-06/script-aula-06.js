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
veiculos.push(new Veiculo('Fusca', '5000', '1999'));
veiculos.push(new Veiculo('Gol', '10000', '2005' , '100'));


for (const veiculo of veiculos) {
    console.log(`Seu carro é um ${veiculo.modelo}`);
    veiculo.ipva();
    //se tamanho do tanque for true, encher o tanque
    if (veiculo.tamanhoDoTanque) {
        veiculo.encherTanque('5.50');
    }
    console.log("----------------------------------------------------");
}

