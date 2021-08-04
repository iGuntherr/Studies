// pessoa -> 123 - > {...}
const pessoa = {nome: 'João'}
pessoa.nome = 'Pedro'
console.log(pessoa)

// pessoa <- 456 -> {...}
//const pessoa = {nome: 'Ana'}

Object.freeze(pessoa) // Congelando o objeto

pessoa.nome = 'Maria'
pessoa.endereco = 'Rua ABC'
delete pessoa.nome
console.log(pessoa)
