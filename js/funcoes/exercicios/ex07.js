// 07) Uma das vantagens da programação é a automatização de tarefas que não gostamos de realizar. Dito isto,
// elabore uma função cujo objetivo é resolver a fórmula de Bhaskara. Para isso, sua função deve receber três
// parâmetros, “ax2”, “bx” e “c”, de tal modo que na equação: 3x² - 5x + 12 os valores seriam respectivamente: 3,
// -5, 12. Como retorno deve ser passado um vetor que tem 2 valores um para cada possível resultado, mesmo
// que os resultados sejam iguais. Caso o delta seja negativo, retorne, ao invés do vetor, um string com a frase:
// “Delta é negativo”.

(function(){
    let exercicio = '07'
    let indice = `Uma das vantagens da programação é a automatização de tarefas que não gostamos de realizar. Dito isto,
    elabore uma função cujo objetivo é resolver a fórmula de Bhaskara. Para isso, sua função deve receber três
    parâmetros, “ax2”, “bx” e “c”, de tal modo que na equação: 3x² - 5x + 12 os valores seriam respectivamente: 3,
    -5, 12. Como retorno deve ser passado um vetor que tem 2 valores um para cada possível resultado, mesmo
    que os resultados sejam iguais. Caso o delta seja negativo, retorne, ao invés do vetor, um string com a frase:
    “Delta é negativo”.\n`
    console.log(`Exercício ${exercicio}.) ${indice}`)
})()

const delta = (ax2, bx, c) => bx**2 - (4 * ax2 * c)

const bhaskara = (ax2, bx, c) =>{
    let dt = delta(ax2, bx, c)     
    
    if(dt < 0){
        return 'Delta é negativo'
    }else{
        let vet1 = ((bx*-1) + (Math.sqrt(dt))) / (ax2 * 2)
        let vet2 = ((bx*-1) - (Math.sqrt(dt))) / (ax2 * 2)
        return [vet1.toFixed(2), vet2.toFixed(2)]
    }
}

console.log(`Delta de 3, -5 e 12:`)
let deltaNegativo = bhaskara(3, -5, 12)
console.log(deltaNegativo)

console.log(`\nDelta de 3, 5 e 1:`)
let deltaPositivo = bhaskara(3, 5, 1)
console.log(`Vetor 1: ${deltaPositivo[0]}\nVetor 2: ${deltaPositivo[1]}`)