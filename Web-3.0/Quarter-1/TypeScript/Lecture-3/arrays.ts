let fruits:Array<string>=["Mango","Grapes","Apple","Organge"];
let fruitItem;
let idx;
console.log("Value at index 0 of fruits array : " + fruits[0]);
console.log("Value at index 3 of fruits array : " + fruits[3]);
console.log("Values at index 5 of fruits array : " + fruits[5]); //Will return undefined as array is out of bound
console.log("After adding a value in array " + fruits);
// Array adding
fruits.push("Straberry");
// This will add a fruit in array at the end of the array
console.log("After adding a value in array " + fruits);


// To revome an item from array we use pop()
// It removes the last item of the array
fruitItem=fruits.pop();
console.log(`After removing  ${fruitItem} value from items in array are : ${fruits}`);

// To remove element from the start we use shift()
fruitItem=fruits.shift();
console.log(`After adding value  ${fruitItem} value by shifting values is : ${fruits}`);

// To add element at the start we use unshift()
idx=fruits.unshift("Sugar Cane");
console.log(`After adding value using unsfift() is : ${fruits}. The total values in array are ${idx}`);

// do example of slice method



