class Pessoa {
    constructor (nome) {
        this.nome = nome
    }

    falar() {
        console.log(this.nome)
    }
}

const p1 = new Pessoa('joão')
p1.falar()

const criarPessoa= nome => {
    return {
        falar: () => console.log(nome)
    }
}

const p2 = new Pessoa('joão')
p2.falar()