const carrinho = [
    { nome: 'Caneta', qtde: 10, preco: 7.99},
    { nome: 'Impressora', qtde: 0, preco: 649.50},
    { nome: 'Caderno', qtde: 4, preco: 27.10},
    { nome: 'Lapis', qtde: 3, preco: 5.82},
    { nome: 'Tesoura', qtde: 1, preco: 19.20},
    { nome: 'Borracha', qtde: 2, preco: 0.50}
]

const getNome = obj => obj.nome
const getTotal = obj => obj.preco * obj.qtde

let carrinhoProd = carrinho.map(getNome)
console.log(carrinhoProd)

let carrinhoTotal = carrinho.map(getTotal)
console.log(carrinhoTotal)