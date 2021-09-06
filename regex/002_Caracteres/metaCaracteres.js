// . ? * + - ? ^ $ | [ ] { } ( ) \ :

const texto = `1,2,3,4,5,6,a.b c!d?e`

const regexPonto=/\./   // IMPORTATE: A \ é usada como scape, como o ponto é uma expressão no regex, para conseguir
                        //localiza-lo precisamos usar a barra (\) para buscar a conotação literal.

console.log(texto.split(regexPonto))

const regexSimbolos = /,|\.|\?|!| /g

console.log(texto.split(regexSimbolos))