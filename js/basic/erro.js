function tratarErroELancar(erro){
    throw new Error('Ocorreu um erro na aplicação, verifique o formato do objeto, caso o erro persista entre em contato com o Administrador')


};

function imprimirNomeGritado(obj){
    try{
        console.log(obj.name.toUpperCase() + '!!!');
    }catch(e) {
        tratarErroELancar(e);
    } finally{
        console.log('Final')
    };

};

const obj = {nome: 'Roberto'};
imprimirNomeGritado(obj);