let input = require('fs').readFileSync('stdin', 'utf8');
let [a,b,c] = input.split('\n').map(item => parseFloat(item))

let media = (a*0.2 + b*0.3 + c*0.5)
console.log(`MEDIA = ${media.toFixed(1)}`)