function  simboloMais (max) {
	var result = ''
	for (var i = 0; i < max; i++) {
		result += '+'
	}
	return result
}
simboloMais(2) // retornará "++"
simboloMais(4) // retornará "++++"