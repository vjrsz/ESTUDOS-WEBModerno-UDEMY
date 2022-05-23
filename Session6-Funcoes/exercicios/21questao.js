function valorASerPago(idade){
    if (idade < 10) return 180
    else if (idade < 30) return 150
    else if (idade < 60) return 195
    else return 230
}

console.log(valorASerPago(8));
console.log(valorASerPago(15));
console.log(valorASerPago(35));
console.log(valorASerPago(52));
console.log(valorASerPago(80));