//3. Escreva uma função chamada mapearArray que aceita uma função e um array como parâmetros.
//A função mapearArray deve aplicar a função recebida a cada elemento do array e retornar um novo array com os elementos resultantes.


const map = (newArr, func) => {
    for (let i = 0; i < newArr.length; i++) {
        newArr[i] = func(newArr[i])
    }

    return newArr
}


console.log(map([12, 35, 78, 42], (e) => e * 2))
console.log(map([12, 35, 78, 42], (e) => e / 2))