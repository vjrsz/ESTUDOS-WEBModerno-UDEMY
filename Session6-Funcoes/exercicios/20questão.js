function contarCedulas(valor){
    cedulas = [100, 50, 10, 5, 1]
    cedulas.forEach(cedula => {
        numeroDeCedulas = parseInt(valor / cedula)
        valor -= numeroDeCedulas * cedula
        if(numeroDeCedulas > 0) console.log(`${numeroDeCedulas} nota(s) de R$ ${cedula} `)
    });
}
contarCedulas(153)