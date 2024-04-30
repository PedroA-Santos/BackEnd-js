//Crie um modulo de calculadora, exportando as 4 operações básicas: somar, subtrair, dividir, multiplicar
//- Dentro de outro arquivo, importar as funções e executar as operações


const somar = (a,b) =>{

    return a + b
}

const subtrair = (a,b) =>{

    
  return a - b
    
}

const dividir = (a,b) =>{

    if(b===0){
        console.log("Erro, divisão por zero")
    }else{
        return a / b
    }

}


const multiplicar = (a,b)=>{

    return a*b
}


module.exports={
    somar,
    subtrair,
    dividir,
    multiplicar
}



