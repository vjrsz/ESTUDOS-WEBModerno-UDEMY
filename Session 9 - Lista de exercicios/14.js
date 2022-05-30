function objetoParaArray(obj){
	let keys = Object.keys(obj)
	let array = []
	for (var i = 0; i < keys.length; i++) {
		array.push([keys[i], obj[keys[i]]])
	}
}

objetoParaArray({
nome: "Maria",
profissao: "Desenvolvedora de software"
}) // irá retornar [["nome", "Maria"], ["profissao", "Desenvolvedora de Software"]]
objetoParaArray({
codigo: 11111,
preco: 12000
}) // irá retornar [["codigo", 11111], ["preco", 12000]]