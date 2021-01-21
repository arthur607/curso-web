function fun1() {}


const fun2 = function(){}    //armazenar um uma variável


const obj = {}                 //armazernar em atributo de objeto
obj.falar = function(){return 'Olá'}
console.log(obj.falar())

//passar funcao como parametro

function run(fun){
    fun()
}
run(function(){console.log('executando')})