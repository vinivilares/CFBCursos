const alo = function () {
    return "Ola, Mundo!"
}

console.log(alo())


const soma = function (...num) {
    let res = 0;
    for (n of num) {
        res += n;
    }
    return res;
}

console.log(soma(1, 2, 3));
console.log(soma(1, 2));
console.log(soma(1));
console.log(soma);