// exercicios calculos aritmeticos

const a = 15
const b = 5

console.log("Soma:" + (a + b));
console.log("Subtração:" + (a-b));
console.log("Multiplicação:" + (a * b));
console.log("Divisão:" + (a / b));
console.log("Módulo:" + (a % b));

// exercicios if and else

const value1 = 7
const value2 = 10

if (value1 > value2){
    console.log(" value1 é maior que value2");
} else {
    console.log(" value2 é maior que value1");
}

const value1 = 7
const value2 = 10
const value3 = 3

if (value1 > value2 && value1 > value3) {
    console.log('O maior número é: ' + value1 + ' (value1)');
  } else if (value2 > value1 && value2 > value3) {
    console.log('O maior número é: ' + value2 + ' (value2)');
  } else {
    console.log('O maior número é: ' + value3 + ' (value3)');
  };

  
const value = 5

if (value > 0) {
    console.log ('positivo');
}
else if (value < 0) {
    console.log('negativo')
}
else {
    console.log('zero')
}


const angloA= -40;
const angloB = 90;
const angloC = 25;

let somaDosAngulos = angloA + angloB + angloC;

let anglosPositivos = angloA > 0 && angloB > 0 && angloC > 0;

if(anglosPositivos){
  if (somaDosAngulos === 180) {
    console.log(true);
  } else {
    console.log(false);
  };
} else {
  console.log('Erro: ângulo inválido');
}


// exercicio switch / case

const peçaXadrez = 'cavalo';

switch (peçaXadrez.toLowerCase()) {
  case 'rei':
    console.log('Rei-> Uma casa apenas para qualquer direção.');
    break;
  case 'bispo':
    console.log('Bispo-> Diagonal.');
    break;
  case 'rainha':
    console.log('Rainha-> Diagonal, horizontal e vertical.');
    break;
  case 'cavalo':
    console.log('Cavalo -> "L" pode pular sobre as peças.');
    break;
  case 'torre':
    console.log('Torre -> Horizontal e vertical.');
    break;
  case 'peão':
    console.log("Peão -> Apenas uma casa para frente, no primeiro movimento podem ser duas casas.");
    break;
  default:
    console.log('Erro, peça inválida!');
    break;
};

// exercicio if and else nota escolar

const grade = 90

if(grade < 0 || grade > 100) {
    console.log("Nota incorreta");
} else if (grade >=90) {
    console.log("A");
} else if (grade >=80) {
    console.log("B");
} else if (grade >= 70) {
    console.log("C");
} else if (grade >= 60) {
    console.log("D");
} else if (grade >= 50) {
    console.log("E");
} else {
   console.log("F");
}



}

}

















