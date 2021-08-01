// Elementos
var vBtIniciar;
var vBola;
var vCpu;
var vJogador;
var vPainelTxtPontos;

// Controle de animação
var game, frames;

// Posições
var posBolaX, posBolaY;
var posJogadorX, posJogadorY, posCpuX, posCpuY;

// Direção de acordo a tecla
var dirJy;

// Posições iniciais
var posJogIniY = 180, posJogIniX = 10, posCpuIniY = 180, posCpuIniX = 930, posBolaIniX = 475, posBolaIniY = 240;

// Tamanhos
var campoX = 0, campoY = 0, campoW = 960, campoH = 500;
var barraW = 20, barraH = 140, bolaW = 20, bolaH = 20;

// Direção da bola e jogador
var bolaX, bolaY;
var cpuY = 0;

// Velocidade
var velBola, velCpu, velJogador;

// Controle
var pontos = 0;
var tecla;
var jogo = false;

function controlaJog() {
    if (jogo) {
        posJogadorY += velJogador * dirJy;
        if (((posJogadorY + barraH) >= campoH) || (posJogadorY <= 0)) {
            posJogadorY += (velJogador * dirJy) * -1;
        } /* else if (posJogadorY  <= 0) {
            posJogadorY -= velJogador * dirJy;
        } */
        vJogador.style.top = posJogadorY + "px";
    }
}

function controlaBola() {
    // Movimentação bola
    posBolaX += velBola * bolaX;
    posBolaY += velBola * bolaY;

    // Colisão com jogador
    if ((posBolaX <= posJogadorX + barraW) && ((posBolaY + bolaH >= posJogadorY) && (posBolaY <= posJogadorY + barraH))) {
        bolaY = (((posBolaY + (bolaH / 2)) - (posJogadorY + (barraH / 2))) / 16);
        bolaX *= -1;
    }

    // Colisão com CPU
    if ((posBolaX >= posCpuX - barraW) && ((posBolaY + bolaH >= posCpuY) && (posBolaY <= posCpuY + barraH))) {
        bolaY = (((posBolaY + (bolaH / 2)) - (posCpuY + (barraH / 2))) / 16);
        bolaX *= -1;
    }

    // Limites superior e inferior
    if ((posBolaY >= 480) || (posBolaY <= 0)) {
        bolaY *= -1;
    }

    // Controle de pontos
    if (posBolaX >= (campoW - bolaW)) {
        velBola = 0;
        posBolaX = posBolaIniX;
        posBolaY = posBolaIniY;
        posJogadorY = posJogIniY;
        posCpuY = posCpuIniY;
        pontos++;
        vPainelTxtPontos.value = pontos;
        jogo = false;
        vJogador.style.top = posJogadorY + "px";
        vCpu.style.top = posCpuY + "px";
    } else if (posBolaX <= 0) {
        velBola = 0;
        posBolaX = posBolaIniX;
        posBolaY = posBolaIniY;
        posJogadorY = posJogIniY;
        posCpuY = posCpuIniY;
        pontos--;
        vPainelTxtPontos.value = pontos;
        jogo = false;
        vJogador.style.top = posJogadorY + "px";
        vCpu.style.top = posCpuY + "px";
    }

    // if (pontos >= 5) {
    //     pontos = 0;
    //     alert("Você ganhou!");
    // } else if (pontos <= -5) {
    //     pontos = 0;
    //     alert("CPU ganhou!");
    // }

    vBola.style.top = posBolaY + "px";
    vBola.style.left = posBolaX + "px";

}

function teclaDw() {
    tecla = event.keyCode;
    if (tecla == 38) { // CIMA
        dirJy = -1;
    } else if (tecla == 40) { // BAIXO
        dirJy = 1;
    }
}

function teclaUp() {
    tecla = event.keyCode;
    if (tecla == 38) { // CIMA
        dirJy = 0;
    } else if (tecla == 40) { // BAIXO
        dirJy = 0;
    }
}

function game() {
    if (jogo) {
        controlaJog();
        controlaBola();
    }
    frames = requestAnimationFrame(game);
}

function iniciaJogo() {
    if (!jogo) {
        velBola = velCpu = velJogador = 8;
        cancelAnimationFrame(frames);
        jogo = true;
        dirJy = 0;
        bolaY = 0;
        if ((Math.random() * 10) < 5) {
            bolaX = -1;
        } else {
            bolaX = 1;
        }
        posJogadorX = posJogIniX;
        posCpuX = posCpuIniX;
        posBolaX = posBolaIniX;
        posBolaY = posBolaIniY;
        posJogadorY = posJogIniY;
        posCpuY = posCpuIniY;
        game();
    }
}

function inicializar() {
    velBola = velCpu = velJogador = 8;
    vBtIniciar = document.getElementById("btIniciar");
    vBtIniciar.addEventListener("click", iniciaJogo);
    vJogador = document.getElementById("dvJogador");
    vCpu = document.getElementById("dvCpu");
    vBola = document.getElementById("dvBola");
    vPainelTxtPontos = document.getElementById("txtPontos");
    document.addEventListener("keydown", teclaDw);
    document.addEventListener("keyup", teclaUp);
}

inicializar();