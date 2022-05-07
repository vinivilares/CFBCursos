let pessoas = [
    {nome: "Marcus", idade: 26},
    {nome: "Josefo", idade: 42},
    {nome: "Creuza", idade: 66},
    {nome: "Uberaldo", idade: 56}
]

let nomes = pessoas.reduce((p1, p2) => {
    p1.push(p2.nome)
    return p1
}, [])

let idades = pessoas.reduce((p1, p2) => {
    p1.push(p2.idade)
    return p1
}, [])

console.log(nomes)
console.log(idades)

// let num = [0, 1, 2, 3, 4, 5];

// let soma = num.reduce((n1,n2) => {
//     console.log(`${n1} + ${n2}`)
//     return n1 + n2;    
// })

// console.log(soma)