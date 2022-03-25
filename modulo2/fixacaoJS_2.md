**Exercícios de Fixação de Javascript - Treino 2**
```js

function calculaPrecoTotal(quantidade) {
 let unidade = 1.30
 let duzia = 1.00
 let custoTotal

 
  if (quantidade < 12){
    custoTotal = quantidade * unidade;
     } else { custoTotal = quantidade * duzia;
  }
  
  return custoTotal
  
}

```