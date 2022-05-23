vetorInt = [1, 2, 3 ,4]
vetorStr = ['um', 'dois', 'tres', 'quatro']
vetorDec = [0.1, 0.2, 0.3, 0.4]

vetorUni1 = vetorInt.concat(vetorStr, vetorDec)
vetorUni2 = vetorStr.concat(vetorInt, vetorDec)

console.log(vetorUni1, vetorUni2)
