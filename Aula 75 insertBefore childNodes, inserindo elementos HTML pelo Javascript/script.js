document.getElementById("btnContar").addEventListener("click", function() {
    let lista = document.getElementById("listaElementos");
    let num = lista.childNodes.length;
    alert("Número de elementos da lista: " + num);
})

document.getElementById("btnAdd").addEventListener("click", function() {
    let lista = document.getElementById("listaElementos");
    let texto = document.getElementById("fnovo");
    let li = document.createElement("li");

    li.textContent = texto.value;
    lista.insertBefore(li, lista.childNodes[0]);
    texto.value = "";
    texto.focus();
});