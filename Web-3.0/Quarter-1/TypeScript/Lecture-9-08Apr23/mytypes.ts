// You can also define a type alias
type rawData = boolean | number | string | null | undefined;

let data1: RawData;

// You can even combine them

type Id1 = number | string;

type IdMaybe1 = Id | undefined | null;

interface Ball{
    diameter : number;
}

interface Sphere{
    diameter :number;
}

let ball : Ball = {diameter:10};

let sphere : Sphere = {diameter :20};

sphere  = ball;  // As both have same property. Type Script is based on structural type
ball = sphere;

interface Tube{
    diameter: number;
    length : number;
}

// Now we can assigne ball and sphere variable to tube variable but reverse is not possible
// reason is that Tube as an adiitional property  length

let tube : Tube = {diameter:12, length:2};

//tube = ball;  /// tube requires twp properties where as ball as only one thats why this generates error
ball = tube;


// Case dwhen "Fresh" object literal are assigned to a variable
// Rule: When a fresh object literal is assigned to a variable or passed for a parameter fo a non empty target
// it is an error for the object literal to speciy properties that don't exists in the target type
// The rationale for the below two error in that since he fresh types of the object literals are
//  never captured in variable, static knowledge of the excess or misspelled properties should not be silent
//

// Note : Important Concept
// You can add specify additional property in the Fresh Object but that cannot be done with stale onbject

let myType = { name:"Zia", id:1};  // Considered as Fresh Object
// Case 1
myType = {id:2 , name:"Tom"}; // Now Treated as Stale Object as object was already available

//case 2
myType = {id:2, name_person : "Tom"}; // Error , renamed or missing property

// case 3:
myType = { id:2, name :"Tom"}