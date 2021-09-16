const http = require('http')

http.createServer((req, res) =>{
    res.end('<h1>Ola mundo!</h1>')
}).listen(8080)
console.log('### Iniciado ###')

