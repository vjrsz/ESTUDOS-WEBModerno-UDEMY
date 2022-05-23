function calcAltura(altura1, taxa1, altura2, taxa2){
    [menor, maior, taxaMenor, taxaMaior] = altura1  < altura2 ? [altura1, altura2, taxa1, taxa2] : [altura2, altura1, taxa2, taxa1]
    ano = -1
    while(menor <= maior){
        menor *= 1 + taxaMenor
        maior *= 1 + taxaMaior
        ano++
    }
    return ano

}
console.log(calcAltura(150, 2, 130, 4));