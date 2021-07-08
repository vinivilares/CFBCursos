var num // Maximo 10

try {
    num = prompt("Digite um valor")
    if (num > 10) {
        throw new Error("Valor inválido, o valor máximo é 10") // Aparece no console
    }
} catch (e) {
    console.log("ERRO: " + e.message)
    num = 10
} finally {
    document.write("Valor: ", num)
}