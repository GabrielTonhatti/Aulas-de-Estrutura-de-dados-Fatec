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

    #base;
    #altura;
    #tipo;

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

        // Validações
        /*
        if (typeof base !== 'number' || base <= 0) {
            // Gera um erro e aborta a criação do objeto
            throw new Error(`ERRO: A base precisa ser numérica e maior que zero.`);
        }

        if (typeof altura !== 'number' || altura <= 0) {
            // Gera um erro e aborta a criação do objeto
            throw new Error(`ERRO: A altura precisa ser numérica e maior que zero.`);
        }

        // if (tipo !== 'R' && tipo !== 'T' && tipo !== 'E') {
        if (!['R', 'T', 'E'].includes(tipo)) {
            // Gera um erro e aborta a criação do objeto
            throw new Error(`ERRO: O tipo precisa ser um dos valores: "R", "T" ou "E".`);
        }
        */

        // Chamando os setter das propriedades para fazer a validação
        this.base = base;
        this.altura = altura;
        this.tipo = tipo;
    }

    // Funções getter: Têm a finalidade de tornar visíveis ao mundo externo
    // informações armazenadas em atributos privados de uma classe.

    get base() {
        return this.#base;
    }

    get altura() {
        return this.#altura;
    }

    get tipo() {
        return this.#tipo;
    }

    // Funções setter: Permitem que o valor de atributos privados sejam alterados
    // do lado de fora da classe.
    set base(valor) {

        if (typeof valor !== 'number' || valor <= 0) {
            // Gera um erro e aborta a criação do objeto
            throw new Error(`ERRO: A base precisa ser numérica e maior que zero.`);
        }

        this.#base = valor;
        // console.log(`Alterado o valor do atributo #base para ${valor}.`)
    }

    set altura(valor) {

        if (typeof valor !== 'number' || valor <= 0) {
            // Gera um erro e aborta a criação do objeto
            throw new Error(`ERRO: A altura precisa ser numérica e maior que zero.`);
        }

        this.#altura = valor;
    }

    set tipo(valor) {

        if (!['R', 'T', 'E'].includes(valor)) {
            // Gera um erro e aborta a criação do objeto
            throw new Error(`ERRO: O tipo precisa ser um dos valores: "R", "T" ou "E".`);
        }

        this.#tipo = valor;
    }

    /*
     *
     * PROPRIEDADES: São abstrações presentes em uma classe que permitem ler e/ou
     * alterar o valor de um atributo privado.
     * Uma propriedade é formada, pelo menos, por uma função getter.
     * Propriedades de leitura e escrita têm tanto um getter quanto um setter.
     * O nome da propriedade é o nome das funções getter/setter correspondentes.
     *
    */

    // Métodos público
    calcArea() {
        switch (this.tipo) {
            case 'R':
                return this.base * this.altura;
            case 'E':
                return (this.base / 2) * (this.altura / 2) * Math.PI; 
            case 'T':
                return this.base * this.altura / 2;
        }
    }

    // Alternativa: propriedade somente-leitura (só possui o getter)
    get area() {
        switch (this.tipo) {
            case 'R':
                return this.base * this.altura;
            case 'E':
                return (this.base / 2) * (this.altura / 2) * Math.PI; 
            case 'T':
                return this.base * this.altura / 2;
        }
    }
}

/****************************************************************************************/

// Criando objetos a partir da classe
let forma1 = new FormaGeometrica(15, 16, 'T');  // Isso chamará o construtor da classe

// Uma função getter é chamada Sem a utilização dos parênteses
console.log(forma1.base, forma1.altura, forma1.tipo);

let forma2 = new FormaGeometrica(9.7, 5, 'E');
console.log(forma2.base, forma2.altura, forma2.tipo);

forma1.base = 7;    // Chama a função setter
forma1.altura = 25.5;   // Chama a função setter
forma1.tipo = 'R';   // Chama a função setter
console.log(forma1.base, forma1.altura, forma1.tipo);

let forma3 = new FormaGeometrica(14,10,'T');

console.log(`Área da forma1: ${forma1.calcArea()}`);
console.log(`Área da forma2: ${forma2.calcArea()}`);
console.log(`Área da forma3: ${forma3.calcArea()}`);

console.log(`Área da forma1: ${forma1.area}`);
console.log(`Área da forma2: ${forma2.area}`);
console.log(`Área da forma3: ${forma3.area}`);

// A propriedade "área" é somente-leitura - não pode ser modificada
// forma2.area = 175;