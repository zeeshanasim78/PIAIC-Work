// When ever we have limited number of values that can be assigned to a variable then we can use enum

enum Color {Red, Green, Blue};//starts with 0
// Means Red is assigned value 0 , Green is assigned value 1 and Blue 2
var c: Color = Color.Green;

enum Color1 {Red = 1, Green, Blue};
// Here we have specified to start the index from 1
// Green will be 2 and Blue will be 3

var colorName: string = Color1[2];
console.log(colorName); // It will return Green as start index is 1

enum Color2 {Red = 1, Green = 2, Blue = 4};//can assign values to all
// In the above case we have defined each item value

var colorIndex = Color2["Blue"];
console.log(colorIndex);
