const obj1 = {}
console.log(obj1)

console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

function Produto(nome, preco, desc){
    this.nome = nome
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }
}

const p1 = new Produto("caneta", 7.99, 0.15)
const p2 = new Produto('Notebook', 2989.99, 0.25)
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())


//FUNCAO FACTORY

//Object.create
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

const fromJSON = JSON.parse('{"info": "souum JSON"}')
console.log(fromJSON.info)