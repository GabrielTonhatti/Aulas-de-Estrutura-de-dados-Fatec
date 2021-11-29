
// 1. Veja, na imagem "torres-hanoi.png", como funciona o jogo das Torres de Hanoi.

// 2. Cada uma das torres do jogo se comporta como uma pilha. Importe a classe
//    apropriada e crie três pilhas, representando as três torres.
import Stack from './lib/Stack.mjs';

const firstTower = new Stack();
const secondTower = new Stack();
const thirdTower = new Stack();

// 3. Use os valores 1, 2 e 3 para representar os discos. Empilhe-os na primeira
//    torre.
firstTower.push(3);
firstTower.push(2);
firstTower.push(1);

// 4. Desempilhe um dos discos da primeira torre e empilhe-o na terceira.
thirdTower.push(firstTower.pop());

//5. Desempilhe o disco remanescente da primeira torre e coloque-o na segunda.
secondTower.push(firstTower.pop());

// 6. Desempilhe o disco da terceira torre e coloque-o sobre o disco da segunda torre.
secondTower.push(thirdTower.pop());

// 7. Desempilhe o disco da primeira torre e coloque-o na terceira torre.
thirdTower.push(firstTower.pop());

// 8. Desempilhe um dos discos da segunda torre e coloque-o na primeira torre.
firstTower.push(secondTower.pop());

// 9. Desempilhe o disco da segunda torre e coloque-o sobre o disco da terceira torre.
thirdTower.push(secondTower.pop());

// 10.Finalmente, desempilhe o disco da primeira torre e coloque-o na terceira torre.
thirdTower.push(firstTower.pop());

// 11.Use o método print() para exibir as três pilhas. As duas primeiras devem estar
//    vazias e a terceira deve conter os três discos, na ordem (3 na base, 1 no topo).
console.log("First Tower:", firstTower.print());
console.log("Second Tower:", secondTower.print());
console.log("Third Tower:", thirdTower.print());





