**Exercicio Fixação Js-4**


```js
function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
    let count = 0;
    
    for (let i = 0; i < arrayDeNumeros.length; i++) {
      if(arrayDeNumeros[i] == numeroEscolhido){
        count ++;
      }
    }
    
    if(count > 0){
      return `O número ${numeroEscolhido} aparece ${count}x`
    }else {
       return "Número não encontrado"
    }
   
    
}
```