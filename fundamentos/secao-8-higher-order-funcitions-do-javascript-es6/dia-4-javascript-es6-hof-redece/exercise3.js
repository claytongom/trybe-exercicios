const names = [
    'Aanemarie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha',
];

const expectedResult = 20;

function containsA() {
    // escreva seu código aqui
    let totalOfLettersA = 0;
    names.forEach((name) => {
        const lettersFromName = name.split('');
        totalOfLettersA += lettersFromName.reduce((lettersAInName, currentLetter) => { }, 0);
    });
}