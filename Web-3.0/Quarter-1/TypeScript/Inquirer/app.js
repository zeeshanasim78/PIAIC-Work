"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
var chalk_1 = require("chalk");
var functions_js_1 = require("./functions.js");
var flag = 1;
var prompt = await inquirer_1.default.prompt([
    {
        type: "number",
        message: "Enter First Number : ",
        name: "n1",
    },
    {
        type: "number",
        message: "Enter Second Number : ",
        name: "n2",
    },
    {
        type: "list",
        choices: ["+", "-", "*", "/", "^"],
        message: "Select Operation to perform : ",
        name: "opr",
    }
]);
var number1 = (prompt.n1); //const number1=chalk.red(prompt.n1);
var number2 = (prompt.n2); //const number2=chalk.red(prompt.n2);
var operator = (prompt.opr); //const operator=chalk.bgBlue(prompt.opr);
var result = 0;
//console.log("[",operator,"]",operator.length);
if (operator == "+") {
    result = (0, functions_js_1.add2Numbers)(number1, number2);
}
else if (operator == "-") {
    result = (0, functions_js_1.subtract2Numbers)(number1, number2);
}
else if (operator == "*") {
    result = (0, functions_js_1.multiply2Numbers)(number1, number2);
}
else if (operator == "/") {
    result = (0, functions_js_1.divide2Numbers)(number1, number2);
}
else if (operator == "^") {
    result = (0, functions_js_1.exponentOfNumber)(number1, number2);
}
else {
    flag = 0;
}
if (flag == 1) {
    console.log("Numbers ".concat(chalk_1.default.red(number1), " ").concat(chalk_1.default.blue(operator), " ").concat(chalk_1.default.red(number2), " is : ").concat(chalk_1.default.green(result)));
}
else {
    console.log(chalk_1.default.red("Invalid Operator..."));
}
