function situacao(codigo, nota1, nota2, nota3){
    notas = [nota1, nota2, nota3].sort()
    media = (notas[0]*3 + notas[0]*3 + notas[0]*4)/10
    console.log(notas)
    console.log(`Código do Aluno: ${codigo}. Notas: ${nota1}, ${nota2}, ${nota3}. : ${(media >= 5) ? 'Aprovado' : 'Reprovado' }`)
}

situacao(123, 2.8, 6, 3.5)