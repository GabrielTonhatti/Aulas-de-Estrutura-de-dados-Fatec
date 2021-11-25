/**
 * 
 * ESTRUTA DE DADOS DEQUE
 * 
 * - Deque = Double-Ended Queue (fila de duas pontas)
 * - Deque é uma lista de acesso restrito, que permite apenas operações 
 * de enfileiramento (insertFront/insertBack) e desenfileiramento (removeFront/
 * removeBack), acontecendo em qualquer uma das extremidades da estrutura.
 * - Como consequência, o Deque NÃO SEGUE o princípio FIFO (First In, First Out - 
 * primeiro a entrar, primeiro a sair).
 * - A principal apĺicação dos Deques são situações em que filas precisam aceitar
 * a inserção ed itens prioritários e a desistência do último item.
 * 
 */

export default class Deque {

    #data;  // Vetor privado

    constructor() {
        this.#data = [];
    }

    // Método para inserção no início da estrutura
    insertFront(val) {
        this.#data.unshift(val);
    }

    // Método para inserção no final da estrutura
    insertBack(val) {
        this.#data.push(val);
    }

    // Método para remoção do início da estrutura
    removeFront() {
        return this.#data.shift();
    }

    // Método para remoção no final da estrutura
    removeBack() {
        return this.#data.pop();
    }

    // Método para consultar o inicio da estrutura
    peekFront() {
        return this.#data[0];
    }

    // Método para consultar no final da estrutura
    peekBack() {
        return this.#data[this.#data.length - 1];
    }

    // Getter para informar se o Deque está ou não vazio (propriedade somente leitura)
    get isEmpty() {
        return this.#data.length === 0;
    }

    // Método que imprime o Deque (para efeitos de depuração)
    print() {
        let output = '[ ';
        for (let i = 0; i < this.#data.length; i++) {
            if (output !== '[ ') output += ', ';
            output += `(${i}): ${this.#data[i]}`;
        }

        return output + ' ]';
    }

}