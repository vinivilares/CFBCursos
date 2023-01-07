document.getElementById("c1").addEventListener("click", definePainel);
document.getElementById("c2").addEventListener("click", definePainel);
document.getElementById("c3").addEventListener("click", definePainel);
document.getElementById("c4").addEventListener("click", definePainel);

function definePainel() {
    let obj = event.target;
    let painel = document.getElementById("painel");
    painel.innerHTML = "<strong>Modelo:</strong> " + obj.dataset.modelo;
    painel.innerHTML += "<br><strong>Cor:</strong> " + obj.dataset.cor;
    painel.innerHTML += "<br><strong>Potência:</strong> " + obj.dataset.potencia;
    painel.innerHTML += "<br><strong>Velocidade:</strong> " + obj.dataset.velocidade;
}