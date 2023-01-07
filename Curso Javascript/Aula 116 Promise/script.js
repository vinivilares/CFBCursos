function contar(n) {
    let cont = 0;

    for (let i = 0; i < n; i++) {
        cont++;
    }
    return cont;
}

function contarTempo(n) {
    let cont = 0;
    let t = setTimeout(() => {
        for (let i = 0; i < n; i++) {
            cont++;
        }
    }, 2000)

    return cont;
}

function contarPromisse(n) {
    let cont = 0;
    let p = new Promise((resolve, rejected) => {
        for (let i = 0; i < n; i++) {
            cont++;
        }

        if (cont == n) {
            resolve(cont)
        } else {
            rejected("ERRO")
        }
    })

    return p;
}

function contarPromisseTempo(n) {
    let cont = 0;
    let p = new Promise((resolve, rejected) => {
        
        let t = setTimeout(() => {
            for (let i = 0; i < n; i++) {
                cont++;
            }

            if (cont == n) {
                resolve(cont)
            } else {
                rejected("ERRO")
            }
        }, 3000)

    })

    return p;
}



function somaPositivos(n1, n2) {
    let p = new Promise((res, rej) => {
        if (n1 >= 0 && n2 >= 0) {
            res(n1 + n2)
        } else {
            rej("ERRO")
        }
    })
    return p
}

console.log(contar(10000));
console.log(contarTempo(10));

contarPromisseTempo(10)
    .then(sucesso => console.log("Sucesso: " + sucesso))
    .catch(erro => console.log(erro));

// contarPromisse(10)
//     .then(sucesso => console.log("Sucesso: " + sucesso))
//     .catch(erro => console.log(erro));

// somaPositivos(1, 3)
//     .then(sucesso => console.log("Sucesso: " + sucesso))
//     .catch(erro => console.log(erro));