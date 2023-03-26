// Nested Loop : Loop with in a loop
// Example : 

let firstNames:Array<string> = ["Zeeshan","Asad","Tanveer", "Khalid"];
let lastNames:Array<string>=["Asim", "Khan", "Afridi", "Iqbal"];
let compNames:Array<string>=[]; // Empty Array

for(let i=0; i< firstNames.length ; i++)
{
    for(let j=0; j < lastNames.length; j++)
    {
        console.log(`${firstNames[i]} , ${lastNames[j]}`);
    }
}

