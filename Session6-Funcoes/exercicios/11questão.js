function verificaAno(ano){
    if (ano >= 400 && ano%400 == 0) { return true }
    else if ( ano%4 == 0 && ano%100 != 0) { return true }
    return false
}
console.log(verificaAno(0))
console.log(verificaAno(4))
console.log(verificaAno(100))
console.log(verificaAno(400))
console.log(verificaAno(800))
console.log(verificaAno(2020))
console.log(verificaAno(2021))