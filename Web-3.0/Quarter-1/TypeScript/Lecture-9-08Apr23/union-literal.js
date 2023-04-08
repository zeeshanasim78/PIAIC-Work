"use strict";
let myname;
myname = null;
console.log(myname);
myname = "zia";
console.log(myname);
//myname = undefined; //Error
//myname = 12; //Error
let myAge; // Now methods that are valid for both will can be used
myAge = 16; //narrowing
console.log(myAge);
//console.log(myAge.toLowerCase());//Error as toLowerCase cannot be applied in number
// We can check the type of the variable using the typeof function
myAge = "Dont Know"; //narrowing
console.log(myAge);
console.log(myAge.toString()); // common to both types 
//can be called even without narrowing
console.log(myAge.toLowerCase()); //Can be called on string 
//because of narrowing
let newAge = Math.random() > 0.6 ? "Khan" : 60;
//newAge.toLowerCase();//Error: Transpiler cannot narrow
if (newAge === "Khan") {
    // Type of newAge: string
    newAge.toUpperCase(); // Can be called
}
if (typeof newAge === "string") {
    // Type of newAge: string
    newAge.toUpperCase(); // Can be called
}
typeof newAge === "string"
    ? newAge.toUpperCase() // Ok: string
    : newAge.toFixed(); // Ok: number
let age;
// It means age variable can either store ja number or died or unkown string value
// It is known as type literals
age = 90; //OK
age = "died"; //OK
age = "unknown"; //OK
//age = "living";//Error as we have defined string values assigned can be only died or unknown
let zia;
zia = "zia";
//zia = "khan";//Error
let yourName = Math.random() > 0.6 ? "Hira Khan" : undefined;
if (yourName) {
    yourName.toUpperCase(); // Ok: string
}
//yourName.toUpperCase();//Error: Object is possibly 'undefined'.
yourName === null || yourName === void 0 ? void 0 : yourName.toUpperCase(); //OK
let data;
