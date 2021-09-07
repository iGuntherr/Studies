const texto = `Lista telefônica:
    - (11) 98877-1212
    -98765-4321
    -98835-3214
    - (85) 95532-1212
    - (21) 97524-9633`

console.log(texto.match(/\(?\d{0,2}\)?\s?\d{5}-\d{4}/g))