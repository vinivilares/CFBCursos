function mudaCor(obj, cor) {
    obj.style.backgroundColor = cor
}

function mudaPos(obj) {
    obj.style.position = "absolute"
    obj.style.left = Math.random()*500+"px"
    obj.style.top= Math.random()*500+"px"
}

function ola() {
    var data = new Date()
    var hora = data.getHours()
    var txt = ''

    if (hora < 12) {
        txt = "Bom Dia"
    } else if (hora < 18) {
        txt = "Boa Tarde"
    } else {
        txt = "Boa Noite"
    }
    alert("Olá, " + txt)
}