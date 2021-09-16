// arrow function
const felizNatal = () => console.log('Feliz natal!')
felizNatal()

const saudacao = nome => `Fala ${nome}, blz?!`
console.log(saudacao('Renan'))

const somar = (...numeros)=>{
    let total = 0 
    for(let n of numeros){
        total += n
    }
    return total
}

const resultado = somar(10,5,6,8,8,5,6,3,10,55)
console.log(resultado)

const potencia = base => exp => Math.pow(base,exp)
console.log(potencia(5)(2))

// this 
Array.prototype.ultimo = function(){
    console.log(this[this.length - 1])
}
Array.prototype.primeiro = () =>{
    console.log(this[0])
}

const numeros = [1,2,3,500]
numeros.ultimo() // Funciona
numeros.primeiro() // Não funciona