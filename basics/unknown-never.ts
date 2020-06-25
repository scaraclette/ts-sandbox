let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Max';
// to assign an unknown value. unknown > any because at least unknown needs checking 
if (typeof userInput === 'string') {
    userName = userInput;
}

// NEVER TYPE -> always crashes the script
function generateError(message: string, code: number): never {
    throw {message: message, errorCode: code};
    // while (true) {} -> infinite functions
}

const error = generateError('An error occured!', 500);