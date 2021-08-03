// Elementos
var vBtIniciar;
var vBola;
var vCpu;
var vJogador;
var vPainelTxtPontosPlayer;
var vPainelTxtPontosCpu;

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
var pontosPlayer = 0;
var pontosCpu = 0;
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

function controlaCpu() {
    if (jogo) {
        if ((posBolaX > (campoW / 2)) && (bolaX > 0)) {
            // Movimentar CPU
            if (((posBolaY + (bolaH / 2)) > ((posCpuY + (barraH / 2))) + velCpu)) {
                // Mover para baixo
                if ((posCpuY + barraH) <= campoH) {
                    posCpuY += velCpu;
                }
            } else if ((posBolaY + (bolaH / 2)) < (posCpuY + (barraH / 2)) - velCpu) {
                // Mover para cima
                if (posCpuY >= 0) {
                    posCpuY -= velCpu;
                }
            }
        } else {
            // Posicionar CPU no centro
            if ((posCpuY + (barraH / 2)) < (campoH / 2)) {
                posCpuY += velCpu;
            } else if ((posCpuY + (barraH / 2)) > (campoH / 2)) {
                posCpuY -= velCpu;
            }
        }
        vCpu.style.top = posCpuY + "px";
    }
}

function controlaBola() {
    // Movimentação bola
    posBolaX += velBola * bolaX;
    posBolaY += velBola * bolaY;

    // Colisão com jogador
    if ((posBolaX <= posJogadorX + barraW) && ((posBolaY + bolaH >= posJogadorY) && (posBolaY <= posJogadorY + barraH))) {
        bolaY = (((posBolaY + (bolaH / 2)) - (posJogadorY + (barraH / 2))) / 32);
        bolaX *= -1;
    }

    // Colisão com CPU
    if ((posBolaX >= posCpuX - barraW) && ((posBolaY + bolaH >= posCpuY) && (posBolaY <= posCpuY + barraH))) {
        bolaY = (((posBolaY + (bolaH / 2)) - (posCpuY + (barraH / 2))) / 32);
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
        pontosPlayer++;
        vPainelTxtPontosPlayer.value = pontosPlayer;
        jogo = false;
        vJogador.style.top = posJogadorY + "px";
        vCpu.style.top = posCpuY + "px";
    } else if (posBolaX <= 0) {
        velBola = 0;
        posBolaX = posBolaIniX;
        posBolaY = posBolaIniY;
        posJogadorY = posJogIniY;
        posCpuY = posCpuIniY;
        pontosCpu++;
        vPainelTxtPontosCpu.value = pontosCpu;
        jogo = false;
        vJogador.style.top = posJogadorY + "px";
        vCpu.style.top = posCpuY + "px";
    }

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
        controlaCpu();
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
    vPainelTxtPontosPlayer = document.getElementById("txtPontosPlayer");
    vPainelTxtPontosCpu = document.getElementById("txtPontosCpu");
    document.addEventListener("keydown", teclaDw);
    document.addEventListener("keyup", teclaUp);
}

inicializar();