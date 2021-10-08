import Stack from './lib/Stack.mjs';

// const expressao = '3 / {2 + 4 * [-1 - (4 * 7) / 2] + (2 * 7)}';
// const expressao = '3 / {2 + 4 * [-1 - (4 * 7) / 2) + (2 * 7]}';
// const expressao = '3 / {2 + 4 * [(-1 - (4 * 7) / 2] + [(2 * 7)}';
const expressao = '3 / {2 + 4} * [-1 - (4 * 7) / 2)] + (2 * 7)}';

const analisador = new Stack(); // Cria uma pilha

/*
 * Tipos de símbolos:
 * P = parêntese
 * C = colchete
 * X = chave
*/

function verifFechamento(tipoFecha, posFecha, infoAbre) {
    /**
     * O valor undefined para infoAbre significa que a pilha tornou-se
     * vazia antes do fim da análise da expressão.
     * Isso ocorre quando há mais símbolos de fechamento do que de abertura
     */
    if (infoAbre === undefined) {
        console.log(`ERROR: há mais símbolos de fechamento que de abertura; tipo ${tipoFecha}, posição ${posFecha}`);
    } else if (tipoFecha === infoAbre.tipo) {
        console.log(`-> Símbolo tipo ${infoAbre.tipo} aberto na posição ${infoAbre.pos} e fechado na posição ${posFecha}`)
    } else {
        console.log(`ERRO: símbolo de fechamento do tipo ${tipoFecha} encontrado na posição ${posFecha}; esperado tipo ${infoAbre.tipo}`)
    }
}

/**
 * 
 * Percore a expressão procurando por símbolos
 * 1. Quando encontra o símbolos de abertura, empilha, no analisador
 * informações sobre ele
 * 2. Quando encontra símbolos de fechamento, desempilha e chama a
 * função verifFechamento() para verificar as informações
 * 
 */

for (let pos = 0; pos < expressao.length; pos++) {
    switch (expressao.charAt(pos)) {

        case '{':
            analisador.push({ tipo: 'X', pos: pos });
            // console.log('\nAbre X', analisador.print());
            break;
        case '[':
            analisador.push({ tipo: 'C', pos: pos });
            // console.log('\nAbre C', analisador.print());
            break;
        case '(':
            analisador.push({ tipo: 'P', pos: pos });
            // console.log('\nAbre P', analisador.print());
            break;
        case '}':
            verifFechamento('X', pos, analisador.pop());
            // console.log('\nFecha X', analisador.print());
            break;
        case ']':
            verifFechamento('C', pos, analisador.pop());
            // console.log('\nFecha C', analisador.print());
            break;
        case ')':
            verifFechamento('P', pos, analisador.pop());
            // console.log('\nFecha P', analisador.print());
            break;
    }
}

// console.log(analisador.print());

// Verifica se hove sobra na pulha
// (Acontece quando há mais símbolos de abertura do que de fechamento)
while (!analisador.isEmpty) {
    let sobra = analisador.pop();
    console.log(`ERRO: símbolo de abertura do tipo ${sobra.tipo} na posição ${sobra.pos} não possui símbolo de fechamento corespondente`);
}