const nome = "Rebeca"
const concatenacao = 'Olá ' + nome + '!'
const Template = `
    Olá
    ${nome}!`

console.log(concatenacao, Template)
console.log(`1 + 1 = ${1 + 1}`)

const up = texto => texto.toUpperCase()
console.log(`Eiii.. ${up('cuidado')}`)
