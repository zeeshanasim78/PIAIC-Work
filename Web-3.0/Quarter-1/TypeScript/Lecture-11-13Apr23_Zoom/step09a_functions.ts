// Lecture - 11 : 13Apr23 - Sie Zia Online Session

//Note: All parameters are required

//Named function
function add(x: number, y: number): number {
    return x+y;
}

//Anonymous function
let myAdd1 = function(x: number, y: number): number { 
				return x+y; 
};


//Anonymous function with explict type
let myAdd2: (x:number, y:number)=>number = 	function(x: number, y: number): number { 
												return x+y; 
											};

// When you define type names dont matter only thing that matter is its data type
let myAdd3: (baseValue:number, increment:number)=>number = 	function(x: number, y: number): number { 
																return x+y; 
															};

//Lambda functions															
let myAdd4 = (a : number, b : number) => a + b;
// For single line Lamba function we did not require {}
// If we speicfy {} then we need to specify the return keyword to return value
//output will be: var myAdd4 = function(a : number, b : number) {return a + b};
// Note Every lambda function is a anonymous function but not every anonymous function is Lambda functin=on

type GreetFunction = (a: string) => void;
function greeter(fn: GreetFunction) {
	//....
}


											
						