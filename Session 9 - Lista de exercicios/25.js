function removerVogais (str) {
	return str.replace(/a|e|i|o|u/g, "")
}
removerVogais("Cod3r") // retornarĂ¡ "Cd3r"
removerVogais("Fundamentos") // retornarĂ¡ "Fndmnts"
