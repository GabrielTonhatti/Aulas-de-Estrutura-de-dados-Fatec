let passadas,
    comparacao,
    trocas;

function bubbleSort(array, fnComp) {

    passadas = 0, 
    comparacao = 0, 
    trocas = 0;

    let trocou;

    do {

        passadas++;

        trocou = false;

        for (let i = 0; i < array.length - 1; i++) {

            comparacao++;

            if (fnComp(array[i], array[i + 1])) {

                [array[i], array[i + 1]] = [array[i + 1], array[i]];

                trocou = true;

                trocas++;
            }
        }

    } while (trocou)
}

import { fnComparacao } from '../funcao.mjs';

import { gastos } from '../data/cota-parlamentar-8.5-mil.mjs';

console.time('Tempo de ordenação');

bubbleSort(gastos, fnComparacao);

let memoriaMB = process.memoryUsage().heapUsed / 1024 / 1024;

console.timeEnd('Tempo de ordenação');

console.log(gastos);
console.log({ passadas, comparacao, trocas, memoriaMB });
