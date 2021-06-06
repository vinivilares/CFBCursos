function trocaCarro(c) {
    var obj = document.getElementById("carro");
    if (c == 1) {
        obj.setAttribute("class", "c1");
    } else if (c == 2) {
        obj.setAttribute("class", "c2");
    } else if (c == 3) {
        obj.setAttribute("class", "c3");
    }
}

function removerCarro() {
    var obj = document.getElementById("carro");
    obj.removeAttribute("class");
}

function verifica() {
    var obj = document.getElementById("carro");
    if (obj.hasAttribute("class")) {
        alert("Atributo class está na tag");
    } else {
        alert("Sem atributo class");
    }
}