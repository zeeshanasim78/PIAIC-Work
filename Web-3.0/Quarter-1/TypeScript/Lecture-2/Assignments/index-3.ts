/* Assignment # 3 of 45
Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
*/

let pName:string='ZeeshaN Asim';
console.log (` Name in Upper Case ${pName.toUpperCase()}`);
console.log (` Name in Lower Case ${pName.toLowerCase()}`);

let sTitleCaseName:string= pName.toLowerCase();
sTitleCaseName=sTitleCaseName.split(" ").map((l: string) => l[0].toUpperCase() + l.substr(1)).join(" ");
console.log (` Name in TitleCase ${sTitleCaseName}`);