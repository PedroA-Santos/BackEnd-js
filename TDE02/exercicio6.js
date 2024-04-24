//. Crie uma função chamada ehNegativo que recebe um número como parâmetro e retorna true se for negativo e false se for positivo.


function ehNegativo(numero){

    if (numero<0){
        return true
    }else{
        return false
    }


}


console.log(ehNegativo(-45))
console.log(ehNegativo(20))
console.log(ehNegativo(47))