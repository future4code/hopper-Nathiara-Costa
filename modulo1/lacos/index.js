///////////////////////////////////////////////////////////////////////////////
/////////////////////////// Exercicio Laços///////////////////////////////////
/////////////////////////////////////////////////////////////////////////////

///////////////Exercícios de interpretação de código/////////////////////

//Exercicio 1 
/*
R: O codigo está incrementando valores a variavel valor atraves de um laço for, que no caso do exemplo o for vai executar 4 vezes que é a condição dele. 



        //Exercicio 2
A) será impresso na tela todos os numeros maiores que 18. 

B) Com o for of não é possivel identificar o indice do array. Uma solução para isso seria utilizar o for normal conforme o exemplo abaixo:

const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]

for(let i = 0; i < lista.length; i++) {
    console.log("indice " + i + ": " + lista[i])
  }

   // Exercicio 3 
O resultado impresso na tela seria: 
                *
                **
                ***
                ****

/////////////////////////////////////////////////////////////////////////////////////
//////////////////////Exercícios de escrita de código///////////////////////////////
///////////////////////////////////////////////////////////////////////////////////

    // Exercicio 1

let bichoDeEstimacao = Number(prompt("Insira quantos bichinhos de estimação você tem: ")) 
if(bichoDeEstimacao <= 0 ){
    console.log("Que pena! Você pode adotar um pet!")
}else {
    let nomes = []
for(let i=0; i < bichoDeEstimacao; i++) {
 nomes.push(prompt("insira o nome do seu bicho"))

}
    console.log(nomes)
}

        // Exercicio 2 
A)
    let arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
imprimeArray(arrayOriginal)

function imprimeArray(array){
    for (let i of array){
        console.log(i)
    }    
}

B)
let arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
imprimeArrayDividido(arrayOriginal)

function imprimeArrayDividido(array){
    for (let i of array){
        console.log(i / 10)
    }    
}

C)
let arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
imprimeArrayDividido(arrayOriginal)

function imprimeArrayDividido(array){
    let novoArray = []
    for (let i of array){
       if (i % 2 === 0){
           novoArray.push(i)
       }

    } 
    console.log(novoArray)   
}


E)
let arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

function mostrarMaiorMenor(array) {
    let valorMaximo = 0
    let valorMinimo = 99999

  for (let i = 0; i < array.length; i++) {
    if (array[i] > valorMaximo){
        valorMaximo = array[i]
    }
    if(array[i]< valorMinimo){
        valorMinimo = array[i]
    }
  }
  console.log(`O maior número é ${valorMaximo} e o menor é ${valorMinimo}`);
}
mostrarMaiorMenor(arrayOriginal)

*/