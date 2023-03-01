/* Assignment # 16 of 45
16.	More Guests: You just found a bigger dinner table, so now more space is available. Think of three more
 guests to invite to dinner.
 */

 let lstGuest3:Array<string> = ["Kamran Rasheed", "Naveed Haider", "Adnan Amin","Shahbaz Rasheed", "Muhammad Usman Khan" ];
let counter2:number;
let lineString2:string="";
// Print the Guests Invitation List
for (let gstName of lstGuest3) {
  console.log(`Dear ${gstName} ! I am hosting a dinner on comming Friday. You are invited with family for this event.. `); // prints chars: H e l l o  W o r l d
  }

  // Prepare line
for(counter2=0; counter2 < 100 ; counter2++ ){
    lineString=lineString+"=";
}
//Print Line String
console.log(lineString);

  // Mr. Naveed Haider is not coming so I have to replace him with Mr. Ameer Hamza
  lstGuest3[1]='Ameer Hamza';

  // Reprint the Guest Invitation List
  for (let gstName of lstGuest3) {
    console.log(`Dear ${gstName} ! I am hosting a dinner on comming Friday. You are invited with family for this event.. `); // prints chars: H e l l o  W o r l d
    }
    
//Print Line String
console.log(lineString);
