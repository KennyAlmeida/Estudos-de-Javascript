class Produto {
    constructor(codProduto, nome, valor ) {
        this.codProduto = codProduto;
        this.nome = nome;
        this.valor = valor;
    }

}

const produtos = [];

function cadastrarProduto() {
    let codProduto = prompt("Digite o código do produto");
    let produtoExiste = produtos.some(function(produto) {
        return produto.codProduto == codProduto;
    } );
    
    while (produtoExiste) {
        alert("Código já cadastrado");
        codProduto = prompt("Digite o código do produto");
        produtoExiste = produtos.some(function(produto) {
            return produto.codProduto == codProduto;
        } );
    }

    let nome = prompt("Digite o nome do produto");
    
    while (nome == "") {
        alert("Nome inválido");
        nome = prompt("Digite o nome do produto");
    }

    let valor = prompt("Digite o valor do produto");

    while(valor != parseFloat(valor)) {
        alert("Valor deve ser um número");
        valor = prompt("Digite o valor do produto");
    }


    
    produtos.push(new Produto(codProduto, nome, valor));

    alert("Produto cadastrado com sucesso");
}

function listarProdutos() {
    if (produtos.length == 0) {
        console.log("Não tem produtos cadastrados");
    } else {
        console.log("Produtos cadastrados: ");
    produtos.forEach(function(produto) {
        console.log("COD: " + produto.codProduto + " - Produto: " + produto.nome + " - R$ " + produto.valor);
        console.log("-----------------------------------------------------");
    } );
    alert("Produtos listados com sucesso no console!");
    }
}


function removerProduto() {
    let codProduto = prompt("Digite o código do produto");
    let index = produtos.findIndex(function(produto) {
        return produto.codProduto == codProduto;
    } );
    if (index == -1) {
        alert("Produto não encontrado");
    } else {
        produtos.splice(index, 1);
        alert("Produto removido com sucesso");
    }
}

function buscarProduto() {
    let codProduto = prompt("Digite o código do produto");
    let produto = produtos.find(function(produto) {
        return produto.codProduto == codProduto;
    } );
    if (produto == undefined) {
        alert("Produto não encontrado");
    } else {
        alert("COD: " + produto.codProduto + " - Produto: " + produto.nome + " - R$ " + produto.valor);
    }
}


function alterarProduto() {
    let codProduto = prompt("Digite o código do produto");
    let index = produtos.findIndex(function(produto) {
        return produto.codProduto == codProduto;
    } );
    if (index == -1) {
        alert("Produto não encontrado");
    } else {

        let produto = produtos.find(function(produto) {
            return produto.codProduto == codProduto;
        } );
        let nome = prompt("Digite o nome do produto");
        let valor = prompt("Digite o valor do produto");
        produto.nome = nome;
        produto.valor = valor;
        alert("Produto alterado com sucesso");
    }
}


function main() {
    let opcao = prompt("Digite apenas o numero da opção desejada: \n 1 - Cadastrar produto \n 2 - Listar produtos \n 3 - Remover produto \n 4 - Buscar produto \n 5 - Alterar produto \n 0 - Sair");
    while (opcao != 0) {
        if (opcao == 1) {
            cadastrarProduto();
        } else if (opcao == 2) {
            listarProdutos();
        } else if (opcao == 3) {
            removerProduto();
        } else if (opcao == 4) {
            buscarProduto();
        } else if (opcao == 5) {
            alterarProduto();
        } else {
            console.log("Opção inválida");
        }
        opcao = prompt("Digite a opção desejada: \n 1 - Cadastrar produto \n 2 - Listar produtos \n 3 - Remover produto \n 4 - Buscar produto \n 5 - Alterar produto \n 0 - Sair");
    }
}

alert("Bem vindo ao sistema de cadastro de produtos da CoderHouse");

main();