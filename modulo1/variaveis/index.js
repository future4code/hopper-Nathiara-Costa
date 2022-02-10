
////////////////////////////////////////////////
//// Exercícios de interpretação de código /////
////////////////////////////////////////////////
let a = 10
let b = 10

console.log(b) //10

b = 5
console.log(a, b) //10,5

let a = 10
let b = 20
c = a
b = c
a = b

console.log(a, b, c) //10,10,10

let p = prompt("Quantas horas você trabalha por dia?") //horasTrabalhadas
let t = prompt("Quanto você recebe por dia?") //valorPorDia

/*let horasTrabalhadas = prompt("Quantas horas você trabalha por dia?") 
let valorPorDia = prompt("Quanto você recebe por dia?")
alert(`Voce recebe ${valorPorDia/horasTrabalhadas} por hora`) //valorPorHora*/

////////////////////////////////////////////////////
//////// Exercícios de escrita de código //////////
///////////////////////////////////////////////////
let nome 
let idade 

console.log(typeof nome) 
console.log(typeof idade)

// //Foi impresso undefined pois nenhum valor foi atribuido

nome = prompt("Qual o seu Nome?")
idade = prompt("Qual a sua idade?")

console.log(typeof nome) 
console.log(typeof idade)

// //Na variavel idade foi impresso string, mesmo digitando numero pois o prompt só capta strings.
console.log("Olá",nome,", você tem", idade, "anos.")
const pergunta1 ="você está de camisa Azul?"
const pergunta2 ="Você está de sapato preto?"
const pergunta3 ="Você está de bolsa marrom?"
let corDaCamisa
let corDoSapato
let corDaBolsa

corDaCamisa =prompt(pergunta1)
corDoSapato =prompt(pergunta2)
corDaBolsa =prompt(pergunta3)

console.log(pergunta1 , "-" , corDaCamisa)
console.log(pergunta2 , "-" , corDoSapato)
console.log(pergunta3 , "-" , corDaBolsa)

let a = 10
let b = 25
let c = a

a = b
b = c

console.log("O novo valor de a é", a) // O novo valor de a é 25
console.log("O novo valor de b é", b) // O novo valor de b é 10

///////////////////
///////Desafio/////
///////////////////

let primeiroNumero
let segundoNumero

primeiroNumero = Number(prompt("Digite o primeiro número:"))
segundoNumero = Number(prompt("Digite o segundo Número:"))

console.log("O primeiro número somado ao segundo número resulta em:", primeiroNumero + segundoNumero ,".")

console.log("O primeiro número multiplicado pelo segundo número resulta em:", primeiroNumero * segundoNumero , ".")