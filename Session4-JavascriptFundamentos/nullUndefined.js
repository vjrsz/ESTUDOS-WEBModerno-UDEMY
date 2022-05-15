let valor // Undefined variavel nao inicializada
console.log(valor)

/* ausencia de valor
 * vazia
 * não aponta pra nenhum local de memória
 */
valor = null 
console.log(valor)
// console.log(valor.toString()) ERROR!!!!

const produto = {}

console.log(produto.preco)
// console.log(produto.preco.a) ERROR!!!

produto.preco = 3.50
console.log(produto)

produto.preco = undefined //Não usar... | usar 'delete'
console.log(!!produto.preco) 
console.log(produto)

produto.preco = null
console.log(!!produto.preco) 
console.log(produto)