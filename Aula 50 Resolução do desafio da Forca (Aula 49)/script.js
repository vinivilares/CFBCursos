var biblioteca = ["javascript", "curso", "computador"]; // possiveis palavras
var qtde = biblioteca.length - 1; // pega a quantidade de palavras que existem no vetor biblioteca
var pos = Math.round(Math.random() * qtde); // armazena um numero aleatorio entre 0 e a qtde para colocar na posição do vetor posteriormente
var palavra = biblioteca[pos];
var tam = palavra.length;
var cxLetras = [];
var acertos; // acertos totais
var errosMax = 7; // erros maximos
var erros = 0; // erros totais
var desenhos = [];
var acertou = false;
var jogando = false;

function defineLetras(l) {
    var obj;
    for (var i = 0; i < tam; i++) {
        document.getElementById("dvpalavra").innerHTML += `<input type="text" id="letra${i}" class="letra" maxlength="1">`
        obj = document.getElementById("letra" + i).value = "";
        obj = document.getElementById("letra" + i).style.display = "none";
    }
    for (var i = 0; i < l; i++) {
        obj = document.getElementById("letra" + i).style.display = "inline-block";
    }
}

// verifica acertos e erros e é chamada quando o jogador perde/ganha ou clica no botao nova palavra
function jogar() {
    jog = document.getElementById("letraJ");
    jog.focus();
    if (jog.value == "") {
        alert("Digite uma letra");
    } else {
        if (jogando) {
            var jog;
            var letraTmp;
            var letra;
            var pesq;
            letra = jog.value;
            jog.value = "";
            pesq = palavra.match(letra);
            acertou = false;
            while (pesq != null) {
                letraTmp = palavra.search(letra);
                obj = document.getElementById("letra" + letraTmp).value = letra;
                palavra = palavra.replace(letra, "0");
                acertos++;
                pesq = palavra.match(letra);
                acertou = true;
            }
            if (!acertou) {
                document.getElementById("dvletrasdigitadas").innerHTML += letra.toUpperCase();
                errou();
            }
            if (acertos == tam) {
                document.getElementById("dvmsg").innerHTML = "";
                document.getElementById("dvmsg").innerHTML = "GANHOU!";
                jogando = false;
            }
        }
    }
}

// inicia as variaveis e o jogo
function inicia() {
    jogando = true;
    jog = document.getElementById("letraJ");
    jog.value = "";
    jog.focus();
    acertos = 0;
    erros = 0;
    acertos = false;
    document.getElementById("dvletrasdigitadas").innerHTML = "Letras Digitadas:";
    
    pos = Math.round(Math.random() * qtde);
    palavra = biblioteca[pos];
    tam = palavra.length;
    defineLetras(tam);
    document.getElementById("dvmsg").innerHTML = "";
    desenhos[1] = document.getElementById("cabeca");
    desenhos[2] = document.getElementById("corpo");
    desenhos[3] = document.getElementById("bracoE");
    desenhos[4] = document.getElementById("bracoD");
    desenhos[5] = document.getElementById("pernaE");
    desenhos[6] = document.getElementById("pernaD");
    document.getElementById("cabeca").src = "img/cabeca1.png";
    for (var i = 1; i < 7; i++) {
        desenhos[i].style.display = "none";
    }
}

function dica() {
    msg = "\n(Perdeu uma tentativa por pedir dica)"
    if (pos == 0) {
        alert("Linguagem de programação"+msg)
    } else if (pos == 1) {
        alert("Conjunto de conhecimento ciêntifico"+msg)
    } else if (pos == 2) {
        alert("Acessa a internet"+msg)
    }
    errou();
    jog.focus();
}

function errou() {
    erros++;
    if (erros < 7) {
        desenhos[erros].style.display = "block";
    } else {
        document.getElementById("cabeca").src = "img/cabeca2.png"
        document.getElementById("dvmsg").innerHTML = "PERDEU!";
        jogando = false;
    }
}

window.addEventListener("load", inicia)


// alterar os inputs de letras/ criar dinamicamente um para cada letra

console.log(tam)