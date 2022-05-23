function lerVetor(vetor){
    maior = 0
    menor = vetor[1]
    vetor.forEach(num => {
        maior = num > maior ? num : maior
        menor = num < menor ? num : menor
    });
    console.log(menor, maior)
}
vetor =  [10, 5, 7, 3, 1, 3, 11, 20, 6, 9]
lerVetor(vetor)