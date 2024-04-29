//1. Crie uma função de soma que precisará ter como resultado um número par. Para isso, você precisará criar os seguintes callbacks:

//- callbackSucesso(): Mostre uma mensagem de sucesso, dizendo que a operação foi concluída com sucesso e que o número somado é par
// (resultado da soma).
//- callBackError(): Mostre uma mensagem de erro, dizendo que a operação falhou, trazendo um número impar (resultado da soma).


const somaPar = (a,b,callBackError,callbackSucesso) => {


    let resultado = a + b;
    if(resultado %2 ===0){
        callbackSucesso(resultado)
    }else{
        callBackError(resultado)
    }
}


    function callbackSucesso(resultado){

        console.log("Sucesso, o resultado da soma deu um número par: " + resultado)
    }


    function callBackError(resultado){

        console.log("Erro,o resultado da soma não deu um número par: " + resultado)
    }

  




console.log(somaPar(2,2,callBackError,callbackSucesso))
console.log(somaPar(3,2,callBackError,callbackSucesso));




//2. Utilize a função anterior para criar uma promise que tenha:

//- then: uma mensagem de sucesso, informando que a operação foi concluída com sucesso, dizendo se é par ou ímpar e trazendo o número;
//- catch: uma mensagem de erro, informando que a operação possui erro, dizendo se é par ou ímpar e trazendo o número.

//Dica: Utilize uma promise com função (resolve, reject).


console.log("----------------------------------------------------------------------------------")


const somaPromisse = (a,b) =>{

    return new Promise ((resolve,reject) =>{
        let resultado = a+b
        if(resultado %2 ===0){
            resolve(resultado)
        }else{
            reject(resultado)
        }
    });
}


somaPromisse(2,3).then((resultado)=>{
    console.log("A operação foi um sucesso, o número é par: " + resultado)

}).catch((resultado)=>{

    console.log("A operação falhou, o número é impar: " + resultado)
})


somaPromisse(2,4).then((resultado)=>{
    console.log("A operação foi um sucesso, o número é par: " + resultado)

}).catch((resultado)=>{

    console.log("A operação falhou, o número é impar: " + resultado)
})
