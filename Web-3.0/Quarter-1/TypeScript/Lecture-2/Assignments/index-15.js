/* Assignment # 15 of 45
15.	Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send
 out a new set of invitations. You’ll have to think of someone else to invite.
 */
var lstGuest2 = ["Kamran Rasheed", "Naveed Haider", "Adnan Amin", "Shahbaz Rasheed", "Muhammad Usman Khan"];
var counter;
var lineString = "";
// Print the Guests Invitation List
for (var _i = 0, lstGuest2_1 = lstGuest2; _i < lstGuest2_1.length; _i++) {
    var gstName = lstGuest2_1[_i];
    console.log("Dear ".concat(gstName, " ! I am hosting a dinner on comming Friday. You are invited with family for this event.. ")); // prints chars: H e l l o  W o r l d
}
// Prepare line
for (counter = 0; counter < 100; counter++) {
    lineString = lineString + "=";
}
//Print Line String
console.log(lineString);
// Mr. Naveed Haider is not coming so I have to replace him with Mr. Ameer Hamza
lstGuest2[1] = 'Ameer Hamza';
// Reprint the Guest Invitation List
for (var _a = 0, lstGuest2_2 = lstGuest2; _a < lstGuest2_2.length; _a++) {
    var gstName = lstGuest2_2[_a];
    console.log("Dear ".concat(gstName, " ! I am hosting a dinner on comming Friday. You are invited with family for this event.. ")); // prints chars: H e l l o  W o r l d
}
//Print Line String
console.log(lineString);
