/***********************************
Name: Ordering System
***********************************/
console.log("Running ordering system");



//Variables
let itemArray = ["Brownies","Egg Tart","Palmiers","Strawberry Cream Tart"]


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
    let qty = QTY_FIELD.value;
    OUTPUT.innerHTML += qty + "x " + itemArray[choice] + "<br>";
    calculatePrice(choice, qty)
    calculateTotal()
}

function calculatePrice(_item, _qty){
    let price = (_item * _qty) * 6;
    OUTPUT.innerHTML += "Price: $" + total + "<br>";
}

function calculateTotal(_){
    let total = price + price;
    OUTPUT.innerHTML += "Total: $" + total + "<br>"

}















