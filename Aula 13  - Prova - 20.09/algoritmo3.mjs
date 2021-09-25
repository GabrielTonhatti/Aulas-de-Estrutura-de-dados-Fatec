/*
    INSTRUÇÕES

    1) Identifique o algoritmo abaixo.
    2) Faça o mapeamento das variáveis (registre em comentário o propósito de cada uma delas).
    3) Introduza a função de comparação, de modo que o algoritmo possa ser utilizado com vetores de objetos.

*/

// Método de comparação "Selection Sort"
const z = (y, fnComp) => {
    // O "y" é o vetor passado como parâmetro
    // A variável "x" é a posição de seleção do vetor
    for(let x = 0; x < y.length - 1; x++) {
        let w = x + 1 // A variável "w" é a posição menor do vetor
        for(let i = w + 1; i < y.length; i++) {
            // A variável "i" é a posição de "w" mais 1, sendo a posição maior
            // Se a "y" posição "w" for maior que "y" posição "i"
            if(fnComp(y[w] > y[i])) w = i // Então o "w" vai receber a posição de "i"
        }
        if(fnComp(y[x] > y[w])) { // Se "Y" na posição selecionada for maior que a posição menor(w)
            // Então o y na posição x recebe o y na posição w
            // e y na posição w recebe y na posição x
            // ou seja trocão de lugar
            [ y[x], y[w] ] = [ y[w], y[x] ] 
        }
    }

    return y;
}

const comparacao = (elemento1, elemento2) => {
    if (elemento1.razao_social === elemento2.razao_social) {
        return elemento1.nome_motorista > elemento2.nome_motorista;
    }
    else return elemento1.razao_social > elemento2.razao_social
}
