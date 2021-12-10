document.getElementById("btnAdd").addEventListener("click", function() {
    let lista = document.getElementById("listaElementos");
    let texto = document.getElementById("fnovo");
    let li = document.createElement("li");

    li.textContent = texto.value;
    lista.appendChild(li);
    texto.value = "";
    texto.focus();
})