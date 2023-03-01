/* Assignment # 14 of 45
14.	Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite?
Make a list that includes at least three people you’d like to invite to dinner. Then use your list
to print a message to each person, inviting them to dinner.
 */
var index = 0;
var lstGuest = ["Kamran Rasheed", "Naveed Haider", "Adnan Amin", "Shahbaz Rasheed", "Muhammad Usman Khan"];
for (var _i = 0, lstGuest_1 = lstGuest; _i < lstGuest_1.length; _i++) {
    var gstName = lstGuest_1[_i];
    console.log("Dear ".concat(gstName, " ! I am hosting a dinner on comming Friday. You are invited with family for this event.. ")); // prints chars: H e l l o  W o r l d
}
