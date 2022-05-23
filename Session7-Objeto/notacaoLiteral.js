const a = 1
const b = 2
const c = 3

const obj = { a, b, c }
console.log(obj)

const nome = 'nota'
const valor= 7
const obj2 = {}
obj2[nome] = valor
const obj3 = { [nome]: valor}
console.log(obj2)
console.log(obj3)

const obj4 = {
    funcao1(){
        //....
    }
}
console.log(obj4)