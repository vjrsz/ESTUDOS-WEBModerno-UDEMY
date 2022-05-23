const notas =[6, 7, 8, 9, 10]

for(let i in notas){
    console.log(`notas: ${i}, ${notas[i]}`)
}
const pessoa = {
    nome: 'pedro',
    idade: 32,
    peso: 90
}
for(let atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`)
}