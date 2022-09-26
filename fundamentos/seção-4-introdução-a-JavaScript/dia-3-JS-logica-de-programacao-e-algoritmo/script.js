// exercicio 1
//crie um algoritmo que imprima na tela o fatorial de 10

//let fatorial = 1;

//for (let index = 10; index > 0; index -= 1) {
  //fatorial *= index;
//}

//console.log(fatorial);

// exercicio 2 - inverter uma palavra

//let word = 'tryber';

//let reverseWord = '';

//for (let index = 0; index < word.length; index += 1) {
  //reverseWord += word[word.length - 1 - index];
//}

//console.log(reverseWord);

// exercicio - 3 maior palavra do array

let array = ['java', 'javascript', 'python', 'html', 'css'];

let biggestWord = array[0];
let smallestWord = array[0];

for (let index = 0; index < array.length; index += 1) {
  if (array[index].length > biggestWord.length) {
    biggestWord = array[index];
  }
}

for (let index = 0; index < array.length; index += 1) {
  if (array[index].length < smallestWord.length) {
    smallestWord = array[index];
  }
}

console.log(biggestWord);
console.log(smallestWord);