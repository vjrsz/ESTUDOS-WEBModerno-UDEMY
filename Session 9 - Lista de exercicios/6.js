function inverso(value){
	let tipo = typeof value
	if(tipo == 'number'){
		return value * -1
	}else if(tipo == 'boolean'){
		return value ? false : true
	}else{
		return 'booleano ou números esperado, mas o parâmetro é do tipo string'
	}
}

inverso(true) // retornará false
inverso("6") // retornará "booleano ou número esperados, mas o parâmetro é do tipo string"
inverso(-2000) // retornará 2000
inverso("programação") // retornará "booleano ou números esperado, mas o parâmetro é do tipo string"