function lerVetor(vetor){
    dentro = 0
    fora = 0
    vetor.forEach(num => {
        num >= 10 && num <= 20 ? dentro++ : fora++
    });
    console.log(fora, dentro)
}
vetor = [ 7, 8, 9, 10, 11, 12, 16, 17, 18, 19, 20, 21]
lerVetor(vetor)