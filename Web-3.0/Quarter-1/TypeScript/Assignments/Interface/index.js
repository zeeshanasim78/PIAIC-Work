#!/usr/bin/env node
"use strict";
exports.__esModule = true;
// Initialize the Order type variable
//let cust1: ICustomer = {} as ICustomer;
// Create a variable of type Order
//let ord1: Order = {} as Order;
/*
// Set Value for the Customer
cust1.id = 100;
cust1.name = 'Asad';
cust1.email = 'asad@gmail.com';


ord1.custCart = cart1;
ord1.customer = cust1;

*/
function calcCartAmount(cust, cart) {
    console.log("Hello, ".concat(cust.name, "!"));
    console.log("You added ".concat(cart.products.length, " items in the cart..."));
    var billAmount = 0;
    var counter = 0;
    for (counter = 0; counter < cart.products.length; counter++) {
        console.log("Product # ".concat(counter + 1, " , Product Name: ").concat(cart.products[counter].name, " and its Price is ").concat(cart.products[counter].price, " !"));
        billAmount = billAmount + cart.products[counter].price;
    }
    console.log(" ".concat(cust.name, " added ").concat(cart.products.length, " products in cart and his total bill is ").concat(billAmount, " !"));
}
exports["default"] = calcCartAmount;
