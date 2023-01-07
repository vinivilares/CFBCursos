let dx;
let dy;
let px;
let py;
let vel;
let obj;
let tmp;

function iniciar() {
    dx = 0;
    dy = 0;
    px = 0;
    py = 0;
    vel = 1;
    obj = document.getElementById("dv1");

    document.addEventListener("keydown", teclaDw);
    document.addEventListener("keyup", teclaUp);


    tmp = setInterval(enterFrame, 1);
}

function teclaDw() {
    let tecla = event.keyCode;
    if (tecla == 37) {
        dx = -1;
    } else if (tecla == 38) {
        dy = -1;
    } else if (tecla == 39) {
        dx = 1;
    } else if (tecla == 40) {
        dy = 1;
    }
}

function teclaUp() {
    let tecla = event.keyCode;
    if (tecla == 37) {
        dx = 0;
    } else if (tecla == 38) {
        dy = 0;
    } else if (tecla == 39) {
        dx = 0;
    } else if (tecla == 40) {
        dy = 0;
    }
}

function enterFrame() {
    px += dx * vel;
    py += dy * vel;
    obj.style.left = px + "px";
    obj.style.top = py + "px";
}

window.addEventListener("load", iniciar);