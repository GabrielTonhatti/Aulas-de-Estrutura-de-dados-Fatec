let comparacao = 0,
    divisao = 0,
    juncao = 0;

function mergeSort(array, fnComp) {

    if (array.length < 2) return array;

    let meio = Math.floor(array.length / 2);

    let arrayEsq = array.slice(0, meio);

    let arrayDir = array.slice(meio);

    divisao++;

    arrayEsq = mergeSort(arrayEsq, fnComp);

    arrayDir = mergeSort(arrayDir, fnComp);

    let posicaoEsq = 0, posicaoDir = 0, arrayRes = [];

    while (posicaoEsq < arrayEsq.length && posicaoDir < arrayDir.length) {

        comparacao++;

        if (fnComp(arrayDir[posicaoDir], arrayEsq[posicaoEsq])) {

            arrayRes.push(arrayEsq[posicaoEsq]);

            posicaoEsq++;

        }
        else {

            arrayRes.push(arrayDir[posicaoDir]);

            posicaoDir++;

        }
    }

    let sobra;

    if (posicaoEsq < posicaoDir) {

        sobra = arrayEsq.slice(posicaoEsq);

    } else {

        sobra = arrayDir.slice(posicaoDir);

    }

    juncao++;

    return [...arrayRes, ...sobra];
}

function fnComparacao(obj1, obj2) {

    if (obj1.id_documento === obj2.id_documento) {

        if (obj1.partido === obj2.partido) {

            return obj1.nome_parlamentar > obj2.nome_parlamentar

        } else {

            return obj1.partido > obj2.partido;
        }
    } else {

        return obj1.id_documento > obj2.id_documento;
        
    }
}

import { gastos } from '../data/cota-parlamentar-35-mil.mjs';

console.time('Tempo de ordenação');

let arrayGastosOrdenados = mergeSort(gastos, fnComparacao);

let memoriaRAM = process.memoryUsage().heapUsed / 1024 / 1024;

console.timeEnd('Tempo de ordenação');

console.log(arrayGastosOrdenados);
console.log({ comparacao, divisao, juncao, memoriaRAM });
