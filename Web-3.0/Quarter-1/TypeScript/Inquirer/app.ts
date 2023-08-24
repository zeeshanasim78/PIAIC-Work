import inquirer from "inquirer";
import chalk from "chalk";
import { add2Numbers, divide2Numbers, exponentOfNumber, multiply2Numbers, subtract2Numbers } from "./functions.js";
let flag:number=1;

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
        choices:["+","-","*","/","^"],
        message:"Select Operation to perform : ",
        name:"opr",
    }
])

const number1=(prompt.n1); //const number1=chalk.red(prompt.n1);
const number2=(prompt.n2); //const number2=chalk.red(prompt.n2);
const operator=(prompt.opr);//const operator=chalk.bgBlue(prompt.opr);
let result:number=0;

//console.log("[",operator,"]",operator.length);


if (operator=="+"){
    result=add2Numbers(number1,number2);
}
else if(operator=="-"){
    result=subtract2Numbers(number1,number2);
}
else if(operator=="*"){
    result=multiply2Numbers(number1,number2);
}
else if(operator=="/"){
    result=divide2Numbers(number1,number2);
}
else if(operator=="^"){
    result=exponentOfNumber(number1,number2);
}
else{
    flag=0;
}


if (flag==1){
    console.log(`Numbers ${chalk.red(number1)} ${chalk.blue(operator)} ${chalk.red(number2)} is : ${chalk.green(result)}`);
}
else{
    console.log(chalk.red("Invalid Operator..."))
}


