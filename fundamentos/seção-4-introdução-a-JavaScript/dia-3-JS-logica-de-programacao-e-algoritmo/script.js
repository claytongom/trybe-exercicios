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

//let array = ['java', 'javascript', 'python', 'html', 'css'];

//let biggestWord = array[0];
//let smallestWord = array[0];

//for (let index = 0; index < array.length; index += 1) {
  //if (array[index].length > biggestWord.length) {
    //biggestWord = array[index];
 // }
//}

//for (let index = 0; index < array.length; index += 1) {
 // if (array[index].length < smallestWord.length) {
    //smallestWord = array[index];
 // }
//}

//console.log(biggestWord);
//console.log(smallestWord);

// exercicio - 4 

//let biggestPrimeNumber = 0;

//for (let currentNumber = 2; currentNumber <= 50; currentNumber += 1) {
  //let isPrime = true;
  //for (let currentDivisor = 2; currentDivisor < currentNumber; currentDivisor += 1) {
    //if (currentNumber % currentDivisor === 0) {
      //isPrime = false;
    //}
  //}
  //if (isPrime) {
    //biggestPrimeNumber = currentNumber;
  //}
//}

//console.log(biggestPrimeNumber);

//bonus 1 - quadrado de asteriscos

//let n = 5;
//let symbol = '*';
//let inputLine = '';

//for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
  //inputLine = inputLine + symbol;
//};
//for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
  //console.log(inputLine);
//};

// bonus 2  - triangulo de asterisco (base 5 *)

//let size = 5;
//let symbol = '*';
//let inputLine = '';

//for (let lineIndex = 0; lineIndex <= size; lineIndex += 1) {
  //console.log(inputLine);
  //inputLine = inputLine + symbol;
//};

// bonus 3  - triangulo de asterisco (base 5 *) invertido

//let n = 5;
//let symbol = '*';
//let inputLine = '';
//let inputPosition = n - 1;

//for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
 // for (let columnIndex = 0; columnIndex < n; columnIndex += 1) {
   // if (columnIndex < inputPosition) {
   //   inputLine = inputLine + ' ';
    //} else {
     // inputLine = inputLine + symbol;
   // }
  //}
  //console.log(inputLine);
  //inputLine = '';
  //inputPosition -= 1;
//};


// bonus 4  - piramide de asteriscos com n base

//let n = 5;
//let symbol = '*';
//let inputLine = '';

//let midOfMatrix = (n + 1) / 2;
//let controlLeft = midOfMatrix;
//let controlRight = midOfMatrix;

//for (let lineIndex = 0; lineIndex <= midOfMatrix; lineIndex += 1) {
  //for (let columnIndex = 0; columnIndex <= n; columnIndex += 1) {
   // if (columnIndex > controlLeft && columnIndex < controlRight) {
     // inputLine = inputLine + symbol;
    //} else {
     // inputLine = inputLine + ' ';
   // }
  //}
  //console.log(inputLine);
  //inputLine = '';
  //controlRight += 1;
  //controlLeft -= 1
//};

//exercicio 5 - pirâmide com n asteriscos de base que seja vazia no meio. 
//Assuma que o valor de n será sempre ímpar:

let n = 7;
let middle = (n + 1) / 2;
let controlLeft = middle;
let controlRight = middle;
let symbol = '*';
for (let line = 1; line <= middle; line += 1) {
  let outputLine = '';
  for (let col = 1; col <= n; col += 1) {
    if (col == controlLeft || col == controlRight || line == middle) {
      outputLine += symbol;
    } else {
      outputLine += ' ';
    }
  }
  controlLeft -= 1;
  controlRight += 1;
  console.log(outputLine);
}


