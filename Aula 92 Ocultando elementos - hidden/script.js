function mostrar() {
    for (let i = 1; i < 5; i++) {
        document.getElementById("c" + i).hidden = true;
    }
    
    let obj = event.target.dataset.nome;
    document.getElementById(obj).hidden = false;
}

for (let i = 1; i < 5; i++) {
    document.getElementById("c" + i).hidden = true;
}

document.getElementById("btnc1").addEventListener("click", mostrar);
document.getElementById("btnc2").addEventListener("click", mostrar);
document.getElementById("btnc3").addEventListener("click", mostrar);
document.getElementById("btnc4").addEventListener("click", mostrar);