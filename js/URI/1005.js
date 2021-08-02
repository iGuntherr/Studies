let input = require('fs').readFileSync('stdin', 'utf8');
let [a,b] = input.split('\n').map(item => parseFloat(item))

let media = (a*35+b*75)/110
console.log(`MEDIA = ${media.toFixed(5)}`)