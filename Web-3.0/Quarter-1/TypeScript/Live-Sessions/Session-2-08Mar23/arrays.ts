// Array of numbers
let numArray:number[] = [123,235,47,6,34,675];

// Array that can contain mutiple types of data 
let mixType : Array<string | number | boolean>=["Pakistan","34","true"];
console.log(typeof(mixType) + " - " + mixType);

mixType =[23,545,7,678,87,8];
console.log(typeof(mixType) + " - " + mixType);

mixType =[true,false,true,true,false];
console.log(typeof(mixType) + " - " + mixType);

mixType =[true,"English",343,654,false];
console.log(typeof(mixType) + " - " + mixType);


// Array Functions
// To add a value in array at the end
mixType.push("UK");
console.log("After value UK in array : " + mixType);

// To remove value from array from end
mixType.pop();
console.log("After pop from array : " + mixType);

// To remove value at the start of array
let val=mixType.shift();
console.log("After using shift function on the array : " + mixType);
console.log("Value Shifted is = " + val);

//  To add value at the start of array
val=mixType.unshift("New-Value")
console.log("After adding value using unshift function on the array : " + mixType);
console.log("Value added at = " + val);

// Slice() 
console.log(mixType.slice(2,5));

// Splice Function
mixType.splice(8,1,5000)
console.log(mixType);
