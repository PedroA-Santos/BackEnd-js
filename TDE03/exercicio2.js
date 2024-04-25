//2. Escreva uma função chamada somaElementosPares que aceita um array de números como parâmetro 
//e retorna a soma de todos os elementos pares do array.


function somaElementosPares(array){

    if (array.length ===0){

        console.log("o array está vazio");
        return 0;
    }

        let pares = 0;


        for(let i = 0;i<array.length;i++){
            if(array[i] %2===0){
                pares+= array[i]
            }
        }
        return pares

}

console.log(somaElementosPares([2,2,10]))