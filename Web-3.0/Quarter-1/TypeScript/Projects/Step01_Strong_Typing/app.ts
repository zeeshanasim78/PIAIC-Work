// Everyday Types
// https://www.typescriptlang.org/docs/handbook/2/everyday-types.html

// The primitives: string, number, and boolean
// JavaScript has three very commonly used primitives: string, number, and boolean.
// Each has a corresponding type in TypeScript. 

//strongly typed syntax
let a : string = "Pakistan";
a = "USA";
let b : number = 9;
let c : boolean = true;

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
let names: string[] = [];
names.push("Dylan"); // no error
// names.push(3); // Error: Argument of type 'number' is not assignable to parameter of type 'string'.

let numbers = [1, 2, 3]; // inferred to type number[]
numbers.push(4); // no error
//numbers.push("2"); // Error: Argument of type 'string' is not assignable to parameter of type 'number'.
let head: number = numbers[0]; // no error assigning a array value at index 0 to head variable


// any  : TypeScript also has a special type, any, that you can use whenever you
//  don’t want a particular value to cause typechecking errors. When a value is 
// of type any, you can access any properties of it (which will in turn be of 
//type any), call it like a function, assign it to (or from) a value of any type,
// or pretty much anything else that’s syntactically legal:

let obj: any = { x: 0 };
// None of the following lines of code will throw compiler errors.
// Using `any` disables all further type checking, and it is assumed 
// you know the environment better than TypeScript.
obj = "hello";
obj=23;
obj=false;
const n: number = obj;

// Functions : Functions are the primary means of passing data around in JavaScript.
// TypeScript allows you to specify the types of both the input and output values of functions.
// Parameter type annotation
function greet(name: string) {
    console.log("Hello, " + name.toUpperCase() + "!!");
  }

greet("Zeeshan");

// Would be a runtime error if executed!
// greet(42);  // Because Argument of type 'number' is not assignable to parameter of type 'string'.

// Return Type
function getFavoriteNumber(): number {
  return 26;
}


// Annonumous Function
// Anonymous functions are a little bit different from function declarations. When a function appears in a place where 
// TypeScript can determine how it’s going to be called, the parameters of that function are automatically given types.

const user_names:Array<string>= ["Alice", "Bob", "Eve"];

// Contextual typing also applies to arrow functions
user_names.forEach((s) => {
  console.log(s.toUpperCase());
});

// Object Types
// Apart from primitives, the most common sort of type you’ll encounter is an object type. This refers to any JavaScript 
// value with properties, which is almost all of them! To define an object type, we simply list its properties and their types.\
// The parameter's type annotation is an object type

type Point = {
  x: number;
  y: number;
};

function printCoord(pt: Point) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}

// Note: Here, we annotated the parameter with a type with two properties - x and y - which are both of type number. 
// You can use , or ; to separate the properties, and the last separator is optional either way.

// We can pass values to Object as 
printCoord({ x: 3, y: 7 });


// Optional Property
// Object types can also specify that some or all of their properties are optional. To do this, add a ? after the property name:
function printName(obj2: { first: string; last?: string }) {
  // ...
}
// Both OK
printName({ first: "Bob" });
printName({ first: "Alice", last: "Alisson" });


// Note : In JavaScript, if you access a property that doesn’t exist, you’ll get the value undefined rather than a runtime 
// error. Because of this, when you read from an optional property, you’ll have to check for undefined before using it.

function printName2(obj: { first: string; last?: string }) {
  // Error - might crash if 'obj.last' wasn't provided!
  // Check if Object is possibly 'undefined'.
  if (obj.last !== undefined) {
    // OK
    console.log(obj.first.toUpperCase() , "," , obj.last.toUpperCase());
  }
 else{
  console.log(obj.first.toUpperCase());
 }
}

printName2({ first:"Zeeshan" });
printName2({ first:"Zeeshan" , last:"Asim Khan"});

//Union Types
//TypeScript’s type system allows you to build new types out of existing ones using a large variety of operators. Now that
// we know how to write a few types, it’s time to start combining them in interesting ways.

function printId(id: number | string) {
  if (typeof id === "string") {
    // In this branch, id is of type 'string'
    console.log(id.toUpperCase());
  } else {
    // Here, id is of type 'number'
    console.log(id);
  }
}


printId(101); // OK
printId("202"); // OK

// Error
//printId({ myID: 22342 });
//Argument of type '{ myID: number; }' is not assignable to parameter of type 'string | number'.


function welcomePeople(x: string[] | string) {
  if (Array.isArray(x)) {
    // Here: 'x' is 'string[]'
    console.log("Hello, " + x.join(" and "));
  } else {
    // Here: 'x' is 'string'
    console.log("Welcome lone traveler " + x);
  }
}

welcomePeople("Zeeshan");
welcomePeople(user_names);


// null and undefined
// JavaScript has two primitive values used to signal absent or uninitialized value: null and undefined. TypeScript has 
// two corresponding types by the same names. How these types behave depends on whether you have the strictNullChecks option on.
// If strictNullChecks is on in tsconfig.json file then when a value is null or undefined, you will need to test for those
// values before using methods or properties on that value.

function doSomething(x: string | null) {
  if (x === null) {
    // do nothing
  } else {
    console.log("Hello, " + x.toUpperCase());
  }
}