///////////////////////////////////////////////////////////
///////////Exercícios de interpretação de código///////////
///////////////////////////////////////////////////////////

/*
         /// Exercico 1
    //A) Matheus, Virginia Cavendish, Globo,14h



        /// Exercicio 2

   //A)  Juca, 3, SRD
         Juba, 3,  SRD
         Jubo, 3, SRD

   //B) A sintaxe dos 3 pontinho copiou o objeto inteiro 


        /// Exercicio 3
   
   //A) False, Undefined
   //B) A propriedade backender foi definida com False e a propriedade Altura não foi declarada por isso foi impresso Undefined.


   ///////////////////////////////////////////////////////////
   ///////////Exercícios de escrita de código////////////////
   //////////////////////////////////////////////////////////

    // Exercicio 1

//A)

let pessoa = {
    nome: "Nathiara",
    apelidos: ["Nathi", " Na", " Arapuá"]
}
function meusApelidos(objeto) {
    console.log(`Eu sou ${objeto.nome}, mas pode me chamar de: ${objeto.apelidos}.`)

}

meusApelidos(pessoa)


//B)

let novoObjeto = {
    ...pessoa,
    apelidos: ["Madrinha", "Nega", "Neguinha"]
}
function novosApelidos(novoObjeto) {
    console.log(`Eu sou ${novoObjeto.nome}, mas pode me chamar de: ${novoObjeto.apelidos}.`)

}

meusApelidos(novoObjeto)


// Exercicio 2 


let dados1 = {
    nome: "Nathiara",
    idade: 30,
    profissão: "Estudante"
}
let dados2 = {
    nome: "Jackson",
    idade: 32,
    profissão: "Desenvolvedor"
}

function dados(objeto) {
    console.log(`${dados1.nome}, ${dados1.nome.length}, ${dados1.idade}, ${dados1.profissão}, ${dados1.profissão.length}`)
    console.log(`${dados2.nome}, ${dados2.nome.length}, ${dados2.idade}, ${dados2.profissão}, ${dados2.profissão.length}`)
}

dados(dados1, dados2)



//Exercicio 3 

let carrinho = []
let fruta1 = { nome: "Banana", disponibilidade: true }
let fruta2 = { nome: "uva", disponibilidade: true }
let fruta3 = { nome: "Morando", disponibilidade: true }

function sacolao(objeto) {
    carrinho.push(objeto)
}

sacolao([fruta1, fruta2, fruta3])
console.log(carrinho)
*/
  