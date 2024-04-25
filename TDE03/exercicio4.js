//4. Escreva uma função chamada filtrarArray que aceita uma função de filtro e um array como parâmetros.
// A função de filtro deve retornar true caso o elemento deva permanecer no array e false caso contrario.
// A função filtrarArray deve aplicar essa função a todos os elementos e retornar um novo array apenas com os elementos restantes



const filtrarArray = (array, filtro) => {
    return array.filter(filtro)
}

 function filtrarPorPar (num){
    return (num % 2===0)
 }



console.log(filtrarArray([1,2,3,4,5], (e) => filtrarPorPar(e)));


