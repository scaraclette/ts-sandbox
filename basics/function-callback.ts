function add(n1: number, n2: number) {
    return n1 + n2;
}

// void function
function printResult(num: number) {
    console.log('Result: ' + num);
}

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
    const result = n1 + n2;
    cb(result);
}

// pointer to function
let combineValues: Function;
combineValues = add; // pointer to function

// Function types
// accepts any function where each parameter is a number and returns a number
let combineValues1: (a: number, b: number) => number;
combineValues1 = add;

console.log(combineValues(8,8))
addAndHandle(10, 20, (result) => {
    console.log(result);
});

