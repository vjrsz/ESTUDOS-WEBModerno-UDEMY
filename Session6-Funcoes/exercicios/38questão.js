function impares(inicio = 0, fim = 100){
    [inicio, fim] = inicio > fim ? [fim, inicio] : [inicio, fim]

    for (inicio; inicio <= fim; inicio++){
        console.log(inicio % 2 != 0 ? inicio : '')
    }
}
impares()
impares(19, 3)