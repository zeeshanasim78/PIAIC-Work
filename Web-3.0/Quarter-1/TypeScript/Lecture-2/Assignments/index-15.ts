/* Assignment # 15 of 45
15.	Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send
 out a new set of invitations. You’ll have to think of someone else to invite.
 */

let lstGuest2:Array<string> = ["Kamran Rasheed", "Naveed Haider", "Adnan Amin","Shahbaz Rasheed", "Muhammad Usman Khan" ];
let counter:number;
let lineString:string="";
// Print the Guests Invitation List
for (let gstName of lstGuest2) {
  console.log(`Dear ${gstName} ! I am hosting a dinner on comming Friday. You are invited with family for this event.. `); // prints chars: H e l l o  W o r l d
  }

  // Prepare line
for(counter=0; counter < 100 ; counter++ ){
    lineString=lineString+"=";
}
//Print Line String
console.log(lineString);

  // Mr. Naveed Haider is not coming so I have to replace him with Mr. Ameer Hamza
  lstGuest2[1]='Ameer Hamza';

  // Reprint the Guest Invitation List
  for (let gstName of lstGuest2) {
    console.log(`Dear ${gstName} ! I am hosting a dinner on comming Friday. You are invited with family for this event.. `); // prints chars: H e l l o  W o r l d
    }
    
//Print Line String
console.log(lineString);