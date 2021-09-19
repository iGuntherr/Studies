const notas = [5,7,8,6,3,9]
const validaAprovado = el => el >= 7? true:false
//console.log(notas.filter(validaAprovado))

const boletim = [
    {nome: 'Renan', nota: 10.00},
    {nome: 'Fabio', nota: 5.00},
    {nome: 'Augusto', nota: 8.00},
    {nome: 'Eduardo', nota: 6.00},
    {nome: 'Lucas', nota: 7.00},
    {nome: 'Maria', nota: 2.00},
    {nome: 'Ana', nota: 3.00},
    {nome: 'Eduarda', nota: 8.00},
    {nome: 'Stephany', nota: 10.00},
    {nome: 'Silvana', nota: 8.00}
]

const getAprovados = item => item.nota >=7
const getNome = obj => obj.nome

const listaAprovados = boletim
    .filter(getAprovados)
    .map(getNome)
console.log(listaAprovados)