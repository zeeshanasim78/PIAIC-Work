var student = ["a", "b", "c", "d", "e", "f"];
/*
for (let i = 0; i< student.length ; i++)
{
    console.log(`Value are index ${i} of student is ${student[i]}`);
}
*/
//Note if we get value after the array length it will return undefined
var cities = ["Karachi", "Lahore", "Faisalabad", "Islamabad", "Multan", "Quetta"];
var cleanCity = "Islamabad";
var polutedCity = "Sailkot";
var cleanCityFound = false;
var pollutedCityFound = false;
for (var i = 0; i < student.length; i++) {
    if (cities[i] === cleanCity) {
        console.log("Found Cleanest city ".concat(cleanCity, " at index ").concat(i));
        cleanCityFound = true;
    }
    else if (cities[i] === polutedCity) {
        console.log("Poluuted City ".concat(polutedCity, " found at index ").concat(i));
        pollutedCityFound = true;
    }
}
if (cleanCityFound == false) {
    console.log("Cleanest City " + cleanCity + " Not Found in Cities Array");
}
if (pollutedCityFound == false) {
    console.log("Polutted City " + polutedCity + " Not Found in Cities Array");
}
