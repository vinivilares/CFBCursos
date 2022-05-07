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

async function contarPromisseAsync(n) {
    const r = await contarPromisse(n);
    console.log(r)
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
        }, 2000);

    })

    return p;
}

async function contarPromisseTempoAsync(n) {
    const r = await contarPromisseTempo(n);
    console.log(r);
}

contarPromisseTempoAsync(10);
contarPromisseAsync(5)

// contarPromisse(10)
//     .then(sucesso => console.log("Sucesso: " + sucesso))
//     .catch(erro => console.log(erro));