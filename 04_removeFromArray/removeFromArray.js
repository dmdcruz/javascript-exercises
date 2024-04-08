const removeFromArray = function(targetArray, ...args) {
    
    const newArray = [];

    targetArray.forEach((item)=> {
        if (!args.includes(item)) {
            newArray.push(item);
        }
    });
    return newArray
};

// Do not edit below this line
module.exports = removeFromArray;
