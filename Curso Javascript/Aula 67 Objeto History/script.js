
var painel, btnBack, btnForward, btnGo;

// function hBack() {
//     window.history.back();
// }

// function hForward() {
//     window.history.forward();
// }

// function hGo() {
//     window.history.go(-2);
// }

function historico(num) {
    window.history.go(num);
}

function inicia() {
    btnBack = document.getElementById("btnBack");
    btnForward = document.getElementById("btnForward");
    btnGo = document.getElementById("btnGo");

    btnBack.addEventListener("click", function() {
        historico(-1)
    });
    btnForward.addEventListener("click", function() {
        historico(1)
    });

    btnGo.addEventListener("click", function() {
        historico(-2)
    });

    painel = document.getElementById("info");
    painel.innerHTML = history.length;
}

inicia();