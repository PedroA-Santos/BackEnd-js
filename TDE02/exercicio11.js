//Faça um programa que calcule a soma dos números pares de 1 a 100.

 function somaDosPares(){

    soma = 0

    for (let i = 2; i <= 100; i += 2) {
        soma += i;
    }

    return soma
   


}
 

console.log(somaDosPares())