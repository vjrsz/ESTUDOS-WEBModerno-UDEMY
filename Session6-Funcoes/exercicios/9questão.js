function classificaAluno(nota){
    nota = (nota  >= 38 && (nota/5).toFixed(0) * 5 - nota < 3)  ? (nota/5).toFixed(0) * 5 : nota
    if(nota <= 40) { console.log(`Reprovado com nota ${nota}`) } 
    else { console.log(`Aprovado com nota ${nota}`) }
}

classificaAluno(100)
classificaAluno(30)
classificaAluno(38)
classificaAluno(88)
classificaAluno(61)
