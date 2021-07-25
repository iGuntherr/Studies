function soma(){
    let soma = 0
    for (let i in arguments){
        soma += arguments[i]
    }
    return soma
}

console.log(soma())
console.log(soma(5, 20, 3, 10, 88, 33, 25, 15))
console.log(soma(5, 20, 3, 10, 'Teste'))