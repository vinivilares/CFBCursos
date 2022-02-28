// let produtos = new Map()

let produtos = new Map([
    ["01", "Mouse"],
    ["02", "Teclado"],
    ["03", "Monitor"],
    ["04", "Gabinete"]
])


// produtos.set("05", ["Memória", "R$ 199,90"])
console.log("Tamanho: " + produtos.size)
console.log(produtos.get("01"))
console.log(produtos.get("03"))
console.log(produtos.get("02"))
console.log(produtos.get("04"))
// console.log(produtos.get("05"))

// produtos.clear()
produtos.delete("05")

function info(chave, valor) {
    console.log("Chave: " + chave + " - Valor: " + valor)
}

produtos.forEach(info)

let itk = produtos.keys()
let itv = produtos.values()

console.log(itk.next().value)
console.log(itv.next().value)


for (p of produtos) {
    // console.log(p)
    // console.log(p[0])
    console.log(p[1])
}

console.log(produtos.has("02") ? "Existe" : "Não existe")