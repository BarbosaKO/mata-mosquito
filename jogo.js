
var largura = 0;
var altura = 0;
var vidas = 1;

function ajustaTamanhoPalcoJogo(){
    largura = window.innerWidth;
    altura = window.innerHeight;
}

function posicaoRandomica(){
    ajustaTamanhoPalcoJogo();

    if (document.getElementById('mosquito')) {
        document.getElementById('mosquito').remove();
        document.getElementById('v'+vidas).src = "imagens/coracao_vazio.png"
        vidas++;
        if(vidas>3){
            console.log('perdeu!')
            window.location.href="fim-de-jogo.html";
        }
    } 
    var posicaoX = Math.floor(Math.random() * largura) - 90;
    var posicaoY = Math.floor(Math.random() * altura) - 90;
    posicaoX = posicaoX < 0 ? 0 : posicaoX;
    posicaoY = posicaoY < 0 ? 0 : posicaoY;

    //Criação do mosquito
    var mosquito = document.createElement('img');
    mosquito.src = "imagens/mosca.png";
    mosquito.className = tamanhoAleatorio()+" "+ladoAleatorio();
    mosquito.style.left = posicaoX+'px';
    mosquito.style.top = posicaoY+'px';
    mosquito.style.position = 'absolute';
    mosquito.id = 'mosquito';
    mosquito.onclick = function(){
        console.log("Acertou!");
        this.remove();
    }
    document.body.appendChild(mosquito);
}

function tamanhoAleatorio(){
    var classe = Math.floor(Math.random() * 3);
    switch (classe) {
        case 0:
            return 'mosquito0';
        case 1:
            return 'mosquito1';
        case 2:
            return 'mosquito2';
    }
}

function ladoAleatorio(){
    var classe = Math.floor(Math.random() * 2);
    switch (classe) {
        case 0:
            return 'ladoA';
        case 1:
            return 'ladoB';
    }
}
