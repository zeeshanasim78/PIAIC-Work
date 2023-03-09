// MAth Library
// Math.random function generates a random value between 0 and 1
var x = Math.round(Math.random() * 10); // 1-10  
// if - elseif - else
// logical operators && , || and !
if (x >= 7 && x <= 10) {
    console.log("The value of x is greater than equal to 7  and less than equal to 10 so x = ".concat(x));
}
else if (x >= 4 && x < 7) {
    console.log("The value of x is greater than equal to 4  and less than 7 so x = ".concat(x));
}
else {
    console.log("The value of x is < 4 so  x = ".concat(x));
}
