function lerVetor(vetor){
    media = 0
    vetor.forEach(num => { media += num });
    media /= vetor.length
    console.log(media)
}
vetor = [1, 2, 3, 4, 5]
lerVetor(vetor)