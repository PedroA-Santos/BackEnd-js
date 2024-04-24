//Escreva uma função que receba dois números como parâmetros e retorne verdadeiro se o primeiro for múltiplo do segundo e falso caso contrário.

function verdade (numero1,numero2){


    if(numero2 !==0  ){

        return numero1%numero2 ===0
    }else{
        return false;
    }
    

    


}


console.log(verdade(10,5))
console.log(verdade(10,10))
console.log(verdade(35,7))
console.log(verdade(10,3))
console.log(verdade(10,5))
