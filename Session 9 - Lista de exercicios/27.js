function filtrarPorQuantidadeDeDigitos (arr, i) {
	let result = []
	arr.forEach( function(e, index) {
		if(e/10**i < 0){
			result.push(e)
		}
	});
	return result
}
filtrarPorQuantidadeDeDigitos([38, 2, 365, 10, 125, 11], 2) // retornará [38, 10, 11]
filtrarPorQuantidadeDeDigitos([5, 9, 1, 125, 11], 1) // retornará [5, 9, 1]