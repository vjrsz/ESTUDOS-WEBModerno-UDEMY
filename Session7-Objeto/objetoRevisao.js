//Colecção donamica de pares chave/valor

const produto = new Object()
produto.nome = 'Cadeira'
produto[`marca do produto`] = 'generica'
produto.preco = 220

console.log(produto)
delete produto['marca do produto']
console.log(produto)

const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome: 'Raul',
        idade: 56,
        endereco: {
            logradouro : 'Rua ABC',
            numero: 1
        },
        condutores: [
            {
                nome : 'Junior',
                idade : 28
            }, 
            {
                nome : 'maria',
                idade : 76
            }
        ],
        calcularValorSeguro : function(){
            //.......
        }
    }
}