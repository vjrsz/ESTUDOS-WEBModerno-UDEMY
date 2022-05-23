function multiplicaNumVetor(vetor, num){
    resp = []
    vetor.forEach(elem => { resp.push(elem*num) });
    return resp
}
function multiplicaNumVetorMaiorQueCinco(vetor, num){
    resp = []
    vetor.forEach(elem => { elem > 5 ? resp.push(elem*num) : resp.push(elem)});
    return resp
}
let vetor = [1, 2, 3, 4, 5]
console.log(multiplicaNumVetor(vetor, 3))
console.log(multiplicaNumVetorMaiorQueCinco(vetor, 3))