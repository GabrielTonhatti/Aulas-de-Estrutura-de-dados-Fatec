// Normalmente, se usa inicial maiúscula para nomear classes
class FormaGeometrica {

    /* 
     * Variáveis usadas dentro de uma classe são chamadas ATRIBUTOS.
     * Existem dois tipos de atributos:
     * 1) Atributo PÚBLICO: pode ser acessado tanto de dentro quanto de fora da classe.
     * 2) Atributo PRIVADO: só pode ser acessado de dentro da classe.
     *  Em JavaScript, os nomes de atributos privados devem iniciar com uma #.
     * 
    */

    // Declaração de atributos PRIVADOS - note que NÃO usamos let, var ou const

    #base
    #altura
    #tipo

    /*
     *  Além de variáveis (atributos), classes podem conter também funções,
     *  que são chamados, nesse caso, de MÉTODO. Existe um método especial,
     *  chamado "constructor", que é invocado toda vez que se tenta criar
     *  um objeto a partir da classe.
     * 
    */

    constructor(base, altura, tipo) {
        /*
         * O construtor recebe dados externos: base, altura e tipo
         * e os armazena os atributos internos #base, #altura e #tipo.
         * Toda vez que nos referimos a um atributo ou método ( que pertencem
         * à classe), precisamo prefixá-los com this + ponto.
         *
        */

        this.#base = base;
        this.#altura = altura;
        this.#tipo = tipo;
    }

}