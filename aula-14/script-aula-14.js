const BD_PRODUTOS = [
    { id: 1, nome: 'Coca-Cola', preco: 5.00 },
    { id: 2, nome: 'Pepsi', preco: 5.00 },
    { id: 3, nome: 'Fanta', preco: 5.00 },
    { id: 4, nome: 'Guaraná', preco: 5.00 },
    { id: 5, nome: 'Água', preco: 5.00 },
    { id: 6, nome: 'Suco', preco: 5.00 },
];

const carregarProdutos = () => {    
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(BD_PRODUTOS);
        }, 1000);
    });
};

const renderizarProdutos = () => {
    const produtos = document.querySelector('#produtos')
    const produtosHTML = BD_PRODUTOS.map(produto => {
        return ` 
            <div class="produto">
                <h3>${produto.nome}: R$ ${produto.preco}</h3>
            </div>
            ` ;
    });
    produtos.innerHTML = produtosHTML.join('');
};

let produtosCarrinho = [];

document.getElementById('btn-carregar').addEventListener('click', () => {
    carregarProdutos().then((produtos) => {
        renderizarProdutos(produtos);
    });
});

