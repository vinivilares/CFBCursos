// Classe
class Carro {
    //Atributos fora do construtor | Menos utilizado
    // cor = "Vermelho"

    // Elementos estaticos
    static alerta = true

    // Método Construtor
    constructor(marca, modelo, cor) {
        // Atributos dentro do construtor | Mais utilizado
        // this.cor = "Vermelho"
        this.marca = marca
        this.modelo = modelo
        this.cor = cor
        this.ligado = false
        this.km = 0
        this.combustivel = 10
    }

    // Métodos
    info() {
        console.log("Marca......: " + this.marca)
        console.log("Modelo.....: " + this.modelo)
        console.log("Cor........: " + this.cor)
        console.log("Ligado.....: " + (this.ligado ? "Sim" : "Não"))
        console.log("KM.........: " + this.km)
        console.log("Combustivel: " + this.getCombustivel)
        console.log("Alerta.....: " + (Carro.alerta ? "Sim" : "Não"))
        console.log("--------------------")
    }

    ligar() {
        this.ligado = true
    }

    desligar() {
        this.ligado = false
    }

    // Getter e Setter
    set setCombustivel(v) {
        if (v < 0 || v > 100) {
            alert("Valor inválido")
        } else {
            this.combustivel = v;
            console.log("Combustível alterado, valor atual: " + this.combustivel)
        }
    }

    get getCombustivel() {
        return this.combustivel
    }

    set setAlerta(t) {
        Carro.alerta = t
    }

    get getAlerta() {
        return Carro.alerta
    }
}

// Instância 
// let c1 = new Carro()
let c1 = new Carro("Honda", "HRV", "Prata")
let c2 = new Carro("VW", "Golf", "Branco")
let c3 = new Carro("GM", "Camaro", "Preto")
let c4 = new Carro("Ford", "Mustang", "Vermelho")

c1.setCombustivel = 100
c1.setAlerta = false

c1.ligar()
// c4.ligar()

console.log(c1.getAlerta)
console.log(c1.getCombustivel)
c1.info()
c2.info()
c3.info()
c4.info()