var jogo = []; // armazena posições jogadas
var tabuleiro = []; // armazena posições vazias
var quemJoga = 0; // 0-Jogador; 1-CPU
var verifica; // armazena o resultado se houve vencedor ou não
var jogando = true; // indica se o jogo esta rodando ou não
var nivel = 1; // nivel de dificuldade
var jogadaCpu = 1;
var quemComeca = 1;

function cpuJoga() {
    if (jogando) {
        var l, c;
        if (nivel == 1) {
            do {
                l = Math.round(Math.random() * 2)
                c = Math.round(Math.random() * 2)
            } while (jogo[l][c] != '')
            jogo[l][c] = 'O'
        } else if (nivel == 2) {
            // NIVEL 2
        }
        verifica = verificaVitoria()
        if (verifica!="") {
            alert(verifica + " VENCEU!")
            jogando = false
        }
        atualizaTabuleiro()
        quemJoga = 0
    }
}

function verificaVitoria() {
    var l, c
    
    // Linhas
    for (l = 0; l < 3; l++) {
        if ((jogo[l][0] == jogo[l][1]) && (jogo[l][1] == jogo[l][2])) {
            return jogo[l][0]
        }
    }

    // Colunas
    for (c = 0; c < 3; c++) {
        if ((jogo[0][c] == jogo[1][c]) && (jogo[1][c] == jogo[2][c])) {
            return jogo[0][c]
        }
    }

    // Diagonais
    if ((jogo[0][0] == jogo[1][1]) && (jogo[1][1] == jogo[2][2])) {
        return jogo[1][1]
    }
    if ((jogo[0][2] == jogo[1][1]) && (jogo[1][1] == jogo[2][0])) {
        return jogo[1][1]
    }

    return ""
}

function jogar(p) {
    if ((jogando) && (quemJoga == 0)) {
        switch (p) {
            case 1:
                if (jogo[0][0] == '') {
                    jogo[0][0] = 'X'
                    quemJoga = 1;
                }
                break;
            case 2:
                if (jogo[0][1] == '') {
                    jogo[0][1] = 'X'
                    quemJoga = 1;
                }
                break;
            case 3:
                if (jogo[0][2] == '') {
                    jogo[0][2] = 'X'
                    quemJoga = 1;
                }
                break;
            case 4:
                if (jogo[1][0] == '') {
                    jogo[1][0] = 'X'
                    quemJoga = 1;
                }
                break;
            case 5:
                if (jogo[1][1] == '') {
                    jogo[1][1] = 'X'
                    quemJoga = 1;
                }
                break;
            case 6:
                if (jogo[1][2] == '') {
                    jogo[1][2] = 'X'
                    quemJoga = 1;
                }
                break;
            case 7:
                if (jogo[2][0] == '') {
                    jogo[2][0] = 'X'
                    quemJoga = 1;
                }
                break;
            case 8:
                if (jogo[2][1] == '') {
                    jogo[2][1] = 'X'
                    quemJoga = 1;
                }
                break;
            default: // caso 9
                if (jogo[2][2] == '') {
                    jogo[2][2] = 'X'
                    quemJoga = 1;
                }
                break;
        }
        if (quemJoga == 1) {
            atualizaTabuleiro()
            verifica = verificaVitoria()
            if (verifica!="") {
                alert(verifica + " VENCEU!")
                jogando = false
            }
            cpuJoga()
        }
    }
}

function atualizaTabuleiro() {
    for (var l = 0; l < 3; l++) {
        for (var c = 0; c < 3; c++) {
            if (jogo[l][c] == 'X') {
                tabuleiro[l][c].innerHTML = 'X';
                tabuleiro[l][c].style.cursor = "default";
            } else if (jogo[l][c] == 'O') {
                tabuleiro[l][c].innerHTML = 'O';
                tabuleiro[l][c].style.cursor = "default";
            } else {
                tabuleiro[l][c].innerHTML = '';
                tabuleiro[l][c].style.cursor = "pointer";
            }
        }
    }
}

function iniciar() {
    jogando = true
    jogadaCpu = 1
    jogo = [
        ['', '', ''], // 0,0 | 0,1 | 0,2
        ['', '', ''], // 1,0 | 1,1 | 1,2
        ['', '', '']  // 2,0 | 2,1 | 2,2
    ]

    tabuleiro = [
        [document.getElementById("p1"), document.getElementById("p2"), document.getElementById("p3")],
        [document.getElementById("p4"), document.getElementById("p5"), document.getElementById("p6")],
        [document.getElementById("p7"), document.getElementById("p8"), document.getElementById("p9")]
    ]
}

window.addEventListener("load", iniciar)