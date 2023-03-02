/* Assignment # 16 of 45
16.	More Guests: You just found a bigger dinner table, so now more space is available. Think of three more
 guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
• Add one new guest to the beginning of your array.
• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
 */

let lstGuest3:Array<string> = ["Kamran Rasheed", "Shahbaz Rasheed", "Muhammad Usman Khan" ];
let counter2:number;
let idx:number;
let lineString2:string="";

console.log("===Printing of Initial Guest List for the dinner===");
// Print the Guests Invitation List
for (let gstName of lstGuest3) {
  console.log(`Dear ${gstName} ! I am hosting a dinner on comming Friday. You are invited with family for this event.. `); // prints chars: H e l l o  W o r l d
  }

  // Prepare line
for(counter2=0; counter2 < 100 ; counter2++ ){
    lineString2=lineString2+"=";
}
//Print Line String
console.log(lineString2);

//Shahbaz Rasheed is not coming so I have to replace him with Mr. Ameer Hamza
idx=lstGuest3.indexOf("Shahbaz Rasheed"); // To find the location of guest in the array list
lstGuest3[idx]='Ameer Hamza'; // Replace value with "Ameer Hamza"

console.log("===Reprinting Guest List After Changing one Guest===");
// Reprint the Guest Invitation List
  for (let gstName of lstGuest3) {
    console.log(`Dear ${gstName} ! I am hosting a dinner on comming Friday. You are invited with family for this event.. `); // prints chars: H e l l o  W o r l d
    }
//Print Line String
console.log(lineString2);

console.log("=== I have found a bigger table so now i am inviting more friends===");
// Add a guest at the start of the Guest List
lstGuest3.unshift("Rizwan Haider");

// Add a guest at the end of the Guest List
lstGuest3.push("Muhammad Asim");

// Reprint the Guest Invitation List
console.log("============Reprinting the Guest List After addiing 01 guest at start and 01 and the end of list============")
for (let gstName of lstGuest3) {
    console.log(`Dear ${gstName} ! I am hosting a dinner on comming Friday. You are invited with family for this event.. `); // prints chars: H e l l o  W o r l d
  }
 //Print Line String
console.log(lineString2);   