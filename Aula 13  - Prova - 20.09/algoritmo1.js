/*
    INSTRUÇÕES

    1) Identifique o algoritmo abaixo.
    2) Faça o mapeamento das variáveis (registre em comentário o propósito de cada uma delas).
    3) Introduza a função de comparação, de modo que o algoritmo possa ser utilizado com vetores de objetos.
*/

// a função "z" é o método "Merge Sort"
const z = y => {
    if(y.length < 2) return y 
    let x = Math.floor(y.length / 2) // O meio do vetor, que está sendo ordenado
    let w = y.slice(0, x) // O vetor da esquerda
    let v = y.slice(x) // O vetor da direita a partir do vetor do meio
    let u // Determina qual dos vetores tem sobra
    w = z(w) // Chamando a função novamente e atribuindo o valor a variável "w" passando ele próprio como parâmetro
    v = z(v) // Chamando a função novamente e atribuindo o valor a variável "v" passando ele próprio como parâmetro
    
    // a variável "t" é a posição da esquerda, o "s" a posição da direita e o "r" o vetor com as respostas
    let t = 0, s = 0, r = []
    while(t < w.length && s < v.length) {
        if(w[t] < v[s]) { // Se a posição da esquerda na posição "t" for menor que a posição da direita
            r.push(w[t]) // O vetor "r" está recebendo o valor de "w" na posição "t"
            t++ // a variável "t" está está incrementando o valor dela para o valor atual mais 1
        }
        else { // Se não
            r.push(v[s])// O vetor "r" está recebendo o valor de "v" na posição "s"
            s++ // a variável "s" está incrementando o valor dela para o valor atual mais 1
        }
    }

    // Se a posiçã da esquerda(t) for menor que a posição da direita(s)
    if(t < s) u = w.slice(t) // então a sobra vai receber o vetor da esquerda(w) a partir da posição "t"
    // Se não
    else u = v.slice(s) // então a sobra vai receber o vetor da direita(v) a partir da posição "s"
    return [...r, ...u] // o vetor final ordenado será a concatenação de r + u
}

let nums = [77, 44, 22, 33, 99, 55, 88, 0, 66, 11];

let numsOrd = z(nums);

console.log({ numsOrd });