"use strict";
// Everyday Types
// https://www.typescriptlang.org/docs/handbook/2/everyday-types.html
// The primitives: string, number, and boolean
// JavaScript has three very commonly used primitives: string, number, and boolean.
// Each has a corresponding type in TypeScript. 
//strongly typed syntax
let a = "Pakistan";
a = "USA";
let b = 9;
let c = true;
//type inference - Type not mentioned but infered in the basis of data
let e = "USA";
let f = 10.9;
f = 22;
let g = false;
g = true;
// Note: The type names String, Number, and Boolean (starting with capital letters) are
// legal, but refer to some special built-in types that will very rarely appear 
// in your code. Always use string, number, or boolean for types.
// Arrays : To specify the type of an array we use the syntax number[]; 
// this syntax works for any type (e.g. string[] is an array of strings,  and so on). 
let names = [];
names.push("Dylan"); // no error
// names.push(3); // Error: Argument of type 'number' is not assignable to parameter of type 'string'.
let numbers = [1, 2, 3]; // inferred to type number[]
numbers.push(4); // no error
//numbers.push("2"); // Error: Argument of type 'string' is not assignable to parameter of type 'number'.
let head = numbers[0]; // no error assigning a array value at index 0 to head variable
// any  : TypeScript also has a special type, any, that you can use whenever you
//  don’t want a particular value to cause typechecking errors. When a value is 
// of type any, you can access any properties of it (which will in turn be of 
//type any), call it like a function, assign it to (or from) a value of any type,
// or pretty much anything else that’s syntactically legal:
let obj = { x: 0 };
// None of the following lines of code will throw compiler errors.
// Using `any` disables all further type checking, and it is assumed 
// you know the environment better than TypeScript.
obj = "hello";
obj = 23;
obj = false;
const n = obj;
// Functions : Functions are the primary means of passing data around in JavaScript.
// TypeScript allows you to specify the types of both the input and output values of functions.
// Parameter type annotation
function greet(name) {
    console.log("Hello, " + name.toUpperCase() + "!!");
}
