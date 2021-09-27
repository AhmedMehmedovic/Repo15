function checkVariableScope() {
    'use strict';

    // only change code below this line
     let i = 'function variable';

    // only change code above this line

    if (true) {

        // only change code below this line
        let i = 'block variable';

        // only change code above this line

        console.log('Scope i is: ', i);
    }
    console.log('Scope i is: ', i);
    return i;
}

checkVariableScope();

module.exports = checkVariableScope;