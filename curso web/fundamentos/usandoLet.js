var numero = 1 
{
    let numero = 2
    console.log('dentro =',numero)
}

console.log('fora =',numero)

///////
for (var i = 0; i<10; i++) {      //var não tem escopo de bloco"{}" 
    console.log(i)    //usando o let da erro
}
console.log('i=', i)