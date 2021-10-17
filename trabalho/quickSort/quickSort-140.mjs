let passadas = 0,
    comparacao = 0,
    trocas = 0;

function quickSort(array, fnComp, start = 0, end = array.length - 1) {

    if (end <= start) {

        return;

    }

    passadas++;

    const pivot = end;

    let divisao = start - 1;

    for (let i = start; i < end; i++) {

        comparacao++;

        if (fnComp(array[pivot], array[i])) {

            divisao++;

            if (divisao !== 1) {

                [array[i], array[divisao]] = [array[divisao], array[i]];

                trocas++;

            }

        }

    }

    divisao++;

    comparacao++;

    if (divisao !== pivot && fnComp(array[divisao], array[pivot])) {

        [array[divisao], array[pivot]] = [array[pivot], array[divisao]];

        trocas++;
        
    }

    quickSort(array, fnComp, start, divisao - 1);

    quickSort(array, fnComp, divisao + 1, end);

}

import { fnComparacao } from '../funcao.mjs';

import { gastos } from '../dados/cota-parlamentar-140-mil.mjs';

console.time('Tempo de ordenação');

quickSort(gastos, fnComparacao);

let memoriaRAM = process.memoryUsage().heapUsed / 1024 / 1024;

console.timeEnd('Tempo de ordenação');

console.log(gastos);
console.log({ passadas, comparacao, trocas, memoriaRAM });