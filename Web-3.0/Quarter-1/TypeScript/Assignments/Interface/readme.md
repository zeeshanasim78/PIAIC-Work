The package cart-functionality-using-interfaces is designed to implement the cart functionality using Interfaces.

// A Interface named IProduct is defined to contain product following details
    id: number,
    name: string,
    price: number,
    catogory: string

// A Custom Type having name Cart is defined which contains IProduct array
type Cart = {
    products: IProduct[];
}

// How to use IProduct and Cart
// Create a variable of type Cart that can contain IProducts Array 
let cart1: Cart;

// Now Initialize the Cart variable with products array
cart1 = { products: [] };

// Now you can add product in the cart as 
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

// A Interface named ICustomer is also defined to store the following information
    id: number,
    name: string,
    email: string

// A custom type is created to sotre a customer and its cart information
type Order = {
    customer: ICustomer,
    custCart: Cart
}

// After that create and Initialize ICustomer variable
let cust1: ICustomer = {} as ICustomer;

// Set Value for the Customer
cust1.id = 100;
cust1.name = 'Asad';
cust1.email = 'asad@gmail.com';

// Now create a variable of type Order and initialize it as
let ord1: Order = {} as Order;
ord1.custCart = cart1;
ord1.customer = cust1;

// After that just call the function calcCartAmount(ord1.customer, ord1.custCart);

// It will calcuate and return the amount