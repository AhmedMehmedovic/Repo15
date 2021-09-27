// Only change code below this line
const sum = (num1, num2 = 1) => {
    return num1 + num2;
};
// Only change code above this line

console.log(sum(4, 6));
console.log(sum(3));
module.exports = sum;