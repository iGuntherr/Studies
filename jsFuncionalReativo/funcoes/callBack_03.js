const nums = [1, 2, 3, 4, 5, 6]
const dobro = n => n*2

console.log(nums.map(dobro))

const nomes = ['Ana', 'Maria', 'Gui', 'Rafa', 'Fabio']
const primeiraLetra = texto => texto[0]
const letras = nomes.map(primeiraLetra)

console.log(nomes, letras)