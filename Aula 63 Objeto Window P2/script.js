var l, a, px, py;

var painel = document.getElementById("painel")

document.getElementById("btnTam").addEventListener("click", function info() {
    l = window.innerWidth;
    a = window.innerHeight;
    px = window.screenX;
    py = window.screenY;

    painel.innerHTML = `L:${l} - A:${a}<br>` + `X:${px} - Y:${py}`;
})