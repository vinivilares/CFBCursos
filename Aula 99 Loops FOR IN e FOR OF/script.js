/*
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

// imprime propriedade
for (let dado in aluno) {
    console.log(dado)
}

// imprime conteudo
for (let dado in aluno) {
    console.log(aluno[dado]);
}

for (let dado in info) {
    console.log(info[dado]);
}
*/

let notas = [10, 40, 30, 50, 80];
let aprovados = 0;
let reprovados = 0;

for (let n of notas) {
    n >= 60 ? aprovados++ : reprovados++
}
console.log("Aprovados: " + aprovados);
console.log("Reprovados: " + reprovados);

// for (let n in notas) {
//     console.log(n);
// }

// for (let n of notas) {
//     console.log(n);
// }