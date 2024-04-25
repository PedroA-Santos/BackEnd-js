//6. Escreva uma função chamada gerarLista que aceita um número inteiro positivo n e uma função de geração como parâmetros.
// A função de geração deve receber um índice e retornar o valor correspondente da lista.
// A função gerarLista deve criar uma lista de tamanho n, preenchendo cada elemento com o resultado da função de geração.


function gerarLista (num,geracao){
   let array = []

   for(let i = 1; i <= num; i++){
      array.push(geracao(i))
   } 

   return array

}


console.log(gerarLista(5, (e) => e * 2))