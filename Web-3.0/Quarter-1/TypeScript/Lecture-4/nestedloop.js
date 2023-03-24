// Nested Loop : Loop with in a loop
// Example : 
var firstNames = ["Zeeshan", "Asad", "Tanveer", "Khalid"];
var lastNames = ["Asim", "Khan", "Afridi", "Iqbal"];
var compNames = []; // Empty Array
for (var i = 0; i < firstNames.length; i++) {
    for (var j = 0; j < lastNames.length; j++) {
        console.log("".concat(firstNames[i], " , ").concat(lastNames[j]));
    }
}
