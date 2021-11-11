let passadas,
    comparacao,
    trocas;

function selectionSort(array, fnComp) {
    passadas = 0, comparacao = 0, trocas = 0;

    for (let posicaoSel = 0; posicaoSel < array.length - 1; posicaoSel++) {

        passadas++;

        let posicaoMenor = posicaoSel + 1;

        for (let i = posicaoMenor + 1; i < array.length; i++) {

            if (fnComp(array[posicaoMenor], array[i])) {

                posicaoMenor = i;

            }

            comparacao++;
        }

        comparacao++;

        if (fnComp(array[posicaoSel], array[posicaoMenor])) {

            [array[posicaoSel], array[posicaoMenor]] = [array[posicaoMenor], array[posicaoSel]];

            trocas++;
        }
    }
}

import { fnComparacao } from '../funcao.mjs';

import { gastos } from '../dados/cota-parlamentar-282-mil.mjs';

console.time('Tempo de ordenação');

selectionSort(gastos, fnComparacao);

let memoriaRAM = process.memoryUsage().heapUsed / 1024 / 1024;

console.timeEnd('Tempo de ordenação');

console.log(gastos);
console.log({ passadas, comparacao, trocas, memoriaRAM });