"use strict";
// When ever we have limited number of values that can be assigned to a variable then we can use enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
; //starts with 0
// Means Red is assigned value 0 , Green is assigned value 1 and Blue 2
var c = Color.Green;
var Color1;
(function (Color1) {
    Color1[Color1["Red"] = 1] = "Red";
    Color1[Color1["Green"] = 2] = "Green";
    Color1[Color1["Blue"] = 3] = "Blue";
})(Color1 || (Color1 = {}));
;
// Here we have specified to start the index from 1
// Green will be 2 and Blue will be 3
var colorName = Color1[2];
console.log(colorName); // It will return Green as start index is 1
var Color2;
(function (Color2) {
    Color2[Color2["Red"] = 1] = "Red";
    Color2[Color2["Green"] = 2] = "Green";
    Color2[Color2["Blue"] = 4] = "Blue";
})(Color2 || (Color2 = {}));
; //can assign values to all
// In the above case we have defined each item value
var colorIndex = Color2["Blue"];
console.log(colorIndex);
