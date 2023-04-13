// Rest Parameter will always come at last and there can be only one rest parameters
function buildNameRestParam(firstName: string, ...restOfName: string[]) {//Named function with Rest parameters
	return firstName + " " + restOfName.join(" ");
}

var employeeName = buildNameRestParam("Joseph", "Samuel", "Lucas", "MacKinzie");




//anonymous function type with Rest parameters
var buildNameFun: (fname: string, ...rest: string[])=>string =
function (firstName: string, ...restOfName: string[]) {
	return firstName + " " + restOfName.join(" ");
}

//Note: Rest, optional and default parameters can only
// be at the end of the parameter list
											
						