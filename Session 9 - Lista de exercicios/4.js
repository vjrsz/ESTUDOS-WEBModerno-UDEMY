function nomeDoMes(num){
	const meses = [
		'janeiro', 'fevereiro', 'março', 'abril', 'junho',
		'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'
	]

	return meses[num+1]
}
nomeDoMes(1) // retornará "janeiro"
nomeDoMes(4) // retornará "abril"
