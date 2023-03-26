"use strict";
exports.__esModule = true;
// Assignment # 2 : Build a CLI calculator in type script
var promptSync = require("prompt-sync");
var prompt = promptSync();
var n1 = prompt("Enter your first number : ");
var n2 = prompt("Enter your second number : ");
console.log("Which Operation do you want to Perform.....");
var cOpr = prompt("Type the Operator :   +   -   /  *   : ");
n1 = n1;
n2 = n2;
if (cOpr == '+') {
    console.log(" The addition of ".concat(n1, " and ").concat(n2, " = ").concat(n1 + n2));
}
else if (cOpr == '-') {
    console.log(" The subtration of ".concat(n1, " and ").concat(n2, " = ").concat(n1 - n2));
}
else if (cOpr == '/') {
    console.log(" The division of ".concat(n1, " and ").concat(n2, " = ").concat(n1 / n2));
}
else if (cOpr == '*') {
    console.log(" The multiplication of ".concat(n1, " and ").concat(n2, " = ").concat(n1 * n2));
}
else
    console.log(" YOu have selected correct operator ... ");
