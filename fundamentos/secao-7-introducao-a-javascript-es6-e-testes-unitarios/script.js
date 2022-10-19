// const testingScope = (escopo) => { // Alterando estrutura para utilizar arrow function
//     if (escopo === true) {
//         let ifScope = 'Não devo ser utilizada fora do meu escopo (if)'; // Alterando o tipo da variável para const
//         ifScope = `${ifScope} ótimo, fui utilizada no escopo!`; // Substituição das concatenações de strings para template literals
//         console.log(ifScope);
//     } else {
//         const elseScope = 'Não devo ser utilizada fora do meu escopo (else)'; // Alterando o tipo da variável para const
//         console.log(elseScope);
//     }
// };

// testingScope(true);

// exercicio 2

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const sortOddsAndEvens = () => {
    oddsAndEvens[0] = 2
    oddsAndEvens[1] = 3
    oddsAndEvens[2] = 4
    oddsAndEvens[3] = 7
    oddsAndEvens[4] = 10
    oddsAndEvens[5] = 13

    return oddsAndEvens
}
const sortedArray = sortOddsAndEvens()


console.log(`Os números ${sortedArray} se encontram ordenados de forma crescente!`);
