function funcaoDaSorte (a) {
	let num = Math.floor(Math.random() * 100) + 1;
	if (a == num) return `Parabéns! O número sorteado foi o ${num}`
	else return `Que pena! O número sorteado foi o ${num}
}
funcaoDaSorte(10) // retornará "Parabéns! O número sorteado foi o 10"
funcaoDaSorte(5) // retornará "Que pena! O número sorteado foi o 3"
funcaoDaSorte(5) // retornará "Que pena! O número sorteado foi o 1"
