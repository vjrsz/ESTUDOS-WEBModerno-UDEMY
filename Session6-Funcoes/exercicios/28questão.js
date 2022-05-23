function lerVetor(vetor){
    impares = 0
    pares = 0
    vetor.forEach(num => {
        num%2 == 0 ? pares++ : impares ++
    });
    console.log(impares, pares)
}
vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
lerVetor(vetor)