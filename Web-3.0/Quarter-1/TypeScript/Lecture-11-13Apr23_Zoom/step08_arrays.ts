// Lecture 11 : 13Apr23 -- Sir Zia Online Session

let array1 : number[] = [5, 6, 7];//correct syntax
console.log(array1[1]);//correct syntax

let array2:Array<number> = [1, 2, 3];//alternative correct syntax
let array3 : number[] = [];//correct syntax to define an empty array

//let array4: number[] = new number[2];//error
// Not a Type Script syntax

let array5: number[] = [];
array5.push(1234);//dynamically adding

// Difference between JS and TS Arrays
// JS arrays are dynamic and can be resized. It can contain different types of variables in a array
// JS handles array as object thats why different types of a values can be added 
// But in performace of variable and Object there is much difference\

// In C the array is a continous memory location and operations are very fast

// Union Types

let array6: (number | string)[]=[5,6,7,"Hamza"];
// We are storing two types of data in an array





