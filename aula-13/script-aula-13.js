const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
    Swal.fire({
        title: 'item adicionado ao carrinho',
        text: 'Deseja continuar comprando?',

        icon: 'success',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sim',
        cancelButtonText: 'Não'
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire(
                'Continuar comprando',
                'Você está sendo redirecionado para a página de produtos',
                'success'
            )
        } else {
            Swal.fire(
                'Finalizar compra',
                'Você está sendo redirecionado para a página de finalização de compra',
                'success'
            )
        }
    })
    })