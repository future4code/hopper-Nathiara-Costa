                /////////////////////////////////////////////////
                /////Exercícios de interpretação de código//////
                ///////////////////////////////////////////////

        //Exercicio 1:
/*
A) 10 e 50
B) Não apareceria nada no console pois está apenas incovando a função sem declarar que algo deverá ser impresso no console.


        //Exercicio 2:

A) Ela transforma o texto que p usuario inseriu todo em lera minuscula e verifica se a palavra cenoura existe no texto retornando verdadeiro ou falso.
B)   i.   Eu gosto de cenoura



            /////////////////////////////////////////////////////
            /////////Exercícios de escrita de código////////////
            ////////////////////////////////////////////////////

         //Exercicio 1:
    //A)
 function sobreMim(){
     console.log("Eu sou Nathiara, tenho 30 anos, moro em São Paulo e sou Estudante")
 }
sobreMim()

    // B)
function infoUser(string, number, string, string, ){
    let nome = prompt("Insira seu Nome")
    let idade = prompt("Insira sua Idade")
    let cidade = prompt("Insira sua cidade")
    let profissão = prompt("Insira sua profissão")

    console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissão}.`)
}
infoUser()


        //Exercicio 2:
    //A)

function numero(num1 , num2 ){
    return num1 + num2  
       
}

let numUser1 =10
 let numUser2 = 3

console.log (numero(numUser1 , numUser2))


 //B)
function numero(num1 , num2 ){
    return num1 >= num2  
       
}

let numUser1 =2
 let numUser2 = 3

console.log (numero(numUser1 , numUser2))


//C)
function parOuImpar(number){
    return number % 2 === 0

}
    let number = 15 
console.log(parOuImpar(number))


//D

function nomeDaFuncao2(mensagem){
   return mensagem.length + " " + mensagem.toUpperCase()
}

const mensagemDoUser = "minha mensagem"
console.log(nomeDaFuncao2(mensagemDoUser))


         //Exercicio 3:

function somar(parametro1 , parametro2){
return parametro1 + parametro2
}
function subtrai(parametro1 , parametro2){
    return parametro1 - parametro2
    }
    function multiplique(parametro1 , parametro2){
        return parametro1 * parametro2
        }
        function divide(parametro1 , parametro2){
            return parametro1 / parametro2
            }
            const numUser = Number(prompt("insira um numero"))
            const outroNumber = Number(prompt("insira um numero"))

            console.log(
                somar(numUser , outroNumber),
                subtrai(numUser , outroNumber),
                multiplique(numUser , outroNumber),
                divide(numUser , outroNumber),
            )
*/