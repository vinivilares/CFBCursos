setInterval(foco, 0);

function foco() {
    let res = document.getElementById("sim-nao");
    let painel = document.getElementById("painel");
    
    if (document.hasFocus()) {
        res.innerHTML = "";
        painel.style.display = "none";
    } else {
        res.innerHTML = "NÃO"
        painel.style.display = "block"
    }
}