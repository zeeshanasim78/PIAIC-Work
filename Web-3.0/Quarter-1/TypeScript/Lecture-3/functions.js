"use strict";
function greet(name) {
    console.log(`Hello ${name.toLocaleUpperCase()} in 
                    Air University`);
}
//greet("Zeeshan Asim");
/* function sum(){
   return 2+2;
}
console.log(sum()); // It will return undefined as function does not return any info */
function SumNos(no1, no2) {
    return no1 + no2;
}
console.log(`SumNos(130,343) : ${SumNos(130, 343)}`);
console.log(`SumNos(145,343) : ${SumNos(145, 343)}`);
// Arrow Function
let arrowFunction1 = (n1, n2) => {
    n1 + n2;
};
console.log("Value of the arrowFunction1(343,5677) : " + arrowFunction1(343, 5677));
// The will return undefined
let arrowFunction2 = (n1, n2) => {
    return n1 + n2;
};
console.log("Value of the arrowFunction2(343,5677) : " + arrowFunction2(343, 5677));
// The will return 6020
// Lets more simply arrow function
let arrowFunction3 = (n1, n2) => n1 + n2;
console.log("Value of the arrowFunction3(343,5677) without return : " + arrowFunction3(343, 5677));
// The will return 6020 . So for single line we do not need to return a value
//Note
// This type of arrow funtion is used when we have only one statement  and no multi line code
// In case of multiple line of code we need to specify {} and also return statement in arrow function
