function menorNumero (arr) {
	let menor = arr[0]
	arr.forEach((e)=>{
		if(e < menor) menor = e
	})
	return menor 
}
menorNumero([10, 5, 35, 65]) // retornarĂ¡ 5
menorNumero([5, -15, 50, 3]) // retornarĂ¡ -15