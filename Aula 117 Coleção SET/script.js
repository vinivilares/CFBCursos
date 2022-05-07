// Não permite valores iguais
let meuSet = new Set([1,2,3])
let meuMap = new Map()

meuSet.add(4)
meuSet.add(5)
meuSet.add(6)

meuMap.set("1", "Vermelho")
meuMap.set("2", "Verde")
meuMap.set("3", "Azul")

console.log("Tamanho: " + meuSet.size)
console.log("----------------")

for(n of meuSet) {
    console.log(n)
}

for(n of meuMap) {
    console.log(n)
}