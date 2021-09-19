const carrinho = [
    { nome: 'Caneta', qtde: 10, preco: 7.99},
    { nome: 'Impressora', qtde: 0, preco: 649.50},
    { nome: 'Caderno', qtde: 4, preco: 27.10},
    { nome: 'Lapis', qtde: 3, preco: 5.82},
    { nome: 'Tesoura', qtde: 1, preco: 19.20},
    { nome: 'Borracha', qtde: 2, preco: 0.50}
]

const getNome = item => item.nome
const qtdeMaiorQueZero = item => item.qtde > 0

const nomeItensValido = carrinho
    .filter(qtdeMaiorQueZero)
    .map(getNome)

console.log(nomeItensValido)