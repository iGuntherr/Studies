const texto = '<div>Conteúdo 01</div><div>Conteúdo 2</div>'

// Quantificadores SÃO gulosos (greedy)...
console.log('## Quantificadores gulosos (greedy) ##')
console.log(texto.match(/<div>.+<\/div>/g))
console.log(texto.match(/<div>.*<\/div>/g))
console.log(texto.match(/<div>.{0,100}<\/div>/g))

// Quantificadores NÃO gulosos (lazy)...
console.log('\n## Quantificadores NÃO gulosos (lazy) ##')
console.log(texto.match(/<div>.+?<\/div>/g))
console.log(texto.match(/<div>.*?<\/div>/g))
console.log(texto.match(/<div>.{0,100}?<\/div>/g))

