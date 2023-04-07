#!/usr/bin/env node
// https://github.com/panaverse/typescript-node-projects
// To make it a Node project we have to command : npm init -y
// To also make it a TS project we use command tsc --init
// To install inquirer we use command :   npm i inquirer
// To install types use command :  npm i --save-dev @types/inquirer
// To run project you need to make following changes to the tsconfig.json file
// "target": "ES2022",                                  /* Set the JavaScript language version for emitted JavaScript and include compatible library declarations. */
// "module": "NodeNext",                                /* Specify what module code is generated. */
// "moduleResolution": "nodenext",                      /* Specify how TypeScript looks up a file from a given module specifier. */
//import add2Numbers from "./functions.js";
import inquirer from "inquirer";
import chalk from "chalk";
import { add2Numbers, divide2Numbers, exponentOfNumber, multiply2Numbers, subtract2Numbers } from "./functions.js";
let flag = 1;
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
        choices: ["+", "-", "*", "/", "^"],
        message: "Select Operation to perform : ",
        name: "opr",
    }
]);
const number1 = (prompt.n1); //const number1=chalk.red(prompt.n1);
const number2 = (prompt.n2); //const number2=chalk.red(prompt.n2);
const operator = (prompt.opr); //const operator=chalk.bgBlue(prompt.opr);
let result = 0;
//console.log("[",operator,"]",operator.length);
if (operator == "+") {
    result = add2Numbers(number1, number2);
}
else if (operator == "-") {
    result = subtract2Numbers(number1, number2);
}
else if (operator == "*") {
    result = multiply2Numbers(number1, number2);
}
else if (operator == "/") {
    result = divide2Numbers(number1, number2);
}
else if (operator == "^") {
    result = exponentOfNumber(number1, number2);
}
else {
    flag = 0;
}
if (flag == 1) {
    console.log(`Numbers ${chalk.red(number1)} ${chalk.blue(operator)} ${chalk.red(number2)} is : ${chalk.green(result)}`);
}
else {
    console.log(chalk.red("Invalid Operator..."));
}
