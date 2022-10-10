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
}

const veiculo1 = new Veiculo('Uno', '5000', '1999');
const veiculo2 = new Veiculo('Palio', '10000', '2005' , '100');

veiculo1.ipva();
veiculo2.ipva();
veiculo2.encherTanque('5.50');
