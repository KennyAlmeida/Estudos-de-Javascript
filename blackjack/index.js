
    const btnIniciar = document.querySelector('#btnIniciar')
    const btnPedir = document.querySelector('#btnPedir')
    const btnParar = document.querySelector('#btnParar')
    const btnNovoJogo = document.querySelector('#btnNovoJogo')
    const btnRegras = document.querySelector('#btnRegras')
    const divCartasJogador = document.querySelector('#cartas-jogador')
    const divCartasComputador = document.querySelector('#cartas-computador')
    const divPontosJogador = document.querySelector('#pontos-jogador')
    const divPontosComputador = document.querySelector('#pontos-computador')
    const divResultado = document.querySelector('#resultado')
    const divMensagem = document.querySelector('#mensagem')

    var cartasJogador = []
    var cartasComputador = []
    var pontosJogador = 0
    var pontosComputador = 0
    var deckId = ''

    btnNovoJogo.style.display = 'none'
    btnPedir.style.display = 'none'
    btnParar.style.display = 'none'


    async function iniciarJogo() {
        const response = await fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
        const data = await response.json()
        deckId = data.deck_id

        const response2 = await fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`)
        const data2 = await response2.json()
        cartasJogador = data2.cards

        const response3 = await fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`)
        const data3 = await response3.json()
        cartasComputador = data3.cards

        btnIniciar.style.display = 'none'
        btnPedir.style.display = 'inline-block'
        btnParar.style.display = 'inline-block'
        btnNovoJogo.style.display = 'none'

        divCartasJogador.innerHTML = ''
        divCartasComputador.innerHTML = ''
        divPontosJogador.innerHTML = ''
        divPontosComputador.innerHTML = ''
        divResultado.innerHTML = ''
        divMensagem.innerHTML = ''

        cartasJogador.forEach((carta) => {
            const img = document.createElement('img')
            img.src = carta.image
            divCartasJogador.appendChild(img)
        })

        cartasComputador.forEach((carta) => {
            const img = document.createElement('img')
            img.src = carta.image
            divCartasComputador.appendChild(img)
        })

        pontosJogador = cartasJogador.reduce((acc, carta) => {
            if (carta.value === 'KING' || carta.value === 'QUEEN' || carta.value === 'JACK') {
                return acc + 10
            } else if (carta.value === 'ACE') {
                if(cartasJogador.length === 2 && acc === 10) {
                    return acc + 11
                } else {
                    return acc + 1
                }
            } else {
                return acc + parseInt(carta.value)
            }
        }, 0)

        pontosComputador = cartasComputador.reduce((acc, carta) => {
            if (carta.value === 'KING' || carta.value === 'QUEEN' || carta.value === 'JACK') {
                return acc + 10
            } else if (carta.value === 'ACE') {
                if(cartasJogador.length === 2 && acc === 10) {
                    return acc + 11
                } else {
                    return acc + 1
                }
            } else {
                return acc + parseInt(carta.value)
            }
        }, 0)

        divPontosJogador.innerHTML = `Sua pontuação: ${pontosJogador}`
        divPontosComputador.innerHTML = `Pontuação da CPU: ${pontosComputador}` 

        setTimeout(() => {

        if (pontosJogador === 21) {
            mensagem("ganhou");
            btnPedir.style.display = 'none'
            btnParar.style.display = 'none'
            btnNovoJogo.style.display = 'inline-block'
        } else if (pontosComputador === 21) {
            mensagem("perdeu");
            btnPedir.style.display = 'none'
            btnParar.style.display = 'none'
            btnNovoJogo.style.display = 'inline-block'
        }

        }, 500)
    }

    async function pedirCarta() {
        const response = await fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        const data = await response.json()
        const carta = data.cards[0]
        
        cartasJogador.push(carta)

        const img = document.createElement('img')
        img.src = carta.image
        divCartasJogador.appendChild(img)

        if (carta.value === 'KING' || carta.value === 'QUEEN' || carta.value === 'JACK') {
            pontosJogador += 10
        } else if (carta.value === 'ACE') {
            pontosJogador += 1
        } else {
            pontosJogador += parseInt(carta.value)
        }

        divPontosJogador.innerHTML = `Sua pontuação: ${pontosJogador}`

        setTimeout(() => {

        if (pontosJogador > 21) {
            mensagem("perdeu");
            btnPedir.style.display = 'none'
            btnParar.style.display = 'none'
            btnNovoJogo.style.display = 'inline-block'
        } else if (pontosJogador === 21) {
            mensagem("ganhou");
            btnPedir.style.display = 'none'
            btnParar.style.display = 'none'
            btnNovoJogo.style.display = 'inline-block'
        }

        }, 500)
    }

    async function parar() {
        btnPedir.style.display = 'none'
        btnParar.style.display = 'none'
        btnNovoJogo.style.display = 'inline-block'

        while (pontosComputador < pontosJogador && pontosComputador <= 21 && pontosJogador <= 21) {
            const response = await fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
            const data = await response.json()
            const carta = data.cards[0]

            cartasComputador.push(carta)

            const img = document.createElement('img')
            img.src = carta.image
            divCartasComputador.appendChild(img)

            if (carta.value === 'KING' || carta.value === 'QUEEN' || carta.value === 'JACK') {
                pontosComputador += 10
            } else if (carta.value === 'ACE') {
                pontosComputador += 1
            } else {
                pontosComputador += parseInt(carta.value)
            }

            divPontosComputador.innerHTML = `Pontuação da CPU: ${pontosComputador}` 
        }

        setTimeout(() => {

        if (pontosComputador > 21) {
            mensagem("ganhou");
        } else if (pontosComputador === pontosJogador) {
            mensagem("empate");
        } else if (pontosJogador > 21) {
            mensagem("perdeu");
        } else if (pontosComputador > pontosJogador) {
            mensagem("perdeu");
        } else {
            mensagem("ganhou");
        }

        }, 500)
    }

    function mensagem(resultado) {

        

        if (resultado == "ganhou") {
            Swal.fire({
                imageUrl: 'https://media.tenor.com/auD4JzM5glMAAAAM/dance-tobey-maguire.gif',
                imageWidth: 400,
                imageHeight: 200,
                title: 'Você Ganhou!',
                // timer: 2000,
                padding: '3em',
                backdrop: `
                    url("assets/image/wins.webp")
                    left top
                    repeat
                `
              })
        } else if (resultado == "perdeu") {
            Swal.fire({
                imageUrl: 'https://acegif.com/wp-content/uploads/gif/crying-45.gif',
                imageWidth: 400,
                imageHeight: 200,
                title: 'Você perdeu!',
                padding: '3em',
                backdrop: `
                    url("assets/image/chuva.gif")
                    left top
                    repeat
                `
              })
        }
        else {
            Swal.fire({
                imageUrl: 'https://media.tenor.com/ORAtXY8Q5PIAAAAd/peter-parker-hotdog.gif',
                imageWidth: 400,
                imageHeight: 200,
                title: 'Empate!',
              })
        }
    }

    // Iniciar jogo e receber duas cartas do baralho
    btnIniciar.addEventListener('click', async () => {
        iniciarJogo();
    })

    // Pedir mais uma carta
    btnPedir.addEventListener('click', async () => {
        pedirCarta();
    })

    // Parar de pedir cartas
    btnParar.addEventListener('click', async () => {
        parar();
    })

    // Novo jogo
    btnNovoJogo.addEventListener('click', () => {
        window.location.reload()
    })

    btnRegras.addEventListener('click', () => {

        Swal.fire({
            title: 'Regras do jogo',
            html:'<div class="regras">'+
                '<h3>Objetivo do jogo</h3>'+
                '<p>O blackjack (modalidade americana) é um jogo de cartas que consiste em somar mais pontos com as suas cartas que o dealer sem ultrapassar 21. Se com as 2 primeiras cartas o jogador conseguir 21 pontos, terá um “blackjack”.</p>'+
                '<h3>Valor das cartas</h3>'+
                '<ul>'+
                    '<li>O “ás” vale 1 ou 11 pontos.</li>'+
                    '<li>“J”, “Q”, “K” valem 10 pontos.</li>'+
                    '<li>As demais cartas, seu próprio valor.</li>'+
                '</ul>'+
                '<h3>Opções do jogo</h3>'+
                '<p>No seu turno, cada jogador tem várias opções sempre e quando não tenha “blackjack”: </p>'+
                '<ul>'+
                    '<li><span class="btn-regras">Pedir carta</span> – pede uma carta ao dealer.</li>'+
                    '<li><span class="btn-regras">Parar</span> – termina o seu turno.</li>'+
                '</ul>'+
                '<h3>Resultado do jogo</h3>'+
                '<p>Se o jogador ultrapassar os 21 pontos, perde automaticamente. Se o jogador tiver menos pontos que o computador, perde. Se o jogador tiver mais pontos que o computador, ganha. Se o jogador tiver o mesmo número de pontos que o computador, empata.</p>'+
                '</div>',
        })

    })