function Aula(nome, videoID){
    this.nome = nome
    this.nome = videoID
}

const aula1 = new Aula('bem vindo', 123)
const aula2 = new Aula('até breve', 456)
console.log(aula1, aula2)
// simulando new
function novo(f, ...params){
    const obj = {}
    obj.__proto__ = f.prototype
    f.apply(obj, params)
    return obj
}
const aula1 = new novo('bem vindo', 123)
const aula2 = new novo('até breve', 456)
console.log(aula1, aula2)