function troca(vetor1, vetor2){
    console.log(vetor1, vetor2)
    for(i = 0; i < vetor1.length; i++){ [vetor1[i], vetor2[i]] = [vetor2[i], vetor1[i]] }
    console.log(vetor1, vetor2)
}
let vetorA = [1, 2, 3]
let vetorB = [4, 5, 6]

troca(vetorA, vetorB)