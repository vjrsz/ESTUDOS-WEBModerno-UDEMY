function calcularFuncao(a, b, c){
    delta = b**2 - 4*a*c
    if(delta < 0){
        return 'Delta é negativo'
    }
    primeiraRaiz = (-b + Math.sqrt(delta)) / 2 * a
    segundaRaiz = (-b - Math.sqrt(delta)) / 2 * a

    return [primeiraRaiz, segundaRaiz]
}
console.log(calcularFuncao(3, -5, 12))
console.log(calcularFuncao(1, 3, 2))
console.log(calcularFuncao(3, 2, 1))