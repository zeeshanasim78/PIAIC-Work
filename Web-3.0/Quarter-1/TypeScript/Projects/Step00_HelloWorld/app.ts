let message: string = 'Hello, World! Welcome to TypeScript';
// create a new heading 1 element
let heading = document.createElement('h1');
heading.textContent = message;
// add the heading the document
document.body.appendChild(heading);

// JSON : Java Script Object Notation
// Is JSON is similar to javaScript objects ?
// The Answer is No.
// JavaScript objects can contain functions but JSON not.
// JavaScript objects can only be used in JavaScript but JSON can be created and used by other programming languages.

// JSON data consists of key/value pairs similar to JavaScript object properties.
// The key and values are written in double quotes separated by a :.

// How to declare JSON object
const detail = { "name": "Vipin", "age": 21 }

// Accessing JSON object
console.log(detail.name); // Vipin
let heading2 = document.createElement('h2');
heading2.textContent = detail.name;
// add the heading the document
document.body.appendChild(heading2);

console.log(detail.name); // Vipin
let heading3 = document.createElement('h3');
//We can also use square bracket syntax [] to access JSON data as
heading3.textContent = detail["age"].toString();
// add the heading the document
document.body.appendChild(heading3);

//Use of JSON
//JSON is the most commonly used format for transmitting data (data interchange) from a server to a client and vice-versa.
//JSON data are very easy to parse and use.
//JSON is language independent(We can create and use JSON in other programming languages too).

// Note In case of an eror .js file will be generated but it is not valid.
// Note that .js file will be generated but it would not be in a valid state.
// We can use tsconfig.json paramter   "noEmitOnError": true
// If we do not want to create .js file on transpilation of ts file if there is some error
// We can use the parameter 

