**Exercicio de Fixação de Javascript = treino 3**
**http://assorted-bean.surge.sh/**

```js
//Media ponderada
function calculaNota(ex, p1, p2) {
   let media = (ex + (p1*2) + (p2*3)) /6   
    
    if (media >= 9) {
        return "A"

    } else if ( media >= 7.5) {
        return "B"
        
    } if ( media >= 6 ) {
        return "C"
        
    } else { 
        return "D"
        
    } 
    return calculaNota
   
}


// Media tambem passou em todos os testes
function calculaNota(ex, p1, p2) {
    let media = (ex + p1 + p2) / 3 
    
    if (media >= 9) {
        return "A"

    } else if (media < 9 && media >= 7.5) {
        return "B"
        
    } if (media < 7.5 && media >= 6 ) {
        return "C"
        
    } else { 
        return "D"
        
    } 
    return calculaNota
  }
  ```