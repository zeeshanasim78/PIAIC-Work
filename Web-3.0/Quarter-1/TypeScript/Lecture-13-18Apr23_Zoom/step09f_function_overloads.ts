//overloads give us type-checked calls

//its customary to order overloads from most specific to least specific

// Define all the type of the function signatures. No need to define the defination
function add(arg1: string, arg2: string): string;//option 1
function add(arg1: number, arg2: number): number;//option 2
function add(arg1: boolean, arg2: boolean): boolean;//option 3

//this is not part of the overload list, 
//so it has only three overloads
// This is the function defination
function add(arg1: any, arg2: any): any {
    return arg1 + arg2;
}
// Note:  We have defined any in the function defination. But only those functions will be valid
// That has same signatures as mentioned as start
// If there is any function overload that does not have the arguments types as mentioned at start then it will generate an error
// For Example  add(2,"Test"); will generate error as there is no signature defined with one argument number and second is string

//Calling 'add' with any other parameter types would cause an error except for the three options
console.log(add(1, 2));
console.log(add("Hello", "World"));
console.log(add(true, false));



