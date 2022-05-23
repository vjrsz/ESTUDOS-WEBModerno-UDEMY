function lerVetor(vetor){
    negativo = 0
    vetor.forEach(num => {
        negativo += num < 0 ? 1 : 0
    });
    console.log(negativo)
}
vetor =  [10, 5, -7, 3, -1, 3, -11, -20, 6, 9]
lerVetor(vetor)