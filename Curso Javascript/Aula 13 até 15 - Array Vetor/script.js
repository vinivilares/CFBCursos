// var cor = new Array()
var itens = ["Faca", "Pederneira", "Corda", "Lanterna", "Luvas", "Chave", "Arame"]
var mochila = [], mochila1 = [], mochila2 = [], pos

// var num = [5, 8, 4, 9, 7, 6, 3, 0, 2, 1]
// var numeros

// num.sort()
// num.reverse()

// numeros = num.join()
// document.write(numeros + "<br>")

// document.write(num[0]+"<br>")
// document.write(num[1]+"<br>")
// document.write(num[2]+"<br>")
// document.write(num[3]+"<br>")
// document.write(num[4]+"<br>")
// document.write(num[5]+"<br>")
// document.write(num[6]+"<br>")
// document.write(num[7]+"<br>")
// document.write(num[8]+"<br>")
// document.write(num[9]+"<br>")

/*
    .concat     Retorna um novo array contendo todos os arrays ou valores passados como parâmetro
    .join()     Junta todos os elementos de um array e retorna uma String
    .sort()     Ordena os elementos em ordem crescente
    .reverse()  Inverte o vetor
    .push()     Insere no final do Array
    .unshift()  Insere no inicio do Array
    .pop()      Remove o ultimo elemento do Array
    .shift()    Remove o primeiro elemento do Array
    .splice()   Remove a partir de um indice a quantidade de elementos (2,1) posição 2, 1 elemento
    .indexOf()  Retorna o index de um elemento, se não existir retorna -1
    .lenght     Retorna o tamanho de um Array
*/

mochila1.push("Faca")
mochila1.push("Corda")
mochila1.push("Pederneira")
mochila1.push("Chave")
mochila1.push("Lanterna")
mochila1.push("Pedra")

mochila2.push("Arame")
mochila2.push("Luvas")
mochila2.push("Joelheira")
mochila2.push("Meias")
mochila2.push("Moeda")
mochila2.push("Canivete")

mochila = mochila1.concat(mochila2)

document.write(mochila[0]+"<br>")
document.write(mochila[1]+"<br>")
document.write(mochila[2]+"<br>")
document.write(mochila[3]+"<br>")
document.write(mochila[4]+"<br>")
document.write(mochila[5]+"<br>")
document.write(mochila[6]+"<br>")
document.write(mochila[7]+"<br>")
document.write(mochila[8]+"<br>")
document.write(mochila[9]+"<br>")
document.write(mochila[10]+"<br>")
document.write(mochila[11]+"<br>")

document.write("Tamanho da mochila 1: " + mochila1.length + "<br>")
document.write("Tamanho da mochila 2: " + mochila2.length + "<br>")
document.write("Tamanho da mochila : " + mochila.length + "<br>")