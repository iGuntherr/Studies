const texto = '0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f'

const regexNove = RegExp('9')
console.log('Métodos da RegExp...')
console.log(regexNove.test(texto)) // Verifica se o valor da variavel existe  dentro do conjunto de texto.
console.log(regexNove.exec(texto)) // Executa a variavel dentro do texto e retornar informações de localização.

const regexLetras = /[a-f]/g
console.log('Métodos da String...')
console.log(texto.match(regexLetras))
console.log(texto.search(regexLetras))
console.log(texto.replace(regexLetras, 'Achei'))
console.log(texto.split(regexLetras))