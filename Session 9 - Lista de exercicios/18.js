function calcularMedia (arr) {
	let media = 0
	arr.forEach((e)=>{media += e})
	return media/arr.length
}
calcularMedia([0, 10]) // retornarĂ¡ 5
calcularMedia([1, 2, 3, 4, 5]) // retornarĂ¡ 3