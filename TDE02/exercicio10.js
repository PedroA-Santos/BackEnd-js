//Crie uma função que receba um número como parâmetro e retorne o fatorial desse número.


function fatorial (numero){

    if (numero ===0  || numero ===1){
        return 1

    }else{
        
        let resultado =1

        for(i =2; i<=numero;i++){

            resultado *=i;

        }
        return resultado
    }

    
}

console.log(fatorial(10))
console.log(fatorial(5))