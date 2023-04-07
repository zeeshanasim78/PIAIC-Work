function calcAverage(num1, num2) {
    return (num1 + num2) / 2;
}
console.log("The average of 20 and 30 is " + calcAverage(20, 30));
// Make a function using rest options that can take any amount of numbers and returns average of given numbers
// Now lets make this fucntion using arrow function
var avg = function (num1, num2) { return (num1 + num2) / 2; };
// for more than one statements we can add {}
var avg2 = function (num1, num2) {
    var ag = (num1 + num2) / 2;
    return ag;
};
// Function Parameter with Default Values
function sumNumbers(n1, n2, n3) {
    if (n3 === void 0) { n3 = 0; }
    return n1 + n2 + n3;
}
var res = sumNumbers(12, 43);
console.log(res);
// Function Parameter with Optional and Default Values
// To make a parameter optional we add ? with parameter name
var res2 = function (n1, n2, n3) {
    if (n3 === void 0) { n3 = 0; }
    return console.log("The Value of n1 = ".concat(n1, ", n2= ").concat(n2, " and  n3=").concat(n3));
};
console.log(res2);
//Note: we cannot make a parameter optional and set its default value
// Its Rule that there can be no optional parameter before required parameter
// Similarly we cannot make 1st parameter optional 
function optionalParameters(n1, n2) {
    if (n2 === void 0) { n2 = 0; }
    return n1 + n2;
}
console.log(optionalParameters());
console.log(optionalParameters(10));
console.log(optionalParameters(10, 20));
