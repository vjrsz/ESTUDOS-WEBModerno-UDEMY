//Função em JS é first-class Object (citiziens)

//Literal
function fun1(){}

//Armazenar em um var
const fun2 = function(){}

//Um array
const array = [function(a,b){return a + b}, fun1, fun2]
console.log(array[0](2,3))

//Objeto
const obj = {}
obj.falar = function(){return 'opa'}
console.log(obj.falar())

//funcao com param
function run(fun){
    fun()
}
run(function(){console.log("executando....")})

//Retorna
function soma(a, b){
    return function(c){
        console.log(a+b+c)
    }
}
soma(2,3)(4)
const cincoMais = soma(2,3)
cincoMais(4)




