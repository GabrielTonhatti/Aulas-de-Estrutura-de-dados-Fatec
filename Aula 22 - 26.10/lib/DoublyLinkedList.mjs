/**
 * ESTRUTURA DE DADOS LISTA ENCADEADA
 * 
 * - A lista encadeada é uma estrutura de dados formada por unidades
 * de informação chamados nodos ou nós.
 * - Cada nodo da lista encadeada tem duas partes: uma, que armazena a
 * informação e outra que guarda o endereço do próximo nodo da sequência.
 * - A qualquer momento, temos um conhecimento apenas limitado de onde
 * se econtram todos os nodos da lista. Sabemos apenas onde está o
 * primeiro e o último nodo da sequência. Os nodos intermediários precisam
 * ser encontrados partindo-se do primeiro e percorrendo a sequência.
 */

// Classe que representa a unidade de informação da lista duplamente encadeada
class Node {

    constructor(val) {
        this.prev = null;   // Ponteiro para o nodo anterior da sequência
        this.data = val;    // Armazena a informação relevante para o usuário
        this.next = null;   // Ponteiro para o nodo seguinte da sequência
    }
}

// Classe que representa a estrutura de dados lista duplamente encadeada
export default class DoublyLinkedList {

    #head;  // Iníco da lista (cabeça)
    #tail;  // Fim da lista (cauda)
    #count; // Quantidade de elementos da lista

    constructor() {
        this.#head = null;
        this.#tail = null;
        this.#count = 0;
    }

    // Getter que retorna se a lista encadeada está vazia ou não
    get isEmpty() {
        return this.#count === 0;
    }

    // Getter que retorna a quantidade de elementos da lista
    get count() {
        return this.#count;
    }

    // Método para inserir em qualquer posição
    insert(pos, val) {

        // Cria o nodo a ser inserido, contendo a informação
        // passada pelo usuário
        let inserted = new Node(val);

        // 1º caso: lista vazia
        if (this.isEmpty) {
            // O nodo inserido será, ao mesmo tempo, o início
            // e o fim da lista
            this.#head = inserted;
            this.#tail = inserted;
        }

        // 2º caso: inserção na primeira posição
        else if (pos === 0) {
            // o nodo inserido aponta à frente para o #head
            inserted.next = this.#head;
            // #head aponta para trás para o nodo inserido
            this.#head.prev = inserted;
            // #head passa a ser o inserted
        }

        // 3º caso: inserção na última posição
        else if (pos === this.#count - 1)  {
            // O nodo inserido aponta para trás para o #tail
            inserted.prev = this.#tail;

            // #tail aponta para a frente para o nodo inserido
            this.#tail.next = inserted;
            
            // #tail passa a aponta para o nodo inserido
            this.#tail = inserted;
        }

        // 4º caso: inserçã em posição intermediária

        this.#count++;
    }
}