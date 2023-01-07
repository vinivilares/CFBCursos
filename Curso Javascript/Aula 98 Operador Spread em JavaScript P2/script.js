const produtos = [
    {
        id: "001",
        desc: ["Mouse", "25.00"]
    },
    {
        id: "002",
        desc: ["Teclado", "50.00"]
    },
    {
        id: "003",
        desc: ["Monitor", "430.00"]
    }
];

const p = [
    ...produtos
]

console.log(...produtos);
console.log(p);

const n1 = [100, 200, 300];
const n2 = [400, 500, 600];
const n3 = [700, 800, 900];
const n4 = [...n1, ...n2, ...n3];

console.log(n4);

const aluno = {
    nome: "Marcus",
    sobrenome: "Vinicius"
}

const notas = {
    n1: 80,
    n2: 75,
    n3: 92,
    n4: 85
}

const info = { ...aluno, ...notas };
console.log(info)

