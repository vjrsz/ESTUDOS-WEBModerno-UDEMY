function itemPedido(codigo, qauntidade){
    switch(codigo) {
        case 100 : return qauntidade*3
        case 200 : return qauntidade*4
        case 300 : return qauntidade*5.5
        case 400 : return qauntidade*7.5
        case 500 : return qauntidade*3.5
        case 600 : return qauntidade*3.8
        default: return 'Codigo invalido'
    }
}
console.log(itemPedido(100, 2))
console.log(itemPedido(200, 2))
console.log(itemPedido(300, 2))
console.log(itemPedido(400, 2))
console.log(itemPedido(500, 2))
console.log(itemPedido(600, 2))
console.log(itemPedido(700, 2))