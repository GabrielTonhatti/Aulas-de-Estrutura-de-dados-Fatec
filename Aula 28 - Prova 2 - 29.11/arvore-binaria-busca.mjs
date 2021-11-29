/*
 1. Todas as questões deste arquivo referem-se à árvore binária de busca representada
     na imagem "abb.png".

 2. Caso seja necessário escrever algum código para responder às perguntas seguintes,
     importe a classe BinarySearchTree neste arquivo e faça os testes aqui.

 3. Qual a altura da subárvore à direita de 45?
     R: A subárvore direita tem a altura 7;

 4. Quais níveis da árvore estão completos, isto é, já contêm o número máximo de nodos
     permitidos?
         R: Os níveis da árvore binária que estão completos são: 24, 9, 39, 3, 15, 72, 66, 84, 78, 96

 5. Qual a profundidade do nodo de valor 27, em relação à árvore como um todo?
     R: O nodo de valor 27 tem profundidade 4;

 6. A árvore representada está equilibrada? Por quê? Justifique sua resposta.
     R: Não, pois a subárovre direita é maior do que a subárvore direita

 7. Qual será o resultado do percurso pré-ordem após terem sido excluídos os nodos
     de valor 42, 39, 49, 51 e 54?
     R: Após a remoção, a ordem será:   45, 24,  9,  3,  0,  6, 15, 12,
                                       18, 36, 27, 33, 72, 66, 60, 57,
                                       63, 69, 84, 78, 75, 81, 96, 90,
                                       87, 99

 8. Após a exclusão dos nodos 42, 39, 49, 51 e 54, se for removido o nodo raiz (de
     valor 45), qual(is) nodo(s) poderia(m) ocupar o seu lugar? Justifique sua resposta.

*/


import BynarySearchTree from './lib/BynarySearchTree.mjs';

const tree = new BynarySearchTree();

tree.insert(45);
tree.insert(72);
tree.insert(24);
tree.insert(39);
tree.insert(66);
tree.insert(69);
tree.insert(9);
tree.insert(3);
tree.insert(36);
tree.insert(0);
tree.insert(6);
tree.insert(15);
tree.insert(12);
tree.insert(18);
tree.insert(42);
tree.insert(27);
tree.insert(33);
tree.insert(60);
tree.insert(49);
tree.insert(54);
tree.insert(51);
tree.insert(57);
tree.insert(63);
tree.insert(84);
tree.insert(78);
tree.insert(75);
tree.insert(81);
tree.insert(96);
tree.insert(90);
tree.insert(87);
tree.insert(99);

let percurso = [];
tree.inOrderTraversal(val => percurso.push(val));
console.log('Percurso em-ordem:', percurso);

percurso = [];
tree.preOrderTraversal(val => percurso.push(val));
console.log('Percurso pré-ordem:', percurso);

percurso = [];
tree.postOrderTraversal(val => percurso.push(val));
console.log('Percurso pós-ordem:', percurso);

tree.remove(42);
tree.remove(39);
tree.remove(49);
tree.remove(51);
tree.remove(51);
tree.remove(54);
percurso = [];
tree.inOrderTraversal(val => percurso.push(val));
percurso = [];
tree.preOrderTraversal(val => percurso.push(val));
console.log('Percurso pré-ordem:', percurso);