#!/usr/bin/env node

// Define interface IProduct
interface IProduct {
    id: number,
    name: string,
    price: number,
    catogory: string
}

// Define Custom Type Cart containt IProduct array
type Cart = {
    products: IProduct[];
}

// Define interface ICustomer
interface ICustomer {
    id: number,
    name: string,
    email: string
}

// Define Custom Type Order containt Customer and its Cart
type Order = {
    customer: ICustomer,
    custCart: Cart
}

// Create a variable of type Cart that can contain Products Array
//let cart1: Cart;

// Initialize the Cart variable with products array
//cart1 = { products: [] };

/*
cart1.products[0] = {
    id: 10,
    name: "Pencil",
    price: 15,
    catogory: "Stationary"
}

cart1.products[1] = {
    id: 15,
    name: "Shirt",
    price: 1500,
    catogory: "Clothes"
}

cart1.products[2] = {
    id: 20,
    name: "Devanci Code",
    price: 4500,
    catogory: "Perfume"
}
*/




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
export default function calcCartAmount(cust: ICustomer, cart: Cart) {
    console.log(`Hello, ${cust.name}!`);
    console.log(`You added ${cart.products.length} items in the cart...`);

    let billAmount = 0;
    var counter: number = 0;

    for (counter = 0; counter < cart.products.length; counter++) {
        console.log(`Product # ${counter + 1} , Product Name: ${cart.products[counter].name} and its Price is ${cart.products[counter].price} !`);
        billAmount = billAmount + cart.products[counter].price;
    }

    console.log(` ${cust.name} added ${cart.products.length} products in cart and his total bill is ${billAmount} !`);
}

//calcCartAmount(ord1.customer, ord1.custCart);
export { IProduct, ICustomer, Cart, Order };