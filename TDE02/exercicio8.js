//8. Crie uma função chamada menorNumero que recebe três números como parâmetros e retorna o menor deles.


function menorNumero (numero1,numero2,numero3){

    if(numero1<numero2 && numero1<numero3 ){

        console.log("O menor número é: " + numero1)
    }else if(numero2<numero1 && numero2<numero3){

        console.log("O menor número é: " + numero2)
    }else{
        console.log("O menor número é: " + numero3)
    }
}


console.log(menorNumero(15,18,12))