let num = [1, 4, 9, 16, 25]

let raiz = num.map(Math.sqrt)

for (let i = 0; i < num.length; i++) {
    console.log("Numero: " + num[i] + " - Raiz: " + raiz[i])
}

let dobros = num.map((n) => {
    return n*2
})

console.log("-----------------------------------")

for (let i = 0; i < num.length; i++) {
    console.log("Numero: " + num[i] + " - Dobro: " + dobros[i])
}