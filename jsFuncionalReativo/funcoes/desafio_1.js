// somar(3)(4)(5)
const somar = a => {
    return function(b){
        return function(c){
            return a + b + c
        }
    }
}

const res1 = somar(3)(4)(5)
console.log(res1)

// calcular(3)(4)(fn)
const potencia = (base,exp) => Math.pow(base,exp)
const divisao = (a,b) => a/b 
const mult = (a,b) => a*b 

const calcular = a =>{
    return function(b){
        return function(fn){
            if(typeof fn === 'function'){
                console.log(fn(a,b))
            }else{
                console.log(`${fn} não é uma função válida!`)
            }
        }
    }
}

calcular(4)(3)(3)
calcular(4)(3)(potencia)
calcular(4)(2)(divisao)
calcular(6)(6)(mult)

