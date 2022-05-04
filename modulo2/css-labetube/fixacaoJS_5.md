**Exercícios de Fixação de Javascript - Treino 5**

```js
function criarArrayNomesAnimais() {
    const animais = [
      { nome: "Cachorro", classificacao: "mamífero" },
      { nome: "Papagaio", classificacao: "ave" },
      { nome: "Gato", classificacao: "mamífero" },
      { nome: "Carpa", classificacao: "peixe" },
      { nome: "Pomba", classificacao: "ave" }
    ]

 let nomeAnimais = animais.map(function(item){
   return item.nome
 });
 
return nomeAnimais
}
 ```