  const testingScope = (escopo) => { // Alterando estrutura para utilizar arrow function
    if (escopo === true) {
        let ifScope = 'Não devo ser utilizada fora do meu escopo (if)'; // Alterando o tipo da variável para const
      ifScope = `${ifScope} ótimo, fui utilizada no escopo!`; // Substituição das concatenações de strings para template literals
      console.log(ifScope);
    } else {
        const elseScope = 'Não devo ser utilizada fora do meu escopo (else)'; // Alterando o tipo da variável para const
      console.log(elseScope);
    }
    console.log(`${ifScope} o que estou fazendo aqui? :O`); // Substituição das concatenações de strings para template literals
  };

  testingScope(true);