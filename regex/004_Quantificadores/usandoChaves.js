const texto =  'O João recebeu 120 milhões apostando o valor 6 9 21 23 45 46'

// Para definir um quantificador usa {}
console.log(texto.match(/\d{1,2}/g))
console.log(texto.match(/[0-9]{2}/g))
console.log(texto.match(/\d{1,}/g))

console.log(texto.match(/\w{7}/g))
console.log(texto.match(/[\wõ]{7,}/g))

// no futuro...
console.log(texto.match(/\b\d{1,2}\b/gi))
console.log(texto.match(/\b[\wõ]{7}\b/g))
