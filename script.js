/***********************************
Name: Ordering System
***********************************/
console.log("Running ordering system");


//Variables
const menuArray = [{ name:"Brownies", price: 11},
                 { name: "Egg Tart", price: 5},
                 { name: "Palmiers", price: 10},
                 { name: "Strawberry Cream Tart", price: 6}
                ];

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
    let choice = ITEM_FIELD.value;
    let qty = QTY_FIELD.value;
    OUTPUT.innerHTML += qty + "x " + itemArray[choice] + "<br>";
}












