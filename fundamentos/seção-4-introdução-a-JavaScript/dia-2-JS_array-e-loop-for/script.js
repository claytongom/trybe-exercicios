let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// exercicio 1 - percorrendo index com console.log

//for(let index = 0; index < numbers.length; index += 1) {
  //console.log(numbers[index]);
//}

// exercicio 2 - Soma todos os valores contidos no array

//let resultado = 0;
//for(let index = 0; index < numbers.length; index += 1) {
  //  resultado += numbers[index];
//}
//console.log(resultado);

// exercicio 3 - Media do index

//let soma = 0;

//for (let index = 0; index < numbers.length; index += 1) {
  //soma += numbers[index];
//}

//let media = soma / numbers.length;

//console.log(media);

// exercicio 4 - imprima a mensagem: “valor maior que 20” e  “valor menor ou igual a 20”

//if(media > 20) {
    //console.log("valor maior que 20")
//} else {
    //console.log("valor menor ou igual a 20")
//}

// exercicio 5 -  maior valor contido no array e imprima-o


//let maiorNumero = numbers[0];

//for (let index = 1; index < numbers.length; index += 1) {
 // if (numbers[index] > maiorNumero) {
   // maiorNumero = numbers[index];
  //}
//}

//console.log(maiorNumero);

// exercicio 6 - valores ímpares existem no array e imprima o resultado

//let resultado = 0;

//for (let index = 0; index < numbers.length; index += 1) {
    //if (numbers[index] % 2 !== 0) {
        //resultado += 1;
      //}
//}
    
//if (resultado === 0) {
   //console.log('nenhum valor ímpar encontrado');
//} else {
   //console.log(resultado);
   
//}

// exercicio 7 - menor valor contido no array e imprima-o


//let menorNumero = numbers[0];

//for (let index = 1; index < numbers.length; index += 1) {
 // if (numbers[index] < menorNumero) {
   // menorNumero = numbers[index];
   
  //}
  
//}
//console.log("O menor numero é:" + menorNumero);

// exercicio 8 - crie um array que vá de 1 até 25 e imprima

let numeros = [];

//for (let index = 1; index <= 25; index += 1) {
    //numeros.push(index / 2);
  //}
  
  //console.log(numeros);

// exercicio 9 - resultados index / 2

  for (let index = 1; index <= 25; index += 1) {
    numeros.push(index / 2);
  }
  
  console.log(numeros);
















