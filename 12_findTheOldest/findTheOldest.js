const findTheOldest = function(array) {
   return array.reduce((previous, current) => {
        const previousPersonAge = getAge(previous.yearOfBirth, previous.yearOfDeath);
        const currentPersonAge = getAge(
            current.yearOfBirth, 
            current.yearOfDeath);

        return previousPersonAge < currentPersonAge ? current : previous
    });
};

const getAge =function (birth, death) {
    if (!death) {
        s;
    }
    return death - birth;
}
// Do not edit below this line
module.exports = findTheOldest;
