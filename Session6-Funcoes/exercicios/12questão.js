function fatorial(num){
    if(num == 0) return 1
    else return fatorial(num-1)*num
}
console.log(fatorial(10))