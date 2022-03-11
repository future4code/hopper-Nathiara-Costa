/*  //////////////////////////////////////////////////////////////////////////////
///////////////////Exercícios de interpretação de código//////////////////////
//////////////////////////////////////////////////////////////////////////////

        //Exercicio 1

    

A) apelido: Mandi nome: Amanda Rangel
   apelido: Laura nome: Laís Petra
   apelido: Chijo nome: Letícia Chijo



        //Exercicio 2

A) 0: Amanda Rangel
   1: Laís Petra
   2: Letícia Chijo


        //Exercicio 3

A) 0: nome: Amanda Rangel, apelido: Mandi
   1: nome: Laís Petra, apelido: Laura


////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////Exercícios de escrita de código////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////

        //Exercicio 1 
A)
        const pets = [
            { nome: "Lupin", raca: "Salsicha"},
            { nome: "Polly", raca: "Lhasa Apso"},
            { nome: "Madame", raca: "Poodle"},
            { nome: "Quentinho", raca: "Salsicha"},
            { nome: "Fluffy", raca: "Poodle"},
            { nome: "Caramelo", raca: "Vira-lata"},
         ]

        let nomesPets = pets.map((pets, indice, Array) => {
            return pets.nome 
        })

        console.log(nomesPets)


B)  
    const pets = [
        { nome: "Lupin", raca: "Salsicha" },
        { nome: "Polly", raca: "Lhasa Apso" },
        { nome: "Madame", raca: "Poodle" },
        { nome: "Quentinho", raca: "Salsicha" },
        { nome: "Fluffy", raca: "Poodle" },
        { nome: "Caramelo", raca: "Vira-lata" },
    ]

    let racaPets = pets.filter((pets, indice, Array) => {
        return pets.nome, pets.raca === "Salsicha"
    })

    console.log(racaPets)


C)
    const pets = [
    { nome: "Lupin", raca: "Salsicha" },
    { nome: "Polly", raca: "Lhasa Apso" },
    { nome: "Madame", raca: "Poodle" },
    { nome: "Quentinho", raca: "Salsicha" },
    { nome: "Fluffy", raca: "Poodle" },
    { nome: "Caramelo", raca: "Vira-lata" },
]

let racaPets = pets.filter((pets, indice, Array) => {
    return pets.nome, pets.raca === "Poodle"
})

let descontoPet = racaPets.map((pets)=>{
    console.log(`Você ganhou um cupom de desconto de 10% para tosar o/a ${pets.nome}!`) 
})

console.log(descontoPet)

   */

