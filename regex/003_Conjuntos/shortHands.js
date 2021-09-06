const texto=`1,2,3,4,5,6,a.b c!d?e\r	-
f_g`

console.log(texto.match(/\d/g)) // Retornará todos os digitos - Numeros
console.log(texto.match(/\D/g)) // Não números [^0-9]

console.log(texto.match(/\w/g)) // Caracteres [a-zA-Z0-9_]
console.log(texto.match(/\W/g)) // Não caracteres [^a-zA-Z0-9_]

console.log(texto.match(/\s/g)) // Espaços - [ \t\n\r\f\s]
console.log(texto.match(/\S/g)) // Não Espaços - [^ \t\n\r\f\s]

// \b \B