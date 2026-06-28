/***********************************
Name: Ordering System
***********************************/
console.log("Running ordering system");



//Variables

userOrder = [];

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
    let itemArray = ["Brownies", "Egg tart", "Palmiers", "Strawberry Cream Tart"];
    let choice = ITEM_FIELD.value;
    let qty = QTY_FIELD.value;
    userOrder.push ({item: itemArray[choice], Quatity: qty});
    OUTPUT.innerHTML += qty + "x " + itemArray[choice] + "<br>";
}















