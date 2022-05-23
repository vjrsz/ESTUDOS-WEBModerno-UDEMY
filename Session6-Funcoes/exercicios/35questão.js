let vetorPilha = [1, 2, 3, 4, 5]
let vetorAdiciona = [6, 7, 8, 9, 10]

function adicionaVetor(vetorPilha, vetorAdiciona){
    novoVetor = vetorPilha.concat(vetorAdiciona)
    console.log(novoVetor)
}
adicionaVetor(vetorPilha, vetorAdiciona)