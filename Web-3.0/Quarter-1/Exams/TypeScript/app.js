var mytype = { name: "Zia", id: 1 };
mytype = { id: 2, name: "Tom" };
mytype = { id: 3, name: "Zian", gender: false };
mytype = { id: 4, gender: false };
var notsure = 4;
notsure = "may be a string";
notsure = false;
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
;
var colorName = Color[2];
console.log(colorName);
