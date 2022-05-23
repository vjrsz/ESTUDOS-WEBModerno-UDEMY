function calcularPontuacao(str){
    let pontuacoes = str.split(' ')
    let [maior, menor] = [parseInt(pontuacoes[0]), parseInt(pontuacoes[0])]
    let [quantMaior, piorJogo] = [0, 0]

    pontuacoes.forEach((pontuacao, i) => {  
        if(parseInt(pontuacao) > maior) { maior = pontuacao; quantMaior++}
        if(parseInt(pontuacao) < menor) { menor = pontuacao; piorJogo = i}
    });
    return [quantMaior, piorJogo+1]
}
console.log(calcularPontuacao('10 20 20 8 25 3 0 30 1'))