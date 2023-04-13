//Named function with optional and default parameters
//(Note that the parameter type will be optional when used with default value)
function buildNameOptional(firstName: string, lastName = "Khan") : string {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}

let result11 = buildName("Bob");  //works correctly because last parameter is optional
//let result22 = buildName("Bob", "Adams", "Sr.");  //error, too many parameters
let result33 = buildName("Bob", "Adams");  //correct



//anonymous function type with defult parameters 
//(Note that the parameter type will be optional when used with defult value)
let buildName11 : (firstName: string, lastName?: string) => string = 
function(firstName: string, lastName = "Khan") : string {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}
											
						