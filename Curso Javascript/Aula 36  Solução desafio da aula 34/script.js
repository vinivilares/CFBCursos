var posX = 0
var posY = 0

function move() {
    // var obj = document.getElementById("dv1")
    var tecla = event.keyCode
    // 37 = Esquerda
    // 38 = Cima
    // 39 = Direita
    // 40 = Baixo

    if (tecla == 37) {
        posX -= 10
        obj.style.left = posX + "px"
    } else if (tecla == 38) {
        posY -= 10
        obj.style.top = posY + "px"
    } else if (tecla == 39) {
        posX += 10
        obj.style.left = posX + "px"
    } else if (tecla == 40) {
        posY += 10
        obj.style.top = posY + "px"
    } else if (tecla == 13) {
        obj.style.backgroundColor = "#fff"
        alert("Evento keyDown Removido")
        document.removeEventListener("keydown", move)
    }
}

function addClique(){
    alert("Evento keyDown Adicionado")
    document.addEventListener("keydown", move)
    obj.style.backgroundColor = "#f00";
}

function iniciar() {
    obj = document.getElementById("dv1")
    obj.addEventListener("click", addClique)
}

window.addEventListener("load", iniciar)