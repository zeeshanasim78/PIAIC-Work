// IF we want to return a tuple from a function

const fn=():[string,number] => {
    return ["Test", 3]
}

// Destructuring of array means we get values from array

const [num,str]=fn()
console.log(num);

// Lets do it with a object
const fn2=():{name2:string} => {
    return {
        name2:"Zeeshan"
    }
}

// Destructuring of object
// Note : Key name must be same as defined in the object
const {name2}=fn2();
console.log(name2);

