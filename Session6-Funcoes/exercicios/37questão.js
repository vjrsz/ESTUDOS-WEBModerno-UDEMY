function progressaoAritmetica(n, a1, r){
    vetorPA = []
    for(i = 0;  i < n; i++){
        vetorPA.push(a1+(r*i))
    }
    somaPA = ((a1 + vetorPA[vetorPA.length-1]) * n) / 2
    console.log(`Progressão: ${vetorPA} ; Soma: ${somaPA}`)
}
function progressaoGeometrica(n, a1, r) {
    vetorPG = []
    for(i = 0;  i < n; i++){
        vetorPG.push(a1*Math.pow(r, i))
    }
    somaPG = (a1 * (1 - Math.pow(r, n))) / (1 - r)
    console.log(`Progressão: ${vetorPG} ; Soma: ${somaPG}`)
}
progressaoAritmetica(10, 10, 15)
console.log('----------------');
progressaoGeometrica(10, 5, 3)