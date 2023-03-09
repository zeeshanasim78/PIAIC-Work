var country = ["Pakistan", "Turkey", "USA", "UK", "Canada"];
var domicile = ["Sindh", "Punjab", "KPK", "Balocistan", "AJK"];
var ranNum = Math.round(Math.random() * 4);
var ranNum2 = Math.round(Math.random() * 4);
console.log("Random Value Generated is =" + ranNum + " and ranNum2 = " + ranNum2);
if (country[ranNum] === "Pakistan") {
    if (domicile[ranNum2] === "Punjab") {
        console.log("You are Eligible for Jobs on Punjab and Merita Quota...");
    }
    else if (domicile[ranNum2] === "Sindh") {
        console.log("You are Eligible for Jobs on Sindh and Merit Quota...");
    }
    else if (domicile[ranNum2] === "Balochistan") {
        console.log("You are Eligible for Jobs on Balochistan and Merit Quota...");
    }
    else if (domicile[ranNum2] === "KPK") {
        console.log("You are Eligible for Jobs on KPK and Merit Quota...");
    }
    else {
        console.log("You are Eligible for Jobs on Merit Quota...");
    }
}
else if (country[ranNum] === "Turkey") {
    console.log(" Your are eligible to apply on Open Merit and No Visa Fee Required... Hurrey...");
}
else if (country[ranNum] === "USA" || country[ranNum] === "UK") {
    console.log(" Your are " + country[ranNum] + " national and eligible to apply on Open Merit and but Visa Fee will be charged");
}
else {
    console.log(" Your are " + country[ranNum] + " national and eligible to apply on Open Merit and but 50% Visa Fee will be charged");
}
