/***********************************
Name: Ordering System
***********************************/
console.log("Running ordering system");



//Variables

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
    let itemArray = [
    {
        item: "Brownies",
        price:12
    }, 
    {
        item: "Egg Tart",
        price: 5
    }, 
    {
        item: "Palmiers",
        price: 10
    },
    {
        item: "Strawberry Cream Tart",
        price: 6 
    }
   ]

    let choice = ITEM_FIELD.value;
    let qty = QTY_FIELD.value;
    userOrder.push (itemArray[choice]);
    OUTPUT.innerHTML += qty + "x " + userOrder.item + "<br>";
}















