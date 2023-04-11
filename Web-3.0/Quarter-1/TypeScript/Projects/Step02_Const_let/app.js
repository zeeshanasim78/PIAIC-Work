"use strict";
// Variables Declarations
// let and const are two relatively new concepts for variable declarations in JavaScript.
// let is similar to var in some respects, but allows users to avoid some of the common “gotchas” that users run into in JavaScript.
// const is an augmentation of let in that it prevents re-assignment to a variable.
//use const where variable values do not change
const a = 5;
const d = 33;
const c = "best";
//I suggest use let instead of var everywhere, 
//becuase let has blocked scope
if (true) {
    let z = 4;
    //use z
}
else {
    let z = "string";
    //use z
}
// console.log("let: " + z);
// The statement below will generate error as z is not defined in this scope
function f() {
    var a = 10;
    return function g() {
        var b = a + 1;
        return b;
    };
}
var g = f();
console.log(g()); // returns '11'
function f2(input) {
    let a = 100;
    if (input) {
        // Still okay to reference 'a'
        let bb = a + 1;
        return bb;
    }
    // Error: 'b' doesn't exist here
    //return bb;
}
console.log("f2(true):", f2(true));
console.log("f2(false):", f2(false));
