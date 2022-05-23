// pessoa -> 123 -> {...}

const pessoa = {nome: 'joao'}
pessoa.nome = 'Pedro'
console.log(pessoa)

// pessoa -> 456 -> {...}
// pessoa = {nome: 'Ana'} ERRO

Object.freeze(pessoa)

pessoa.nome = 'Maria'
console.log(pessoa.nome)

