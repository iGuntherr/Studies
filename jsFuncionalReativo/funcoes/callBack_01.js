
const somarNoTerminal = (a,b) => console.log(a+b)
const subtrairNoTerminal = (a,b) => console.log(a-b)
const subtrair = (a,b) => a-b


const exec = (fn,a,b) => fn(a,b)

exec(somarNoTerminal, 56, 38)
exec(subtrairNoTerminal, 56, 38)

let resultado = exec(subtrair, 25, 15)
console.log(resultado)

exec((x,y)=> console.log(x/y), 15,3)

const cb = () => console.log('Exec...')
setInterval(cb,1000)