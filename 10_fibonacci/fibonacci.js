const fibonacci = function(index) {
    
    index=parseInt(index);

    let finalNumber = 0;
    let firstPrevious = 0;
    let secondPrevious = 0;

    if (index < 0) {return 'OOPS'}
    if (index == 0) {
        finalNumber=0
        return finalNumber;
    }
    

    for (let i = 1; i <= index; i++) {
       if (i == 1) {
            finalNumber = i;
            secondPrevious = i;
       }
       if (i >= 2) {
            finalNumber = firstPrevious + secondPrevious;
            firstPrevious = secondPrevious;
            secondPrevious = finalNumber;
       }
    }
    console.log(finalNumber);
    return finalNumber;
};


// Do not edit below this line
module.exports = fibonacci;
