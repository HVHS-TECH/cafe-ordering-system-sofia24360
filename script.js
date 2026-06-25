/***********************************
Name: Ordering System
***********************************/
console.log("Running ordering system");



//Variables


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
    let itemArray = ["Brownies", "Egg tart", "Strawberry Cream Tart", "Palmiers"];
    let choice = ITEM_FIELD.value;
    let qty = QTY_FIELD.value;
    OUTPUT.innerHTML += qty + "x " + itemArray[choice] + "<br>";
}