function conceitosNotas( vetor ){ 
    vetor.forEach(nota => {
        if(nota < 5) console.log(`${nota} : D`)
        else if(nota < 7) console.log(`${nota} : C`)
        else if(nota < 9) console.log(`${nota} : B`)
        else console.log(`${nota} : A`)
    });
}
let notas = [10, 13, 9, 8.2, 2.5, 7.7, 6.8]
conceitosNotas(notas)