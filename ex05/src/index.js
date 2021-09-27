function myObject() {
    'use strict';
    const MATH_CONSONANTS = { 
        E: 2.71828
    };

    // Only change code below this line
    Object.freeze(MATH_CONSONANTS);
    // Only change code above this line
    try {
        MATH_CONSONANTS.E = 23;
    } catch(error) {
        console.log(error.message);
    }
    return MATH_CONSONANTS.E;
}
const E = myObject();

module.exports = myObject;
