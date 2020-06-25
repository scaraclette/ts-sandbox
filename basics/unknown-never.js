"use strict";
var userInput;
var userName;
userInput = 5;
userInput = 'Max';
// to assign an unknown value. unknown > any because at least unknown needs checking 
if (typeof userInput === 'string') {
    userName = userInput;
}
// NEVER TYPE -> always crashes the script
function generateError(message, code) {
    throw { message: message, errorCode: code };
    // while (true) {} -> infinite functions
}
var error = generateError('An error occured!', 500);
