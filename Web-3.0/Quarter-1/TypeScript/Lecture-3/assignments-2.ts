// Assignment # 2 : Build a CLI calculator in type script
import * as promptSync from 'prompt-sync';
const prompt=promptSync();


let n1=prompt("Enter your first number : ");
let n2=prompt("Enter your second number : ");
console.log("Which Operation do you want to Perform.....");
const cOpr=prompt("Type the Operator :   +   -   /  *   : ");
n1=n1 as number;
n2=n2 as number;
if (cOpr == '+')
{ console.log(` The addition of ${n1} and ${n2} = ${n1 + n2}`); }
else if(cOpr == '-')
{ console.log(` The subtration of ${n1} and ${n2} = ${n1-n2}`); }
else if(cOpr == '/')
{ console.log(` The division of ${n1} and ${n2} = ${n1/n2}`); }
else if(cOpr == '*')
{ console.log(` The multiplication of ${n1} and ${n2} = ${n1*n2}`); }
else
console.log(" YOu have selected correct operator ... ");