let tmp;

function mudaCor() {
    let obj = document.getElementById("dv1");
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    obj.style.backgroundColor = `rgb(${r},${g},${b})`;
}

// setTimeout chama apenas uma vez
// let tmp = setTimeout(mudaCor, 3000);

function iniciar() {
    // setInterval a função a cada x milisegundos
    tmp = setInterval(mudaCor, 1000);
}

function parar() {
    clearInterval(tmp);
}

document.getElementById("bt1").addEventListener("click", iniciar);
document.getElementById("bt2").addEventListener("click", parar);