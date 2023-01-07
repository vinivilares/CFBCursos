function escreve() {
    document.write("Curso de JavaScript - CFB Cursos<br>")
}
escreve()

function soma1(n1, n2) {
    var res = n1 + n2
    document.write(res, "<br>")
}
soma1(5, 2)
soma1(10, 20)
soma1(0, 1)

function soma2(n1, n2) {
    return n1 + n2
}
var res = soma2(7, 7)
document.write(res, "<br>")

var numeros = [10, 2, 5, 30, 25, 19, 20, 50, 40, 150]

function media(nums) {
    var tam = nums.length
    var soma = 0
    for (var i = 0; i < tam; i++) {
        soma += nums[i]
    }
    return Math.round(soma / tam)
}

document.write(media(numeros))