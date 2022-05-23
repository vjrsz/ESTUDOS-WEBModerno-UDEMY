Number.prototype.entre = function (inicio, fim){
    return this >= inicio & this <= fim
}
const imprimirResultado = function(nota){
    if(nota.entre(9, 10)){
        console.log('Quadro de Honra')
    }else if(nota.entre(7, 8.99)){
        console.log('Aprovado')
    }
    /* ... */
    else{
        console.log('nota Inválida')
    }
}
imprimirResultado(10)
imprimirResultado(7)
imprimirResultado(-1)
imprimirResultado(11)