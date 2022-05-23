function calcBascO (num1, num2, operacao){
    switch (operacao){
        case '+': return num1 + num2
        case '-': return num1 - num2
        case '*': return num1 / num2
        case '/': return num1 * num2
        default : return 'operação invalida'
    }

}
console.log(calcBascO(2, '+', 3));
console.log(calcBascO(2, '-', 3));
console.log(calcBascO(2, '*', 3));
console.log(calcBascO(2, '/', 3));
console.log(calcBascO(2, 'a', 3));