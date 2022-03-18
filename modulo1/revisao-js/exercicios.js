// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    return array.length
}


// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    //return array.reverse()
    let resultado = []
    let x = array.length - 1

    for (i = 0; i < array.length; i++) {
        resultado.push(array[x])
        x--
    }
    return resultado
}


// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    return array.sort(function (a, b) {
        return a - b
    })
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    //let numerosPares = array.filter(i => i % 2 === 0)
    let numerosPares = []
    let numeroImpares = []

    for (i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            numerosPares.push(array[i])
        } else {
            numeroImpares.push(array[i])
        }
    }

    return numerosPares
}


// EXERCÍCIO 05 
function retornaNumerosParesElevadosADois(array) {
    let numerosPares = array.filter(i => i % 2 === 0);

    let numeroAoQuadrado = numerosPares.map((2, (i) => {
        return Math.pow(i, 2);
    }));

    return numeroAoQuadrado;
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    let maiorNumero = array.reduce((a, b) => {
        return Math.max(a, b);
    })

    return maiorNumero
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    let menorNumero = Math.min(num1, num2)

    let objeto = {
        maiorNumero: Math.max(num1, num2)
        , maiorDivisivelPorMenor: false
        , diferenca: 0
    };
    objeto.maiorDivisivelPorMenor = objeto.maiorNumero % menorNumero === 0
    objeto.diferenca = objeto.maiorNumero - menorNumero

    return objeto
}


// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    let Pares = [];
    for (let i = 0; Pares.length < n; i++) {
        if (i % 2 == 0) {
            Pares.push(i);
        }
    }
    return Pares;
}


// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    if (ladoA === ladoB && ladoA === ladoC && ladoB === ladoC) {
        return "Equilátero"
    } else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
        return "Isósceles"
    } else {
        return "Escaleno"
    };
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
    let novoArray = array.sort((a, b) => a - b)
    return [novoArray[novoArray.length - 2], novoArray[1]]
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
    return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores.join(', ')}.`

}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
    let novoObjeto = {
        pessoa: pessoa
    };

    novoObjeto.pessoa["nome"] = "ANÔNIMO"
    return novoObjeto.pessoa
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {

}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {

}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {

}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {

}