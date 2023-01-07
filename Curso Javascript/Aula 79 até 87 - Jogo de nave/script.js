let direcaoYJogador, direcaoXJogador, jogador, velocidadeJogador, posicaoJogadorX, posicaoJogadorY;
let velocidadeTiro;
let telaW, telaH;
let jogo;
let frames;
let contBombas, painelContBombas, velocidadeBomba, tmpCriaBomba;
let bombasTotal;
let vidaPlaneta, barraPlaneta;
let indiceExplosao, indiceSom;
let telaMsg;

function teclaDw() {
    let tecla = event.keyCode;

    if (tecla == 38) {
        // Cima
        direcaoYJogador = -1;
    } else if (tecla == 40) {
        // Baixo
        direcaoYJogador = 1;
    }

    if (tecla == 37) {
        // Esquerda
        direcaoXJogador = -1;
    } else if (tecla == 39) {
        // Direita
        direcaoXJogador = 1;
    }

    if (tecla == 32) {
        // Espaço / Tiro
        atirar(posicaoJogadorX + 17, posicaoJogadorY)
    }
}

function teclaUp() {
    let tecla = event.keyCode;

    if ((tecla == 38) || (tecla == 40)) {
        direcaoYJogador = 0;
    }

    if ((tecla == 37) || (tecla == 39)) {
        direcaoXJogador = 0;
    }
}

function criarBomba() {
    if (jogo) {
        let y = 0;
        let x = Math.random() * telaW;
        let bomba = document.createElement("div");
        let atributo1 = document.createAttribute("class");
        let atributo2 = document.createAttribute("style");

        atributo1.value = "bomba";
        atributo2.value = `
            top: ${y}px;
            left: ${x}px;
        `;

        bomba.setAttributeNode(atributo1);
        bomba.setAttributeNode(atributo2);

        document.body.appendChild(bomba);

        contBombas--;
    }
}

function controlarBomba() {
    bombasTotal = document.getElementsByClassName("bomba");

    let tam = bombasTotal.length;

    for (let i = 0; i < tam; i++) {
        if (bombasTotal[i]) {
            let posI = bombasTotal[i].offsetTop;

            posI += velocidadeBomba;
            bombasTotal[i].style.top = posI + "px";

            if (posI > telaH) {
                vidaPlaneta -= 10;
                criarExplosao(2, bombasTotal[i].offsetLeft, null);
                bombasTotal[i].remove();
            }
        }
    }
}

function atirar(x, y) {
    let tiro = document.createElement("div");
    let atributo1 = document.createAttribute("class");
    let atributo2 = document.createAttribute("style");

    atributo1.value = "tiroJog";
    atributo2.value = `
        top: ${y}px;
        left: ${x}px;
    `;

    tiro.setAttributeNode(atributo1);
    tiro.setAttributeNode(atributo2);

    document.body.appendChild(tiro);
}

function controleTiros() {
    let tiros = document.getElementsByClassName("tiroJog");
    // let tam = tiros.length;

    for (let i = 0; i < tiros.length; i++) {
        if (tiros[i]) {
            let posicaoTiro = tiros[i].offsetTop;
            posicaoTiro -= velocidadeTiro;
            tiros[i].style.top = posicaoTiro + "px";

            colisaoTiroBomba(tiros[i])

            if (posicaoTiro < 0) {
                // document.body.removeChild(tiros[i]);
                tiros[i].remove();
            }
        }
    }
}

function colisaoTiroBomba(tiro) {
    let tam = bombasTotal.length;
    for (let i = 0; i < tam; i++) {
        if (bombasTotal[i]) {
            if (
                ((tiro.offsetTop <= (bombasTotal[i].offsetTop + 40)) && // Cima tiro com baixo bomba
                ((tiro.offsetTop + 6) >= (bombasTotal[i].offsetTop))) // Baixo tiro com cima bomba
                &&
                ((tiro.offsetLeft <= (bombasTotal[i].offsetLeft + 24)) && // Esquerda tiro com direita bomba
                ((tiro.offsetLeft + 6) >= (bombasTotal[i].offsetLeft)))) { // Direita tiro com esquerda bomba
                    criarExplosao(1, bombasTotal[i].offsetLeft - 25, bombasTotal[i].offsetTop);
                    bombasTotal[i].remove();
                    tiro.remove();
            }
        }
    }
}

