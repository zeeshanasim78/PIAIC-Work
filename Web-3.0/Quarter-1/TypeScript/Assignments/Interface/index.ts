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

// Create a variable of type Cart that can contain Products Array
let myCart: Cart;

// Initialize the Cart variable with products array
myCart = { products: [] };

myCart.products[0] = {
    id: 10,
    name: "Pencil",
    price: 15,
    catogory: "Stationary"
}

myCart.products[1] = {
    id: 15,
    name: "Shirt",
    price: 1500,
    catogory: "Clothes"
}

myCart.products[2] = {
    id: 20,
    name: "Devanci Code",
    price: 4500,
    catogory: "Perfume"
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

// Create a variable of type Order
let ord1: Order;

// Initialize the Cart variable with products array
myCart = { products: [] };
ord1 = { customer:  , custCart };


