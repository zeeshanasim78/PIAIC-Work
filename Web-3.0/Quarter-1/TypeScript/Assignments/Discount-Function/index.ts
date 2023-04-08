import inquirer from "inquirer";

let productPrice

function discountPercentage(productPrice:any,discountPercent:any):any {
    if(discountPercent > 50){
            return -1;
    }
    else
    {
        let dPrice = productPrice * (discountPercent/100);
        return dPrice;
    }
}