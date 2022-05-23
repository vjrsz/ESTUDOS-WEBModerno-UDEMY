function juroSimples(capital, taxaJuros, tempo){
    console.log(capital*(1+taxaJuros*tempo))
}
function jurosComposto(capital, taxaJuros, tempo){
    console.log(capital*(1+taxaJuros)**tempo)
}
juroSimples(100, 10/100, 2)
jurosComposto(100, 10/100, 2)