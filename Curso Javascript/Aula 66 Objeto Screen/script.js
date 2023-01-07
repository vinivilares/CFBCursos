var painel;

function inicia() {
    painel = document.getElementById("painel");
    painel.innerHTML += `Resolução da tela: ${window.screen.width}x${window.screen.height}<hr>`
    painel.innerHTML += `Resolução disponível: ${window.screen.availWidth}x${window.screen.availHeight}<hr>`
    painel.innerHTML += `Profundidade de cores (imagens): ${window.screen.colorDepth}bits<hr>`
    painel.innerHTML += `Resolução cor da tela (pixel): ${window.screen.pixelDepth}bits/pixel<hr>`
} 

window.addEventListener("load", inicia);