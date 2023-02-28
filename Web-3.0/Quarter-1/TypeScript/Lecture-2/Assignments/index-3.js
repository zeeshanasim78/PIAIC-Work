/* Assignment # 3 of 45
Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
*/
var pName = 'ZeeshaN Asim';
console.log(" Name in Upper Case ".concat(pName.toUpperCase()));
console.log(" Name in Lower Case ".concat(pName.toLowerCase()));
var sTitleCaseName = pName.toLowerCase();
sTitleCaseName = sTitleCaseName.split(" ").map(function (l) { return l[0].toUpperCase() + l.substr(1); }).join(" ");
console.log(" Name in TitleCase ".concat(sTitleCaseName));
