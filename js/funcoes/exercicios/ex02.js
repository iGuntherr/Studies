// 02) Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados: Equilátero: Os três lados são iguais. 
// Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes. Crie uma função que recebe os comprimentos dos três 
// lados de um triângulo e retorne sua classificação quanto ao tamanho de seus lados. (Neste exemplo deve-se abstrair as 
// condições matemáticas de existência de um triângulo).

(function(){
    let exercicio = '02'
    let indice = 'Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados: Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes. Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um triângulo).\n'
    console.log(`Exercício ${exercicio}.) ${indice}`)
})()

function identificaTriangulo(lado1, lado2, lado3){
    if(lado1 == lado2 && lado2 == lado3){
        let tipo = 'Equilátero'
        console.log(`l1: ${lado1}\nl2: ${lado2}\nl3: ${lado3}\nTipo: ${tipo}\n`)
    }else if(lado1 == lado2 || lado2 == lado3 || lado3 == lado1){
        let tipo = 'Isósceles'
        console.log(`l1: ${lado1}\nl2: ${lado2}\nl3: ${lado3}\nTipo: ${tipo}\n`)
    }else{
        let tipo = 'Escaleno'
        console.log(`l1: ${lado1}\nl2: ${lado2}\nl3: ${lado3}\nTipo: ${tipo}\n`)
    }
}

// Equilátero
identificaTriangulo(1,1,1)
// Isósceles
identificaTriangulo(1,2,1)
// Escaleno
identificaTriangulo(1,2,3)