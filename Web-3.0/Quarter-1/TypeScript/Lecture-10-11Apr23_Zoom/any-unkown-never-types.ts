// Any

let myval: any;
// It means we are telling TS that we can assign any type of value either it is boolean ,string , number , type etc

myval = true; // OK
myval = 42; // OK
myval = "hey!"; // OK
myval = []; // OK  -Array
myval = {}; // OK - Object
myval = Math.random; // OK - Decimal Value
myval = null; // OK
myval = undefined; // OK
myval = () => { console.log('Hey again!'); }; // OK


//Unknown

let value: unknown;
// TS has recommended that if you did not know what data type to assign then
// it better to assign it unkown rather any
value = true; // OK
value = 42; // OK
value = "hey!"; // OK
value = []; // OK
value = {}; // OK
value = Math.random; // OK
value = null; // OK
value = undefined; // OK
value = () => { console.log('Hey again!'); }; // OK


// Assigning a value of type unknown to variables of other types

let val: unknown;

const val1: unknown = val; // OK
const val2: any = val; // OK
//const val3: boolean = val; // Will throw error
// but we assign it using Type Casting there will be no error
const val3: boolean = val as boolean; // Will throw error


const val4: number = val; // Will throw error
const val5: string = val; // Will throw error
const val6: Record<string, any> = val; // Will throw error
const val7: any[] = val; // Will throw error
const val8: (...args: any[]) => void = val; // Will throw error


// Never

// Function returning never must not have a reachable end point
function error(message: string): never {
  throw new Error(message);
}
 
// Inferred return type is never
function fail() {
  return error("Something failed");
}
 
// Function returning never must not have a reachable end point
function infiniteLoop(): never {
  while (true) {}
}
