/***********************************
Name: Ordering System
***********************************/
console.log("Running ordering system");



//Variables


/**********************************
 Main code
**********************************/
const OUTPUT = document.getElementById("spaceForJavaScriptOutput");








/***********************************
 Functions
***********************************/

function getFormInput(){
    let itemArray = ["Brownies", "Egg tart", "Strawberry Cream Tart", "Palmiers"];
    let choice = ITEM_FIELD.value;
    OUTPUT.innerHTML = "x " + itemArray[choice] + "<br>";
}