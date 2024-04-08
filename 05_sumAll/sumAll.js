const sumAll = function(start, end) {

    if (start < 0 || end < 0) {
        return 'ERROR'
    }

    if (typeof start != "number" || typeof end != "number") {
    return 'ERROR'
}


let finalSum = 0;
if (start>end) {
    for (let index = end; index < start+1; index++) {
        finalSum += index;
        
    }
}
else {
    for (let index = start; index < end+1; index++) {
        finalSum += index;
        
    }
}


return finalSum

};

// Do not edit below this line
module.exports = sumAll;
