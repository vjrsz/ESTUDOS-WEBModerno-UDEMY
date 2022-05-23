function Pessoa(nome) {
    this.nome = nome

    this.falar= function(){
        console.log(this.nome)
    }
}

const p1 = new Pessoa('joão')
p1.falar()