function getInteiroAleatorioEntre(min, max){
    const valor = Math.random() * (max - min) + min 
    return Math.floor(valor)
}

let opcao = 0

do {
    opcao = getInteiroAleatorioEntre(-1, 3)
    console.log(opcao)
}while(opcao != -1)