function rolar() {
    let obj = event.target.dataset.nome;
    document.getElementById(obj).scrollIntoView();
}

document.getElementById("btnc1").addEventListener("click", rolar);
document.getElementById("btnc2").addEventListener("click", rolar);
document.getElementById("btnc3").addEventListener("click", rolar);
document.getElementById("btnc4").addEventListener("click", rolar);