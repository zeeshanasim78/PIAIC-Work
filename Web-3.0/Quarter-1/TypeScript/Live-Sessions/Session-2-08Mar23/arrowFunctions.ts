function calcAverage(num1:number,num2:number):number
{
    return (num1+num2)/2;
}

console.log("The average of 20 and 30 is " +calcAverage(20,30));

// Make a function using rest options that can take any amount of numbers and returns average of given numbers

// Now lets make this fucntion using arrow function
let avg =(num1:number,num2:number) => (num1+num2)/2

// for more than one statements we can add {}
let avg2 =(num1:number,num2:number) => 
{
   let ag=(num1+num2)/2;
   return ag;
}

// Function Parameter with Default Values
function sumNumbers(n1:number,n2:number,n3:number=0):number{
        return n1+n2+n3;
    }

let res=sumNumbers(12,43);
console.log(res);


// Function Parameter with Optional and Default Values
// To make a parameter optional we add ? with parameter name
let res2= (n1:number,n2?:number,n3:number=0)=>    console.log(`The Value of n1 = ${n1}, n2= ${n2} and  n3=${n3}`)
console.log(res2);

//Note: we cannot make a parameter optional and set its default value
// Its Rule that there can be no optional parameter before required parameter
// Similarly we cannot make 1st parameter optional 


function optionalParameters(n1?:number,n2:number=0):number
{
    return n1+n2;
}

console.log(optionalParameters());
console.log(optionalParameters(10));
console.log(optionalParameters(10,20));
