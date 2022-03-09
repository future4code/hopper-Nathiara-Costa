/*
///////////////////////////////////////////////////////////
///////////////Exercicio Condicionais/////////////////////
//////////////////////////////////////////////////////////

///////// Exercícios de interpretação de código//////////

        //Exercicio 1: 

A) O codigo pede para que o usuario digite um numero que ele quer testar, a condição é se o numero tiver resto de 
divisão igual a 0 passa no teste, se não, não passa no teste. 

B)Ele imprime no console "passou no teste" quando o numero digitado é par

C)Ele imprime no console "Não passou no teste" quando o numero digitado é impar. 


        //Exercicio 2: 

A) O codigo serve para verificar o valor de cada fruta

B) O Valor impresso no console será 2.25

C) A mensagem impressa no console seria que o preço da Pêra é de R$5

        //Exercicio 3 
    
A) A primeira Linha está solicitando que o usuario digite o primeiro numero 

B) caso o usuario digite o numero 10, mensagem que vai aparecer na tela será que o numero não passou no teste, caso o numero digitado foi -10 não aparecerá nenhuma mensagem pois não foi feito outra condição. 

C) O erro aparece pois a variavel mensagem só será criada quando ele entra no if, ou seja quando for digitado qualquer numero maior que 0, 
quando for digitado um numero menor que 0 ele não entra no if, não cria a variavel que está sendo chamada no console.log e por isso apresenta o erro. 


//////////////////////Exercícios de escrita de código///////////////////////////

        //Exercicio 1 

let idadeUsuario = Number(prompt("Insira a sua idade"))

if (idadeUsuario >= 18) {
    console.log("Você pode dirigir")
} else {
    console.log("Você não pode dirigir.")
}


     //Exercicio 2 

let turno = prompt("Insirai seu turno: (M (matutno) ou V (Vespertino) ou N (Noturno))").toUpperCase()

if (turno === "M") {
    console.log("Bom Dia!")
} else if (turno === "V") {
    console.log("Boa tarde!")
} else if (turno === "N") {
    console.log("Boa Noite")
}


        //Exercicio 3 

let turno = prompt("Insirai seu turno: (M (matutno) ou V (Vespertino) ou N (Noturno))").toUpperCase()

switch(turno){
    case "M":
        console.log ("Bom Dia!")
        break
    case "V" : 
        console.log("Boa Tarde!")
        break
    case "N": 
    console.log("Boa Noite!")
        break
    default: 
    console.log ("Turno não identificado")
    break
}

        //Exercicio 4 


let generoFilme = prompt("Insira o genero que procura: ").toUpperCase()
let valorIngresso = Number(prompt("Insira o Valor desejado: "))

if (generoFilme === "Fantasia", valorIngresso <= 15) {
    console.log("Bom filme!")
} else {
    console.log("Escolha outro filme :(")
}


        //Desafio
1)


let generoFilme = prompt("Insira o genero que procura: ").toUpperCase()
let valorIngresso = Number(prompt("Insira o Valor desejado: "))
let lanchinho = prompt("Qual lanche deseja comer?").toUpperCase()

if (generoFilme === "Fantasia", valorIngresso <= 15) {
    console.log(`Bom filme! Aproveite seu ${lanchinho}.`)
} else {
    console.log("Escolha outro filme :(")
}

*/