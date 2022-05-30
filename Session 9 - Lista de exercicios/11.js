function receberPrimeiroEUltimoElemento(array){
	return [ array[0], array[array.length - 1] ]
}

receberPrimeiroEUltimoElemento([7,14,"olá"]) // retornará [7, "olá"]
receberPrimeiroEUltimoElemento([-100, "aplicativo", 16]) // retornará [-100, 16]