const Carro = {
    marca: "VW",
    modelo: "Golf",
    info: function () {
        console.log("Marca: " + this.marca)
        console.log("Modelo: " + this.modelo)
    }
}


// Instanciando objeto
let c1 = Object.create(Carro)

c1.marca = "GM"
c1.modelo = "Camaro"

let c2 = Object.create(Carro)

c2["marca"] = "Ford"
c2["modelo"] = "Ka"

Carro.info()
c1.info()
c2.info()


const Veiculo = {
    marca: "VW",
    modelo: "Golf",
    info: function () {
        console.log("Marca: " + this.marca)
        console.log("Modelo: " + this.modelo)
    }
}


const Caracteristicas = {
    cor: "Cinza",
    cambio: "Automático"
}

delete Caracteristicas.cor

// Mesclagem de Objeto
const Car = Object.assign(Veiculo, Caracteristicas)

console.log(Car)

Car.info()

// Variaveis comuns que puxam os atributos do objeto
let {marca, modelo} = Veiculo
console.log(marca)