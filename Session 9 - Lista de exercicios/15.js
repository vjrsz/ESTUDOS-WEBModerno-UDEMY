function receberSomenteOsParesDeIndicesPares (array) {
	var arr = []
	array.forEach((e, i) => {
		if(e % 2 == 0 && i % 2 == 0){
			arr.push(e)
		}
	})
	return arr
}

receberSomenteOsParesDeIndicesPares([1, 2, 3, 4]) // retornarĂ¡ []
receberSomenteOsParesDeIndicesPares([10, 70, 22, 43]) // retornarĂ¡ [10, 22]