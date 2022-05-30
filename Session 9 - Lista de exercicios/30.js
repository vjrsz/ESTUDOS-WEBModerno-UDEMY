function somarNumeros (arr) {
	let total = 0
	arr.forEach( function(element, index) {
 		total += element
	});
	return total
}
somarNumeros([10, 10, 10]) // retornará 30
somarNumeros([15, 15, 15, 15]) // retornará 60