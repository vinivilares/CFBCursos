let colabJSON = '{"colaboradores":[{"nome":"Jose","salario":10000,"idade":40},{"nome":"Maria","salario":12000,"idade":30},{"nome":"João","salario":13000,"idade":26},{"nome":"Marcia","salario":14000,"idade":33}]}'

let colabOBJ = {
    colaboradores: [
        {nome: "Jose", salario: 10000, idade: 40},
        {nome: "Maria", salario: 12000, idade: 30},
        {nome: "João", salario: 13000, idade: 26},
        {nome: "Marcia", salario: 14000, idade: 33}
    ]
}

let c_OBJ = JSON.parse(colabJSON)
let c_JSON = JSON.stringify(colabOBJ)

console.log(colabJSON)
console.log(colabOBJ)