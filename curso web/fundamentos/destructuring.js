// recurso ES2015

const pessoa ={
    nome: 'Arthur',
    idade: 18,
    endereco:{
        logradouro: 'Rua ABC',
        NUMERO: 100
    }
}

const {nome , idade  } = pessoa
console.log(nome,idade)