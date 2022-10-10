var partidaFavorita = JSON.parse(localStorage.getItem('partidaFavorita')) || [];


//favoritar jogo
function favoritar(){
    let containerPartida = document.querySelectorAll(".container-partida");
  
    for (let i = 0; i < containerPartida.length; i++) {
        containerPartida[i].addEventListener("click", function () {

        let idPartida = Number(this.id);
        let index = partidaFavorita.indexOf(idPartida);
        let containerFavoritar =  this.querySelector(".favoritar");


        if (index == -1) {
            partidaFavorita.push(idPartida);

            containerFavoritar.className = "favoritar fav";
            containerFavoritar.innerHTML = "Jogo Favorito";
            

        } else {
            partidaFavorita.splice(index, 1);

            containerFavoritar.className = "favoritar";
            containerFavoritar.innerHTML = "Favorite seu jogo";
            
        }

        localStorage.setItem('partidaFavorita', JSON.stringify(partidaFavorita));
        
        executaFutebol()

        
        })
    }
  
}


function listaTimes(times) {
  let timesContainer = document.getElementById("container-times");
  let campeonatos = document.getElementById("campeonatos");

  if (campeonatos.options.length == 0) {

    for (let time of times) {
      campeonatos.innerHTML += `
      <option value="${time.object[0].campeonato.campeonato_id}">${time.campeonato}</option>
      `;
    
    }

    let qtdcampeonanto = times.length;

    if(qtdcampeonanto == 0){
      campeonatos.style.display = "none";
      document.querySelector(".selecione-campeonato").style.display = "none";
      document.querySelector(".container-select").innerHTML = "<h3>Sem jogos ao vivo</h3>";
    } else if (qtdcampeonanto == 1){
      campeonatos.style.display = "none";
      document.querySelector(".selecione-campeonato").style.display = "none";
      document.querySelector(".container-select").innerHTML = `<span class='span-ao-vivo'></span><h3>${times[0].campeonato}</h3>`;
    }

    
  }
  let timesFiltrados = [];
  times.map((el) => {
    if (
      el.object[0].campeonato.campeonato_id == Number(campeonatos.value)
    ) {
      timesFiltrados = el.object;
    }
  });
  
  

  timesContainer.innerHTML = "";
  for (let time of timesFiltrados) {
    let placar_mandante=time.placar_mandante;
    let placar_visitante=time.placar_visitante;
    if(placar_mandante === null){
      placar_mandante=""
      }
    if(placar_visitante === null){
    placar_visitante=""
    }

    let idPartidaApi = time.partida_id;

    let jogoFavoritado = partidaFavorita.includes(idPartidaApi);


    if(jogoFavoritado){

        timesContainer.innerHTML += `
      <div class="container-partida" id="${time.partida_id}">
      <div class="favoritar fav">Jogo Favorito</div>
      <div class="container-time">
      <img
        src="${time.time_mandante.escudo}"
        class="time-img" title="${time.time_mandante.nome_popular}"
        alt="${time.time_mandante.nome_popular}"
      />
      <b class="time-versus">${placar_mandante} X ${placar_visitante}</b>
      <img
      src="${time.time_visitante.escudo}"
        class="time-img" title="${time.time_visitante.nome_popular}"
        alt="${time.time_visitante.nome_popular}"
      />
      </div>
      </div>
      `;
    }

  }

  for (let time of timesFiltrados) {
    let placar_mandante=time.placar_mandante;
    let placar_visitante=time.placar_visitante;
    if(placar_mandante === null){
      placar_mandante=""
      }
    if(placar_visitante === null){
    placar_visitante=""
    }

    let idPartidaApi = time.partida_id;

    let jogoFavoritado = partidaFavorita.includes(idPartidaApi);


    if(!jogoFavoritado){

        timesContainer.innerHTML += `
      <div class="container-partida" id="${time.partida_id}">
      <div class="favoritar">Favorite seu jogo</div>
      <div class="container-time">
      <img
        src="${time.time_mandante.escudo}"
        class="time-img" title="${time.time_mandante.nome_popular}"
        alt="${time.time_mandante.nome_popular}"
      />
      <b class="time-versus">${placar_mandante} X ${placar_visitante}</b>
      <img
      src="${time.time_visitante.escudo}"
        class="time-img" title="${time.time_visitante.nome_popular}"
        alt="${time.time_visitante.nome_popular}"
      />
      </div>
      </div>
      `;
    }

  }

  favoritar();

}

//consome o serviço de api para buscar os times
function recebaTimes() {
  fetch("futebol.json")
    .then((res) => res.json())
    .then((res) => {
      listaTimes(res);
    });
}

// Atualiza a lista de times a cada 10 segundos
const executaFutebol = () => {
  recebaTimes(setInterval(recebaTimes, 10000));
}


executaFutebol(); // Executa o componente ao iniciar a página 



// Widget inspirado na api https://www.api-futebol.com.br/