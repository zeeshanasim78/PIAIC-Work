// Create a variable of type Cart that can contain Products Array
var cart1;
// Initialize the Cart variable with products array
cart1 = { products: [] };
cart1.products[0] = {
    id: 10,
    name: "Pencil",
    price: 15,
    catogory: "Stationary"
};
cart1.products[1] = {
    id: 15,
    name: "Shirt",
    price: 1500,
    catogory: "Clothes"
};
cart1.products[2] = {
    id: 20,
    name: "Devanci Code",
    price: 4500,
    catogory: "Perfume"
};
// Initialize the Order type variable
var cust1 = {};
// Set Value for the Customer
cust1.id = 100;
cust1.name = 'Asad';
cust1.email = 'asad@gmail.com';
// Create a variable of type Order
var ord1 = {};
ord1.custCart = cart1;
ord1.customer = cust1;
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
calcCartAmount(ord1.customer, ord1.custCart);
