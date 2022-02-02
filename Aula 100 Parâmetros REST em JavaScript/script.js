/*
// recebe um numero indeterminado de parametros 
function soma(...num) {
    let res = 0;
    // let qtde = num.length;

    for (let i = 0; i < qtde; i++) {
        res += num[i];
    }

    return res;
}

*/

// function soma(...num) {
//     let res = 0;
//     // let qtde = num.length;

//     for (i in num) {
//         res += num[i];
//     }

//     return res;
// }

function soma(...num) {
    let res = 0;
    // let qtde = num.length;

    for (i of num) {
        res += i;
    }

    return res;
}

console.log(soma(100, 200, 50));