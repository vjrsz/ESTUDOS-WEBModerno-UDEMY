function checarAnoBissexto(age) {
	if(age % 4 == 0){
		if(age % 100 == 0){
			if(age % 400 == 0){ return true }
		}else{ return true }
	}
	return false
}
checarAnoBissexto(2020) // retornará true
checarAnoBissexto(2100) // retornará false, pois é múltiplo de 100 e não é múltiplo de 400