// V1 - Resumida
const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado'; // Expressão ? True : False

console.log(resultado(7.1));
console.log(resultado(5));

// V2 - Com corpo
const status = nota => {
    return nota >= 7 ? 'Aprovado' : 'Reprovado';
};