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

   


        //Exercicio 2 

A)
    const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]

 let nomesProdutos = produtos.map((produtos, indice, Array) => {
    return produtos.nome 
})

console.log(nomesProdutos)

B) ** Exercicio imcompleto** // tentando colocar a procentagem

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]
 let nomesProdutos = produtos.filter((produtos, indice, Array) => {
    return produtos.preco - (produtos.preco * 0.05), produtos.nome
})



console.log(nomesProdutos)


C)
    const produtos = [
        { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
        { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
        { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
        { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
        { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
        { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
        { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
        { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
        { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
        { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
    ]

    let nomesProdutos = produtos.filter((produtos, indice, Array) => {
        return produtos.nome, produtos.categoria === "Bebidas"
    })

    console.log(nomesProdutos)

D)
    const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]

 let nomesProdutos = produtos.filter((produtos, indice, Array) => {
    return produtos.nome.includes("Ypê")
})

console.log(nomesProdutos)

E)
    const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]

 let nomesProdutos = produtos.filter((produtos, indice, Array) => {
    return produtos.nome.includes("Ypê")
})

let descontoProdutos = nomesProdutos.map((produtos)=>{
    console.log(` Compre ${produtos.nome} por ${produtos.preco}`)
})

console.log(descontoProdutos)




*/
 
 



