const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
  ];
  
  function flatten(arrays) {
    // escreva seu código aqui
    // Utilize o reduce para transformar uma matriz em um array.
    return arrays.reduce((acc, curr) => acc.concat(curr), []);
  }
  console.log(flatten(arrays));