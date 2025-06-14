"use strict";
// function
// Normal function
// Arrow function
// explicit parameter type
function add(num1, num2) {
    return num1 + num2;
}
const addition = add(5, 6);
console.log(addition);
// explicit parameter and return type | here return must be a number
function add2(num1, num2) {
    return num1 + num2;
}
const addArrow = (num1, num2) => num1 + num2;
//
const poorUser = {
    name: "Abdullah",
    balance: 1000,
    addBalance(num) {
        return this.balance + num;
    },
};
const arr = [1, 4, 10];
const newArr = arr.map((elem) => elem * elem);
