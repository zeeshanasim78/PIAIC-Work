//To print a message
console.log(" Welcome Every one");
// To declare a variable we use let / var command
// it is recommended to use let 
var age; /// Type Infer : Means Type is guessed by TypeScript
var myAge; // Type Annotation : Means type is specifically defined
console.log(age);
var myName;
// Tempalte Literal
myName = "Zeeshan Asim";
age = 45;
// Old method of contcatenating string
console.log("My name is " + myName + " and my age is " + age);
// New method of using Template Literal
console.log(" My name is ".concat(myName, " and my age is ").concat(age));
// typeof Function : to get the variable datatype
console.log(typeof (age));
console.log(typeof myName);
console.log("Type of variable myName is = ".concat(typeof (myName)));
// Compound Type Variable 
// In typescript if we define a variable type using Type Annotation then we cannot change it value type
// For example we have defined a variable myAge as number so we cannot assign a string value to it
// myAge="My Age";  // Generate Error : Type String is not assignable to Type number
// In Typescript we can declare compund type variable that can have multiple types as:
var myVar; // Now this variable can have string / null or number type
myVar = "TypeScript";
console.log(typeof myVar);
myVar = null;
console.log(typeof myVar);
myVar = 99;
console.log(typeof myVar);
// Mathematical Operator
var var1 = 10;
var var2 = 3;
console.log("Addition of ".concat(var1, " and ").concat(var2, " = ").concat(var1 + var2));
console.log("Subtraction of ".concat(var1, " and ").concat(var2, " = ").concat(var1 - var2));
console.log("Multiplication of ".concat(var1, " and ").concat(var2, " = ").concat(var1 * var2));
console.log("Division of ".concat(var1, " and ").concat(var2, " = ").concat(var1 / var2));
console.log("Remainder of ".concat(var1, " and ").concat(var2, " = ").concat(var1 % var2));
console.log("Exponent of ".concat(var1, " and ").concat(var2, " = ").concat(Math.pow(var1, var2)));
// Comparison Operator
console.log("Greater then Comparison of ".concat(var1, " and ").concat(var2, " = ").concat(var1 > var2));
console.log("Greater then Equal To Comparison of ".concat(var1, " and ").concat(var2, " = ").concat(var1 >= var2));
console.log("Less then Comparison of ".concat(var1, " and ").concat(var2, " = ").concat(var1 < var2));
console.log("Less then Comparison of ".concat(var1, " and ").concat(var2, " = ").concat(var1 <= var2));
console.log("Equality  Comparison of ".concat(var1, " and ").concat(var2, " = ").concat(var1 == var2));
console.log("Not Equal to Comparison of ".concat(var1, " and ").concat(var2, " = ").concat(var1 != var2));
console.log("=== Equality Comparison of ".concat(var1, " and ").concat(var2, " = ").concat(var1 === var2));
// Logical Operator
console.log("Logical Or Operator ".concat(var1, " and ").concat(var2, " = ").concat(var1 || var2));
console.log(" Logical And Operator ".concat(var1, " and ").concat(var2, " = ").concat(var1 && var2));
