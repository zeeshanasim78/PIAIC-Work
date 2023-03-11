let student:Array<string> = ["a","b","c","d","e","f"];
/*
for (let i = 0; i< student.length ; i++)
{
    console.log(`Value are index ${i} of student is ${student[i]}`);
}
*/

//Note if we get value after the array length it will return undefined

let cities:Array<string>=["Karachi","Lahore","Faisalabad", "Islamabad","Multan","Quetta"];
let cleanCity:string="Islamabad";
let polutedCity:string="Sailkot";
let cleanCityFound:boolean=false;
let pollutedCityFound:boolean=false;

for (let i = 0; i< student.length ; i++)
{
    if(cities[i]===cleanCity)
    {
        console.log(`Found Cleanest city ${cleanCity} at index ${i}`);
        cleanCityFound=true;
    }
    else if(cities[i]===polutedCity)
    {
        console.log(`Poluuted City ${polutedCity} found at index ${i}`);
        pollutedCityFound=true;
    }  
}

if (cleanCityFound == false)
{console.log( "Cleanest City " + cleanCity + " Not Found in Cities Array")}

if (pollutedCityFound == false)
{console.log( "Polutted City " + polutedCity + " Not Found in Cities Array")}
