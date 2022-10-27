// exericio 1
const newEmployees = () => {
    const employees = {
      id1: employeeGenerator('Pedro Gerra'),
      // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
      id2: employeeGenerator('Luiza Drummond'),
      // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
      id3: employeeGenerator('Carla Paiva'),
      // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    return employees;
  };

  const employeeGenerator = (fullName) => {
    const email = fullName.toLowerCase();
    return email;
  }
  console.log(newEmployees(employeeGenerator));  



  