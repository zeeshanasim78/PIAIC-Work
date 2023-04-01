#!/usr/bin/env node
// https://github.com/panaverse/typescript-node-projects
import inquirer from "inquirer";
import chalk from "chalk";
const prompt = await inquirer.prompt([
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
        choices: ["+", "-", "*", "/"],
        message: "Select Operation to perform : ",
        name: "opr",
    }
]);
const number1 = prompt.n1;
const number2 = prompt.n2;
const operator = prompt.opr;
let result;
if (operator == "+") {
    result = number1 + number2;
}
else if (operator == "-") {
    result = number1 - number2;
}
else if (operator == "*") {
    result = number1 * number2;
}
else {
    result = number1 / number2;
}
console.log(chalk.red(result));
console.log(`Numbers ${number1} ${operator} ${number2} is : ${result}`);
