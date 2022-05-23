function novoSalario(plano, salarioAtual){
    switch (plano) {
        case 'A':
            return salarioAtual + (salarioAtual * 0.1)
        case 'B':
            return salarioAtual + (salarioAtual * 0.15)
        case 'C':
            return salarioAtual + (salarioAtual * 0.2)
        default:
            return 'Plano Invalido'
    }
}

console.log(novoSalario('A', 1000));
console.log(novoSalario('B', 1000));
console.log(novoSalario('C', 1000));
console.log(novoSalario('D', 1000));