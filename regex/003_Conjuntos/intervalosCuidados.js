const texto = 'ABC [abc] a-c 1234'

console.log(texto.match(/[a-c]/g))
console.log(texto.match(/a-c/g)) // Não define o Range

console.log(texto.match(/[A-z]/g)) // Intervalos usam a ordem da tabela UNICODE - Desta forma trará alguns simbolos tambem
console.log(texto.match(/[A-Za-z]/g)) // Desta forma trará apenas letras

// Tem que respeitar a ordem da tabela UNICODE
// console.log(texto.match(/[a-Z]/g)) // Gera erro
//console.log(texto.match(/[4-1]/g)) // Gera erro