// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    return array.length
}


// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  //return array.reverse()
  let resultado = []
  let x = array.length-1

  for (i = 0; i < array.length; i++){
      resultado.push(array[x])
      x--
  }
  return resultado
}


// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
  return array.sort(function(a,b){
      return a - b
  })
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
//let numerosPares = array.filter(i => i % 2 === 0)
let numerosPares = []
let numeroImpares = []

for (i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
        numerosPares.push(array[i])
    } else {
        numeroImpares.push(array[i])
    }
}

return numerosPares
}


// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
 let numeroAoQuadrado = array.map(2 , (i) =>{
     return Math.pow(i, 2);
 })

 return numeroAoQuadrado
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
  
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {

}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}