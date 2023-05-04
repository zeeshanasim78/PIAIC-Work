const enum Color11 {Red, Green, Blue};//starts with 0
var c: Color = Color.Green;

const enum Color12 {Red = 1, Green, Blue};
//var colorName: string = Color11[2]; //Not allowed with const enums
console.log(colorName);

const enum Color22 {Red = 1, Green = 2, Blue = 4};//can assign values to all
var colorIndex1 = Color22["Blue"];
console.log(colorIndex1);
