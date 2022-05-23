function anuidade(mes, valor){
    if (mes < 1 || mes > 12 ) return 'Mes Invalido'
    return (valor * Math.pow(1.05, mes-1)).toFixed(2)
}
console.log(anuidade(4, 100))