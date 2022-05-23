function venderCarro(carro){
    switch(carro){
        case 'hatch': return 'Compra efetuada com sucesso'
        case 'sedans':
        case 'motocicletas' :
        case 'caminhontes': return 'Tem certeza que não prefere este modelo?'
        default: return 'Não trabalhamos com este tipo de automóvel aqui'
    }
}
console.log(venderCarro('hatch'));
console.log(venderCarro('motocicleta'));
console.log(venderCarro('sedan'));
console.log(venderCarro('caminhonete'));
console.log(venderCarro('jetski'));
