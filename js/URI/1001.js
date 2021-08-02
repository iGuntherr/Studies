var input = require('fs').readFileSync('/dev/stdin', 'utf8');
let [a, b] = input.split('\n').map(item => parseInt(item))
console.log(`X = ${a+b}`)