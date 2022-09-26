// exercicio 1
//crie um algoritmo que imprima na tela o fatorial de 10

//let fatorial = 1;

//for (let index = 10; index > 0; index -= 1) {
  //fatorial *= index;
//}

//console.log(fatorial);

// exercicio 2 - inverter uma palavra

let word = 'tryber';

let reverseWord = '';

for (let index = 0; index < word.length; index += 1) {
  reverseWord += word[word.length - 1 - index];
}

console.log(reverseWord);

