const newProduto = (nome, preco) =>{
    return {
    nome,
    preco,
    deconto: preco * 0.1
    }
}

console.log(newProduto('Omo', 11189.89))