//To print a message
console.log(" Welcome Every one");

// To declare a variable we use let / var command
// it is recommended to use let 
let age;  /// Type Infer : Means Type is guessed by TypeScript
let myAge:number; // Type Annotation : Means type is specifically defined
console.log(age);

let myName:string;

// Tempalte Literal
myName="Zeeshan Asim";
age=45;
// Old method of contcatenating string
console.log("My name is " + myName + " and my age is " + age);
// New method of using Template Literal
console.log(` My name is ${myName} and my age is ${age}`)



// typeof Function : to get the variable datatype
console.log(typeof(age));
console.log(typeof myName);
console.log(`Type of variable myName is = ${typeof(myName)}`);


// Compound Type Variable 
// In typescript if we define a variable type using Type Annotation then we cannot change it value type
// For example we have defined a variable myAge as number so we cannot assign a string value to it
// myAge="My Age";  // Generate Error : Type String is not assignable to Type number

// In Typescript we can declare compund type variable that can have multiple types as:
let myVar:string | null |number; // Now this variable can have string / null or number type
myVar="TypeScript";
console.log(typeof myVar);
myVar=null;
console.log(typeof myVar);
myVar=99;
console.log(typeof myVar);



// Mathematical Operator
let var1:number=10;
let var2:number=3;
console.log(`Addition of ${var1} and ${var2} = ${var1+var2}`);
console.log(`Subtraction of ${var1} and ${var2} = ${var1-var2}`);
console.log(`Multiplication of ${var1} and ${var2} = ${var1*var2}`);
console.log(`Division of ${var1} and ${var2} = ${var1/var2}`);
console.log(`Remainder of ${var1} and ${var2} = ${var1%var2}`);
console.log(`Exponent of ${var1} and ${var2} = ${var1**var2}`);


// Comparison Operator
console.log(`Greater then Comparison of ${var1} and ${var2} = ${var1>var2}`);
console.log(`Greater then Equal To Comparison of ${var1} and ${var2} = ${var1>=var2}`);
console.log(`Less then Comparison of ${var1} and ${var2} = ${var1<var2}`);
console.log(`Less then Comparison of ${var1} and ${var2} = ${var1<=var2}`);
console.log(`Equality  Comparison of ${var1} and ${var2} = ${var1==var2}`);
console.log(`Not Equal to Comparison of ${var1} and ${var2} = ${var1!=var2}`);
console.log(`=== Equality Comparison of ${var1} and ${var2} = ${var1===var2}`);

// Logical Operator
console.log(`Logical Or Operator ${var1} and ${var2} = ${var1 || var2}`);
console.log(` Logical And Operator ${var1} and ${var2} = ${var1 && var2}`);






