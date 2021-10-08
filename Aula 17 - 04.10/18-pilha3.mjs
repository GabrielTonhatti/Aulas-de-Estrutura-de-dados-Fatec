// PALÍNDROMO: texto que pode ser lido de trás para frente e continua idêntico

import Stack from './lib/Stack.mjs';

let frase = "Socorram-me, subi no ônibus em Marrocos";

// Problema: inverter a frase para verificar se é um palíndromo

let pilha = new Stack();   // Vetor vazio

// Percorre a frase e coloca cada uma das letras dela
// dentro do vetor

for(let i = 0; i < frase.length; i++) {
    pilha.push(frase.charAt(i));    // Insere no final do vetor
}

console.log(pilha.print());

let reverso = '';

while(!pilha.isEmpty) {
    reverso += pilha.pop(); // Retirar do final do vetor
}

console.log(reverso);

/*
 *
 * PILHA
 * É uma estrutura de dados em que, usando uma lista linear (vetor) como
 * base, permite inserções apenas no final e remoções também a partir do
 * final.
 * Com isso, temos o comportamento conhecido como LIFO = Last In, First Out.
 * (último a entrar, primeiro a sair).
 * Pilhas são usadas em taredas computacionais em que requerem a inversão da
 * ordem de entrada dos dados.
 * 
*/