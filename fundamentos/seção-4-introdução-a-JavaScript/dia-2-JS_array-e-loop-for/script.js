let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// exercicio 1 - percorrendo index com console.log

//for(let index = 0; index < numbers.length; index += 1) {
  //console.log(numbers[index]);
//}

// exercicio 2 - Soma todos os valores contidos no array

let resultado = 0;
for(let index = 0; index < numbers.length; index += 1) {
    resultado += numbers[index];
}
console.log(resultado);
