var input = require('fs').readFileSync('/dev/stdin', 'utf8');
let [a, b] = input.split('\n').map(item => parseInt(item).toFixed(1))

console.log(`PROD = ${a*b}`)