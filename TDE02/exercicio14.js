//Escreva uma função que receba dois números como parâmetros e retorne verdadeiro se a soma deles for divisível por 5 e falso caso contrário.


function divisível(numero1,numero2){
    soma = numero1+numero2

    if (soma % 5==0){
        return true
    }else{
        return false
    }
}


console.log(divisível(10,10))
console.log(divisível(1,3))