/* 
/////////////////////////////////////////
//Exercícios de interpretação de código//
/////////////////////////////////////////

    //Exercicio 1.

a. false
   b. false
   c. true
   d. boolean 


    //Exercicio 2.

    R: Como não foi feito a conversão de String para Number apos utilizar o prompt, no console está imprimindo um string, juntando o primeiro numero com o segundo.
    ex: primeiroNumero=10
    segundoNumero=2
    retorno= 102


    //Exercicio 3.


    let primeiroNumero = prompt("Digite um numero!")
    let segundoNumero = prompt("Digite outro numero!")

    const soma = Number(primeiroNumero) + Number(segundoNumero)

    console.log(soma)

 
///////////////////////////////////
//Exercícios de escrita de código//
//////////////////////////////////

    //Exercicio 1.


    let idadeUsuario 
    let idadeFriend

    idadeUsuario = prompt("Digite sua idade")
    idadeFriend = prompt("Digite a idade do seu Best Friend")

    let comparadorIdade = idadeUsuario > idadeFriend

    console.log ("Sua idade é maior do que a do seu Best Friend?" , comparadorIdade  )

    console.log ("A diferença entre a idade dos dois é: " , Number(idadeUsuario) - Number(idadeFriend))
 

    //Exercicio 2.


    let numeroPar = prompt("Digite um Numero Par")

    console.log(Number(numeroPar) % 2)

    //Questão C: Sempre que é inserido um numero par o resto de divisão impresso no console é 0.
    //Questão D: Quando é inserido um numero impar o resto de divisão passa a ser 1. 
    //Conclusão: com isso é possivel identificar se o numero inserido é par ou impar de acordo com o resto de divisão por 2.


    //Exercicio 3.

    

    let idadeEmAnos = prompt("Quantos anos você tem?")
    let idadeEmMeses = idadeEmAnos * 12
    let idadeEmDias = 365 * idadeEmAnos
    let idadeEmHoras = idadeEmDias * 24

    console.log("Você tem ", idadeEmAnos , "anos, " , idadeEmMeses , " meses, " , idadeEmDias , " dias, e " , idadeEmHoras , " horas de vida.")


   //Exercicio 4.


    let numero1 = Number (prompt("Digite o primeiro numero!"))
    let numero2 = Number (prompt("Digite o segundo numero!"))
    let divN1= numero1 % numero2
    let divN2 = numero2 % numero1

    console.log("O primeiro numero é maior que segundo? ", numero1 > numero2)
    console.log( "O primeiro numero é igual ao segundo? ", numero1 === numero2) 
    console.log("O primeiro numero é divisível pelo segundo? " , divN1 === 0 )    
    console.log("O segundo numero é divisível pelo primeiro?" , divN2 === 0 ) 



        //////////////////////////
        ////////DESAFIOS/////////
        ////////////////////////

        // ECERCICIO 1. 

 
    A. let Kelvin = (77 - 32)*(5/9) + 273.15
        console.log(Kelvin , "K")

    B. let fahenheit = (80*(9/5)) + 32
        console.log(fahenheit, "°F")

    C. let fahenheit = (30*(9/5)) + 32
       let Kelvin = (fahenheit - 32)*(5/9) + 273.15
            console.log(fahenheit, '°F e ', Kelvin, 'K')'

    D. let grausCelsius = Number(prompt ("digite o valor"))
        let fahenheit = (grausCelsius*(9/5)) + 32
        let Kelvin = (fahenheit - 32)*(5/9) + 273.15
            console.log(fahenheit, '°F e ', Kelvin, 'K')
   
*/




