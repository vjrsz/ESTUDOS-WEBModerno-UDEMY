function contarCaractere (c, str) {
	contador = 0
	for (var i = 0; i < str.length; i++) {
		if(str[i] == c) contador+=1 	
	}
	return contador
}
contarCaractere("r", "A sorte favorece os audazes") // retornará 2
contarCaractere("c", "Conhece-te a ti mesmo") // retornará 1