const texto =`Os e-mails dos convidados são:
    -fulano@gmail.com
    -xico@gmail.com
    -joao@yahoo.com
    -blis@uol.info.br
    -blis_ouis@uol.info.br
    -fabio.oliveira@hotmail.com
    -lol@test.com.br`

console.log(texto.match(/[a-zA-Z0-9_]+@[a-zA-Z0-9_]+\.[a-zA-Z0-9_]+\.?[a-zA-Z0-9_]{2,4}?/g))
console.log(texto.match(/\w+@\w+\.\w+\.?\w+/g))
console.log(texto.match(/[\w\.]+@\w+\.\w+\.?\w+/g))
console.log(texto.match(/[\w\.]+@\w+\.\w+\.?\w+/g))

// no futuro...
console.log(texto.match(/[\w\.]+@\w+.\w{2,4}(\.\w{2,3})?/g))