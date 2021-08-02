let input = require('fs').readFileSync('/dev/stdin', 'utf8')
let raio = input.split(' ').map(item => parseFloat(item).toFixed(2))

let n = 3.14159
let area = (n * (raio ** 2)).toFixed(4)

console.log(`A=${area}`)