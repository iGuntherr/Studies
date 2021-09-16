function bomDia(){
    console.log('Bom dia!!!!')
}
const boaTarde = _ => console.log('Boa tarde!!!!')

// Passar uma função como parametro para outra função.
function executarA(fn){
    if(typeof fn === 'function'){
        fn()
    }else{
        console.log(`${fn} não é uma função válida`)
    }
}

executarA(3)
executarA(bomDia)
executarA(boaTarde)


//2) Retornar uma função a partir de uma outra função
function potencia(base){
    return function(exp){
        return Math.pow(base,exp)
    }
}

const potenciaDe2 = potencia(2)
console.log(potenciaDe2(8))

const pot34 = potencia(3)(4)
console.log(pot34)