//1. Escreva uma função chamada encontrarMaiorElemento que aceita um array de números como parâmetro e retorna o maior elemento do array.

function encontrarMaiorElemento(array) {
    if (array.length === 0) {
        console.log("O array está vazio");
    }

    let maiorElemento = array[0];

    for (let i = 1; i < array.length; i++) {
        if (array[i] > maiorElemento) {
            maiorElemento = array[i];
        }
    }

    return maiorElemento;
}

console.log(encontrarMaiorElemento([45, 78, 100])); // Chamando a função com um array como argumento
