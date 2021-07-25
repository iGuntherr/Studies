const pessoa = {
    saudacao: 'Bom dia!',
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() // Conflito entre paradigmas: Funcional e OO

const falarDePessoa = pessoa.falar.bind(pessoa) // A func bind não altera a função original, apenas faz a ...
falarDePessoa()// ... amarração com a função configurada com o this

