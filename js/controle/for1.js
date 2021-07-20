let contador = 1
while(contador <=10){
    //console.log(`contador = ${contador}`)
    contador++
}

for(let i = 1; i<=10; i++){
    console.log(`i = ${i}`)
}

Number.prototype.entre = function(inicio, fim){
    return this >= inicio && this <= fim;

};

const resultadoNota = function(nota){
    let resuldado
    if(nota.entre(9,10)){
        resultado = 'no Quadro de Honra!';
    }else if(nota.entre(7, 8.99)){
        resultado = 'Aprovado'
    }else if(nota.entre(4, 6.99)){
        resultado = 'em Recuperação'
    }else if(nota.entre(0, 3.99)){
        resultado = 'Reprovado'
    }else{
        resultado = 'Valor invalido!'
    };
    return resultado
};

const notas = [6.7, 7.4, 8.5, 10, 0, 9.8]
for(let i = 0; i < notas.length; i++){
    console.log(`A nota é ${notas[i]} e o status é: ${resultadoNota(notas[i])}`)

}