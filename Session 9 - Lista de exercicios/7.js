function estaEntre (num, min, max, inc = false) {
	if ( inc ){
		if( num > min && num < max ) return true
	}else{
		if( num >= min && num =< max ) return true
	}
	return false
}
estaEntre(10, 100, 50) // retornará true
estaEntre(16, 100, 160) // retornará false
estaEntre(3, 150, 3) // retornará false
estaEntre(3, 150, 3, true) // retornará true