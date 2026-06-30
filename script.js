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
    calculateTotal(choice, qty)
}

function calculateTotal(_item, _qty){
    let total = (_item * _qty) * 6;
    OUTPUT.innerHTML += "Total: $" + total + "<br>";
}















