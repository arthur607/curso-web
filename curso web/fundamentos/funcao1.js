//função sem retorno
function imprimirSoma(a,b){
    console.log(a * b)
}

imprimirSoma(2, 3)

imprimirSoma(2,4,5,6,7)  //ignora o resto
imprimirSoma()

//funcao com retorno

function soma (a, b=1){
    return a + b
}
console.log(soma(2))