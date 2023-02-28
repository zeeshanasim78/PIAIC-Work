// This method is for the one line comment
// In this file topics discussed in the lecture 1 of the Typescipt are being implemented
/*
This method of comment is used for multi line 
*/

/* Variable Declaration
var and let are both used for variable declaration in TypeScript but the difference between them is that 
var is function scoped and let is block scoped. Means variable declared using var can be accessed any where 
in the function whereas the variable declared using let is only accessible within that block. 
Variable declared by let cannot be redeclared and must be declared before use whereas variables declared
with var keyword are hoisted.   
const is an augmentation(rise) of let in that it prevents re-assignment to a variable.
Note: Dont use var, use let and const
*/

let firstName:string = "Zeeshan";
let age:number = 45;
let married:boolean=true;
let scholar;
let publications=null;

/*  Difference between null and undefined
Note : A variable is undefined when it's not assigned any value after being declared. Null refers to a value
 that is either empty or doesn't exist. null means no value. To make a variable  null we must assign null
 value to it as by default in typescript unassigned values are termed undefined.
*/

console.log(firstName + " Welcome to TypeScript");
console.log("Your age is " + age);
console.log("Marital Status : " + married);
console.log("Scholar : " + scholar);
console.log("publications : " + publications)


/*Template Lietrals
Template literals are literals delimited with backtick (`) characters, allowing for multi-line strings, 
string interpolation (to create strings by doing substitution of placeholders) with embedded expressions,
and special constructs called tagged templates.
*/

//For Example: Two write multi line string we can use Template literal as
console.log("\nExample of Template Literals")
console.log(`string text line 1
string text line 2`);

/*String interpolation
With template literals, you can avoid the concatenation operator
 — and improve the readability of your code
 — by using placeholders of the form ${expression} to perform substitutions for embedded expressions:
 */
 console.log("\nExample of String interpolation using Template Literals")
const a = 5;
const b = 10;
console.log(`Fifteen is ${a + b} and
not ${2 * a + b}.`);

//Analyzing and Modifying Data Types : You can check the type of a variable by entering typeof.
let testVariable = 1; 
console.log("\nDatatype of variable testVariable is : ")
console.log(typeof testVariable);

//The variables in TypeScript cannot change types. Example: 
let aVar = 2; 
console.log("Variable aVar is defined using let as number based on its value. Its datatype cannot be changed")
console.log(`The value of aVar is : ${aVar}`)
//aVar = "2"; //Generates Error

// Operators
// Arithmatic Operators :   + - / *  ** %
let n1 = 11;
let n2 = 2;
console.log(`\nSum of two variable n1=${n1} and n2=${n2} is = ${n1 + n2}`);
let str1 = "11";
let str2 = "2";
console.log(`\nIn case of String + with two string variable str1=${str1} and str2=${str2} is = ${str1 + str2}`); 
console.log(`\nSubtraction of two variable n1=${n1} and n2=${n2} is = ${n1 - n2}`);
console.log(`\nMultiplication of two variable n1=${n1} and n2=${n2} is = ${n1 * n2}`);
console.log(`\nDivision of two variable n1=${n1} and n2=${n2} is = ${n1 / n2}`);
console.log(`\nExponent of two variable n1=${n1} and n2=${n2} is = ${n1 ** n2}`);
console.log(`\nModulus/Remainder of two variable n1=${n1} and n2=${n2} is = ${n1 % n2}`);

// Assignment Operators :   = += -= *= /=
console.log(`\n We can assign value to a varaible using = Operator as n1=12`);
console.log(` Using Addition Assignment operation we can do n1 = n1 + 20  as n1+=20 : so if n1=${n1} then n1+=20 will be equal to ${n1+=20} `)
console.log(` Using Subtraction Assignment operation we can do n1 = n1 - 20  as n1-=20 : so if n1=${n1} then n1-=20 will be equal to ${n1-=20} `)
console.log(` Using Multiplication Assignment operation we can do n1 = n1 * 20  as n1*=20 : so if n1=${n1} then n1*=20 will be equal to ${n1*=20} `)
console.log(` Using Division Assignment operation we can do n1 = n1 / 20  as n1/=20 : so if n1=${n1} then n1/=20 will be equal to ${n1/=20} `)

// Comparison Operators : == != > >= < <= ===
let n = 5;
console.log('\n Comparison Operators ')
console.log(`if value of n is ${n} then n==5 will return ${n==5}`); 
console.log(`if value of n is ${n} then n===5 will return ${n===5}`); 
console.log(`if value of n is ${n} then n!=5 will return ${n!=5}`); 
console.log(`if value of n is ${n} then n > 8 will return ${n>8}`); 
console.log(`if value of n is ${n} then n >= 8 will return ${n>=8}`);
console.log(`if value of n is ${n} then n < 8 will return ${n<8}`); 
console.log(`if value of n is ${n} then n <= 8 will return ${n<=8}`); 

// Logical Operators : && || ! 
n = 5;
console.log(`if value of n is ${n} then (n >= 5 && n < 10) will return ${n >= 5 && n < 10}`); 
console.log(`if value of n is ${n} then (n > 5 && n < 10) will return ${n > 5 && n < 10}`);
console.log(`if value of n is ${n} then (n >= 5 || n < 10) will return ${n >= 5 || n < 10}`); 
console.log(`if value of n is ${n} then (n > 5 || n < 10) will return ${n > 5 || n < 10}`); 
console.log(`if value of n is ${n} then (!(n < 10)) will return ${!(n < 10)}`);
console.log(`if value of n is ${n} then (!(n > 10)) will return ${!(n > 10)}`); 
