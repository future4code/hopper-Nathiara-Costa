/////////////////////////////////////////////////////////
//////////Exercícios de interpretação de código//////////
////////////////////////////////////////////////////////

/*
                // Exercicio 1. 
let array
console.log('a. ', array)

// R: a. undefined

array = null
console.log('b. ', array)

// R: b. null

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length)

//R: c. 11

let i = 0
console.log('d. ', array[i])

// R: d. 3

array[i+1] = 19
console.log('e. ', array)

// R: e.  (11) [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]

const valor = array[i+6]
console.log('f. ', valor)

 // R: f. 9

 

            //Exercicio 2.

const frase = prompt("Digite uma frase")
console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)

// R: SUBI NUM ÔNIBUS EM MIRROCOS 27



//////////////////////////////////////////////////
////////Exercícios de escrita de código//////////
/////////////////////////////////////////////////

                // Exercicio 1.     

let nomeDoUsuario = prompt("Digite seu Nome: ")
let emailDoUsuario = prompt("Digite o seu email: ")

console.log(`O e-mail ${emailDoUsuario} foi cadastrado com sucesso. Seja bem-vinda(o), ${nomeDoUsuario}!`)



            // Exercicio 2.

let comidasPreferidas= ["Macarrão", "Lasanha", "Feijoada", "Sushi", "Churrasco"]
    console.log(comidasPreferidas)
    console.log(`Essas são as minhas comidas preferidas: ${comidasPreferidas.join("\r\n")}`)

comidasPreferidas[1] = prompt("Qual a sua comida preferida? ")
console.log(comidasPreferidas)


            // Exercicio 3.

let listaDeTarefas = []
listaDeTarefas.push(prompt("Digite a primeira tarefa:")) 
listaDeTarefas.push(prompt("Digite a segunda tarefa:")) 
listaDeTarefas.push(prompt("Digite a terceira tarefa:")) 

    console.log(listaDeTarefas)

listaDeTarefas.splice((prompt("Escolha um numero 0,1 ou 2?")), 1)
console.log(listaDeTarefas)

*/