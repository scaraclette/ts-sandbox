"use strict";
function add(n1, n2) {
    return n1 + n2;
}
// void function
// function printResult(num: number) {
//     console.log('Result: ' + num);
// }
function addAndHandle(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
// pointer to function
var combineValues;
combineValues = add; // pointer to function
// Function types
// accepts any function where each parameter is a number and returns a number
var combineValues1;
combineValues1 = add;
console.log(combineValues(8, 8));
addAndHandle(10, 20, function (result) {
    console.log(result);
});
