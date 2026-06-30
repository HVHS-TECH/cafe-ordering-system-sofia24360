/***********************************
Name: Ordering System
***********************************/
console.log("Running ordering system");



//Variables
let itemArray = ["Brownies","Egg Tart","Palmiers","Strawberry Cream Tart"]
let userOrder = [];

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
    userOrder.push (choice);
    OUTPUT.innerHTML += qty + "x " + itemArray[choice] + "<br>";
}















