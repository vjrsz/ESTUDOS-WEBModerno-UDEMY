function removerPropriedade (obj, key) {
	return delete obj[key]	
}

removerPropriedade({a: 1, b: 2}, "a") // retornará {b: 2}
removerPropriedade({
	id: 20,
	nome: "caneta",
	descricao: "Não preenchido"
	}, "descricao") // retornará {id: 20, nome: "caneta["}]