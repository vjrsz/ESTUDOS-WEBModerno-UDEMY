// par nome/valor
const saudacao = 'Opa' //contexto léxico

function exec(){
    const saudacao = "falaa" // contexto léxico 2
    return saudacao;
}
// Objetos são grupos aninhados de pares nome/valor

const cliente = {
    nome: 'pedro',
    idade: 32,
    peso: 90
}
console.log(saudacao)
console.log(exec())
console.log(cliente)
