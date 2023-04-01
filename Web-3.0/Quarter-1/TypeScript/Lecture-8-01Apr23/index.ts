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

import addTwoNumbers from "./add.js";
import inquirer from "inquirer";
import chalk from "chalk";

const prompt=await inquirer.prompt([
    {
        type:"number",
        message:"Enter First Number : ",
        name:"n1",
    },
    {
        type:"number",
        message:"Enter Second Number : ",
        name:"n2",
    },
    {
        type:"list",
        choices:["+","-","*","/"],
        message:"Select Operation to perform : ",
        name:"opr",
    }
])

const number1=prompt.n1;
const number2=prompt.n2;
const operator=prompt.opr;
let result:any;


if (operator=="+"){
    result=number1+number2;
}
else if(operator=="-"){
    result=number1-number2;
}
else if(operator=="*"){
    result=number1*number2;
}
else{
    result=number1/number2;
}

console.log(chalk.red(result));
console.log(`Numbers ${number1} ${operator} ${number2} is : ${result}`);

