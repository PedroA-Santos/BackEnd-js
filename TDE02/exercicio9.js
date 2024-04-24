//Escreva uma função que receba um número como parâmetro e retorne verdadeiro se for par e falso caso contrário.

function par (numero){

    if (numero%2==0){
        return true
    }else{
        return false
    }
}


console.log(par(2))
console.log(par(5))