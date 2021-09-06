const texto = '.$+*?-'

console.log(texto.match(/[+.?*$]./g)) // Não precisa de escape dentro do conjunto
console.log(texto.match(/[$-?]/g)) // Isso é um intervalo válido

// NÃO é um intervalo (range)...
console.log(texto.match(/[$\-?]/g))
console.log(texto.match(/[-?]/g))

// Pode precisar de escape dentro do conjunto: - [ ] ^