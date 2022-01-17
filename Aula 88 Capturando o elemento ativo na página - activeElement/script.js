// 1 - Chamando a função no body
// function ativo() {
//     let elemento = document.activeElement.tagName;
//     console.log(elemento);
// }

// ---------------------------------------------------------

// 2 - Criando uma função recursiva que atualiza o tempo todo o elemento selecionado
// let dvcx, frames;

// function loop() {
//     dvcx.innerHTML = document.activeElement;
//     frames = requestAnimationFrame(loop);
// }

// function inicia() {
//     dvcx = document.getElementById("cx");
//     loop();
// }

// inicia();


// ---------------------------------------------------------
// 3 - 

function ativo() {
    let caixa = document.getElementById("texto-selecionado");

    let elemento = document.activeElement;
    let selecao = elemento.value.substring(elemento.selectionStart, elemento.selectionEnd);
    caixa.innerHTML = selecao;
}

function inicia() {
    let texto = document.getElementById("texto-original");
    texto.addEventListener("mouseup", ativo);
}

inicia();