function criarExplosao(tipo, x, y) {
    // Tipo 1 = AR
    // Tipo 2 = TERRA

    if (document.getElementById("explosao" + (indiceExplosao - 5)))  {
        document.getElementById("explosao" + (indiceExplosao - 5)).remove();
    }

    let explosao = document.createElement("div");
    let img = document.createElement("img");
    let som = document.createElement("audio");

    // Atributos para div
    let atributo1 = document.createAttribute("class");
    let atributo2 = document.createAttribute("style");
    let atributo3 = document.createAttribute("id");

    // Atributos para imagem
    let atributo4 = document.createAttribute("src");
    
    // Atributos para audio
    let atributo5 = document.createAttribute("src");
    let atributo6 = document.createAttribute("id");

    atributo3.value = "explosao" + indiceExplosao;

    if (tipo == 1) {
        atributo1.value = "explosaoAr";
        atributo2.value = `
            top: ${y}px;
            left: ${x}px;
        `;
        atributo4.value = "img/explosao_ar.gif?" + new Date();
    } else {
        atributo1.value = "explosaoChao";
        atributo2.value = `
            top: ${(telaH - 57)}px;
            left: ${(x - 17)}px;
        `;
        atributo4.value = "img/explosao_chao.gif?" + new Date();
    }

    atributo5.value = "sound/exp1.mp3?" + new Date();
    atributo6.value = "som" + indiceSom;

    explosao.setAttributeNode(atributo1);
    explosao.setAttributeNode(atributo2);
    explosao.setAttributeNode(atributo3);
    img.setAttributeNode(atributo4);
    som.setAttributeNode(atributo5);
    som.setAttributeNode(atributo6);

    explosao.appendChild(img);
    explosao.appendChild(som);

    document.body.appendChild(explosao);
    document.getElementById("som" + indiceSom).play();

    indiceExplosao++;
    indiceSom++;
}

function controlaJogador() {
    posicaoJogadorY += direcaoYJogador * velocidadeJogador;
    posicaoJogadorX += direcaoXJogador * velocidadeJogador;
    jogador.style.top = posicaoJogadorY + "px";
    jogador.style.left = posicaoJogadorX + "px";
}

function gerenciarGame() {
    barraPlaneta.style.width = vidaPlaneta + "px";

    // VITORIA
    if (contBombas <= 0) {
        jogo = false;
        clearInterval(tmpCriaBomba);
        telaMsg.style.backgroundImage = "url('img/vitoria.jpg')";
        telaMsg.style.display = "block";
    }

    // DERROTA
    if (vidaPlaneta <= 0) {
        jogo = false;
        clearInterval(tmpCriaBomba);
        telaMsg.style.backgroundImage = "url('img/derrota.jpg')";
        telaMsg.style.display = "block";
    }
}

function gameLoop() {
    if (jogo) {
        // FUNÇÕES DE CONTROLE
        controlaJogador();
        controleTiros();
        controlarBomba();
    }

    gerenciarGame();

    frames = requestAnimationFrame(gameLoop);
}

function reinicia() {
    bombasTotal = document.getElementsByClassName("bomba");

    for (let i = 0; i < bombasTotal.length; i++) {
        if(bombasTotal[i]) {
            bombasTotal.remove();
        }
    }

    telaMsg.style.display = "none";
    
    clearInterval(tmpCriaBomba);
    cancelAnimationFrame(frames);

    vidaPlaneta = 300;
    posicaoJogadorX = telaW / 2;
    posicaoJogadorY = telaH / 2;
    jogador.style.top = posicaoJogadorY + "px";
    jogador.style.left = posicaoJogadorX + "px";
    contBombas = 150;

    jogo = true;

    tmpCriaBomba = setInterval(criarBomba, 1700);
    gameLoop();
}

function iniciar() {
    jogo = false;

    // Inicia Tela
    telaH = window.innerHeight;
    telaW = window.innerWidth;

    // Inicia Jogador
    direcaoXJogador = direcaoYJogador = 0;

    // Jogador no meio da tela
    posicaoJogadorX = telaW / 2;
    posicaoJogadorY = telaH / 2;
    velocidadeJogador = velocidadeTiro = 5;

    jogador = document.getElementById("naveJog");
    jogador.style.top = posicaoJogadorY + "px";
    jogador.style.left = posicaoJogadorX + "px";

    // Controles das bombas
    contBombas = 150;
    velocidadeBomba = 3;
    
    // Controles do planeta
    vidaPlaneta = 300;
    barraPlaneta = document.getElementById("barraPlaneta");

    barraPlaneta.style = vidaPlaneta + "px";

    // Controles de explosão
    indiceExplosao = 0;
    indiceSom = 0;

    // Telas
    telaMsg = document.getElementById("telaMsg");
    telaMsg.style.backgroundImage = "url('img/intro.jpg')";
    telaMsg.style.display = "block";

    document.getElementById("btnJogar").addEventListener("click", reinicia);
}

window.addEventListener("load", iniciar);
document.addEventListener("keydown", teclaDw);
document.addEventListener("keyup", teclaUp);