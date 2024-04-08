const reverseString = function(word) {
    let reversedWord ='';
    
    var chars=word.split('', word.lenght);
    reversedWord=chars.reverse().join('');

    return reversedWord;
   
};

reverseString('hello');

// Do not edit below this line
module.exports = reverseString;
