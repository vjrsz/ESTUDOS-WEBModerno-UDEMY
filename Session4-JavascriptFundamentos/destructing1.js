//ES2015

const pessoa = {
    nome: 'ana',
    idade: 5,
    endereco: {
        logradouro: "rua ABC",
        numero: 100
    }
}

const {nome, idade} = pessoa
console.log(nome, idade)

const {nome : n, idade : i} = pessoa
console.log(n, i)

const {sobrenome, bemHumorada = true} = 
console.log(sobrenome, bemHumorada)

const {endereco: { logradouro, numero, cep} } = pessoa
console.log(logradouro, numero, cep)