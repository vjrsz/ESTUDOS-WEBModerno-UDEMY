function formatarDinheiro(valor){
    return `R$ ${valor.toFixed(2).toString().replace(".", ",")}`
}
console.log(formatarDinheiro(0.1 + 0.2))