/* Assignment # 14 of 45
14.	Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? 
Make a list that includes at least three people you’d like to invite to dinner. Then use your list 
to print a message to each person, inviting them to dinner.
 */


let lstGuest:Array<string> = ["Kamran Rasheed", "Naveed Haider", "Adnan Amin","Shahbaz Rasheed", "Muhammad Usman Khan" ];

// Print the Guests Invitation List
for (let gstName of lstGuest) {
  console.log(`Dear ${gstName} ! I am hosting a dinner on comming Friday. You are invited with family for this event.. `); // prints chars: H e l l o  W o r l d
  }

    