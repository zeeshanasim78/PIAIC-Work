// Example of Import using Named Export
import {year , pi} from "./namedExportModule"
console.log("The Value of year is :",year);
console.log("The Value of Pi is :",pi);

// Example of Import from Defualt Export Function
import defVal from "./defualtExportModule"
let retVal=defVal(5);
console.log("Value Returned from Default Function is :", retVal);


