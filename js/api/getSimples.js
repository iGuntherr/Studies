// Extrai os dados do Endpoint e retorna um JSON
function getJSON(url){
    const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest //npm install xmlhttprequest
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()

    return JSON.parse(request.responseText)

}

let data = getJSON(`http://jsonplaceholder.typicode.com/photos/1`)
console.log(data)

