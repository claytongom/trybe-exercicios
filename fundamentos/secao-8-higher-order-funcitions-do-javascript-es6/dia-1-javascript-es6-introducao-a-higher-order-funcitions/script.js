// // exericio 1
// const newEmployees = () => {
//     const employees = {
//       id1: employeeGenerator('Pedro Gerra'),
//       // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
//       id2: employeeGenerator('Luiza Drummond'),
//       // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
//       id3: employeeGenerator('Carla Paiva'),
//       // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
//     }
//     return employees;
//   };

//   const employeeGenerator = (fullName) => {
//     const email = fullName.toLowerCase().split(' ').join('_');
//     return {fullName, email: `${email}@betrybe.com`};
//   }
//   console.log(newEmployees(employeeGenerator));

// const numberChecker = (myNumber, number) => myNumber === number;
// const lotteryResult = (myNumber, callback) => {
//   const number = Math.floor((Math.random() * 5) + 1);
//     return callback(myNumber, number)? 'Lucky day, you won!' : 'Try Again!';
// };

// console.log(lotteryResult(2, numberChecker));

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const compareAnswers = (rightAnswer, studentAnswer) => {
  if (rightAnswer === studentAnswer) {
    return 1;
  } if (studentAnswer === 'N.A') {
    return 0;
  }
  return -0.5;
};

const countPoints = (rightAnswers, studentAnswers, action) => {
  let counter = 0;
  for (let index = 0; index < rightAnswers.length; index += 1) {
    const actionReturn = action(rightAnswers[index], studentAnswers[index]);
    counter += actionReturn;
  }
  return `Resultado final: ${counter} pontos`;
};
console.log(countPoints(RIGHT_ANSWERS, STUDENT_ANSWERS, compareAnswers));





