/***********************************
Name: Ordering System
***********************************/
console.log("Running ordering system");
console.log("Custoner name: " + userOrder.customer + "<br>" + "Their order: " + userOrder.items)



//Variables
let itemArray = ["Brownies", "Egg Tart", "Palmiers", "Strawberry Cream Tart"]
let userOrder = []

/**********************************
 Main code
**********************************/
const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
const ITEM_FIELD = document.getElementById("itemField");
const QTY_FIELD = document.getElementById("qtyField");
const NAME_FIELD = document.getElementById("nameField");



    





/***********************************
 Functions
***********************************/

function getFormInput(){
    let userName = NAME_FIELD.value
    Object.defineProperty(userOrder, "customer", {value:userName})
    let choice = ITEM_FIELD.value;
    Object.defineProperty(userOrder, "items", {configurable: true, value:choice})
    let qty = QTY_FIELD.value;
    Object.defineProperty(userOrder, "Quantity", {enumerated: true, value:qty})
    OUTPUT.innerHTML += qty + "x " + itemArray[choice] + "<br>";
    calculatePrice(qty,6)
}

function calculatePrice(_qty, _price){
    let price = _qty * _price;
    OUTPUT.innerHTML += "Price: $" + price + "<br>";
}













