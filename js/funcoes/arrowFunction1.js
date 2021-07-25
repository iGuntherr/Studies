let dobro = function(a){
    return 2 * a
}
//console.log(dobro(2))

dobro = (a) => {
    return 2 * a 
}
//console.log(dobro(4))

dobro = a => 2 * a // return está implícito 
console.log(dobro(Math.PI))

let ola = function() {
    return 'Olá'
}
ola = () => 'Olá'
ola = _ => 'Olá' // Possui um param mas não o usa
console.log(ola())