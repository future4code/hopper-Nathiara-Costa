/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
console.log ("Boas vindas ao jogo de Blackjack!")

if(confirm("Quer iniciar uma nova rodada?")) {
   
   let usuario = []
   let computador = []
   let resultadoUsuario = 0
   let resultadoComputador = 0

   for (let index = 0; index < 2; index++) {

      const carta1 = comprarCarta();
      const carta2 = comprarCarta();  

      usuario.push(carta1)
      computador.push(carta2)    

      resultadoUsuario += carta1.valor
      resultadoComputador += carta2.valor
   }

   console.log(`Usuário - cartas: ${usuario[0].texto} ${usuario[1].texto} - pontuação ${resultadoUsuario}`)
   console.log(`Computador - cartas: ${computador[0].texto} ${computador[1].texto} - pontuação ${resultadoComputador}`)

   if(resultadoUsuario === resultadoComputador)
      console.log ("Empate!")
   else if (resultadoUsuario > resultadoComputador)
      console.log ("O usuário ganhou!")
   else
      console.log("O computador ganhou!")

} else 
   console.log ("O jogo acabou")
