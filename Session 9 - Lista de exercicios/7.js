function estaEntre (num, min, max, inc = false) {
	if ( inc ){
		if( num > min && num < max ) return true
	}else{
		if( num >= min && num =< max ) return true
	}
	return false
}
estaEntre(10, 100, 50) // retornarĂ¡ true
estaEntre(16, 100, 160) // retornarĂ¡ false
estaEntre(3, 150, 3) // retornarĂ¡ false
estaEntre(3, 150, 3, true) // retornarĂ¡ true