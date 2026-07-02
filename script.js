/***********************************
Name: Ordering System
***********************************/
console.log("Running ordering system");



//Variables
let itemArray = ["Brownies", "Egg Tart", "Palmiers", "Strawberry Cream Tart"]
let userOrder = []

/**********************************
 Main code
**********************************/
const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
const ITEM_FIELD = document.getElementById("itemField");
const QTY_FIELD = document.getElementById("qtyField");









/***********************************
 Functions
***********************************/

function getFormInput(){
    let choice = ITEM_FIELD.value;
    userOrder.push(choice)
    let qty = QTY_FIELD.value;
    OUTPUT.innerHTML += qty + "x " + itemArray[choice] + "<br>";
    calculatePrice(qty,6)
}

function calculatePrice(_qty, _price){
    let price = _qty * _price;
    OUTPUT.innerHTML += "Price: $" + price + "<br>";
}













