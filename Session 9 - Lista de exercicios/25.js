function removerVogais (str) {
	return str.replace(/a|e|i|o|u/g, "")
}
removerVogais("Cod3r") // retornará "Cd3r"
removerVogais("Fundamentos") // retornará "Fndmnts"
