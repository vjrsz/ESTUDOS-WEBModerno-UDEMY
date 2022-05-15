function trataErroELancar(e){
    // trow new Erro('...')
    // throw 10
    // throw true
    // throw 'mensagem'
}

function imprimirNomeGritado(obj){
    try {
        console.log(obj.name.toUpperCase()+'!!!')
    } catch (e) {
        trataErroELancar(e)
    } finally{
        console.log('final')
    }
}
const obj = {nome : 'Roberto'}
imprimirNomeGritado(obj)