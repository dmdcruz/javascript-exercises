


const palindromes = function (string) {
    let cleanedString = string.replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g, '');
    cleanedString = cleanedString.replace(/ /g,'')

    cleanedString = cleanedString
        .toLowerCase()
        .split('')
        .join('');

    const reversedString = cleanedString.split('').reverse().join('');

    console.log(cleanedString)
    console.log(reversedString)
    console.log(reversedString === cleanedString)

    return reversedString === cleanedString;
};

    palindromes('A car, a man, a maraca.');


    
// Do not edit below this line
module.exports = palindromes;
