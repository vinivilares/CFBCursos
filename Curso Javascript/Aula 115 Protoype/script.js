// Classe
class Carro {

    constructor(tpCarro, tpComb) {
        this.tipo = tpCarro // 1=Passeio, 2=Transporte, 3=Combate
        this.qtdeComb = 100
        this.ligado = false
        this.tipoComb = tpComb //1=Gasolina, 2=Diesel, 3=Etanol
    }

    // Métodos
    info() {
        console.log("Qtde Combustivel: " + this.qtdeComb)
        console.log("Ligado..........: " + (this.ligado ? "Sim" : "Não"))

        if (this.tipoComb == 1) {
            console.log("Tipo Combustivel: Gasolina")

        } else if (this.tipoComb == 2) {
            console.log("Tipo Combustivel: Diesel")
        } else {
            console.log("Tipo Combustivel: Etanol")
        }

        if (this.tipo == 1) {
            console.log("Tipo Carro......: Passeio")

        } else if (this.tipo == 2) {
            console.log("Tipo Carro......: Transporte")
        } else {
            console.log("Tipo Carro......: Combate")
        }
    }

    // Getter e Setter
    set setLigar(t) {
        this.ligado = t
    }

    get getLigar() {
        return this.ligado
    }

    set setCombustivel(v) {
        if (v < 0 || v > 100) {
            alert("Valor inválido")
        } else {
            this.qtdeComb = v;
        }
    }

    get getCombustivel() {
        return this.qtdeComb
    }
}

// Herança
class CarroCombate extends Carro {
    constructor(potTiro) {
        super(3, 3)

        this.tiros = 1000
        this.potTiro = potTiro
        this.blindagem = 100
    }

    info() {
        super.info()
        console.log("Qtde Tiros......: " + this.tiros)
        console.log("Potência Tiro...: " + this.potTiro)
        console.log("Blindagem.......: " + this.blindagem)
    }
}

class CarroTransporte extends Carro {
    constructor() {
        super(2, 2)
    }
}

// Object.prototype
Carro.prototype.potencia = 500
Carro.prototype.velocidade = 100
Carro.prototype.velMax = 200

Carro.prototype.info2 = function () {
    this.info()
    console.log("-----------------------")
    console.log("Potência........: " + this.potencia)
    console.log("Velocidade......: " + this.velocidade)
    console.log("Vel. Máxima.....: " + this.velMax)
    console.log("-----------------------")
}

let c1 = new CarroCombate(100)
let c2 = new CarroTransporte()

c1.setLigar = true
// c1.info()
// c2.info()
// console.log(c1.potencia)

c1.info2()