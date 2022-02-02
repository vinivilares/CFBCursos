const soma = (...num) => {
    let r = 0;
    for (i in num) {
        r += num[i];
    }
    return r;
}

const par = num => {
    if (num % 2 == 0) {
        return true;
    } else {
        return false;
    }
}

console.log(soma(2,3));
console.log(par(1) ? "Par" : "Ímpar")
