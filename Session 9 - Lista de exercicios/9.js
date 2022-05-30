function repetir(value, max){
	var result = []
	for (var i = 0; i < max; i++) {
		result.push(value)
	}
	return result
}
repetir("código", 2) // retornará ["código", "código"]
repetir(7, 3) // retornará [7, 7, 7]