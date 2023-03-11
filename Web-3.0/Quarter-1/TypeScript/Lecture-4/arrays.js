// Lecture # 4   : Date 11Mar23
// Array Splice Method:
// Removes elements from an array and, if necessary, inserts new elements in their place, returning the 
// deleted elements.
// 1st parameter is @param start — The zero-based location in the array from which to start removing elements.
// 2nd parameter is @param deleteCount — The number of elements to remove.
// 3rd Parameter is to add values in the array as 
// This function returns an array containing the elements that were deleted.
//console.log(arr.splice(2)); // It will strat string from index value 2 till end of array, 
// For reaming arguments of the array function is using default value
var arr = ["a", "b", "c", "d", "e"];
var arr2 = "x,t,z";
console.log("Before Splice method on arr=" + arr); //
var arr3 = arr.splice(2, 1, arr2);
console.log("arr=" + arr); //
console.log("arr2=" + arr2);
console.log("arr3=" + arr3);
// We can view the complete list of arr from the Google Chrome 
// Open the Developer Tools  , then select the console  
// if we declare any string variable then if we type the variable name in the google chrome console it will return list of all string function
// Assignment # 1: Create a Sum function that can take as many parameters we want to give and returns the sum of all numbers
