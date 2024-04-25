//. Escreva uma função chamada validarDados que aceita uma função de validação e um objeto como parâmetros.
// A função deve usar a função de validação para verificar se os dados no objeto atendem à condição especificada e retornar true se sim,
// ou false caso contrário.
// (Ex. nome possui mais de 3 caracteres, senha existe, etc)



function validarDados(obj,callBack){
    return callBack(obj)
}
const pessoa = {

    nome :"Pedro Antonio dos Santos",
    idade : 18,
    email : "eupedro@gmail.com"


}


console.log(validarDados(pessoa, (e) => pessoa.idade>3))