  const testingScope = (escopo) => { // Alterando estrutura para utilizar arrow function
    if (escopo === true) {
      var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
      ifScope = `${ifScope} ótimo, fui utilizada no escopo!`; // Substituição das concatenações de strings para template literals
      console.log(ifScope);
    } else {
      var elseScope = 'Não devo ser utilizada fora do meu escopo (else)';
      console.log(elseScope);
    }
    console.log(`${ifScope} o que estou fazendo aqui? :O`); // Substituição das concatenações de strings para template literals
  };

  testingScope(true);