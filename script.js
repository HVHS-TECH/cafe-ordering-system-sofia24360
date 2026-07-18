/***********************************
Name: Ordering System
***********************************/
console.log("Running ordering system");


//Variables
const menuArray = [{ item:"Brownies", price: 11},
                 { item: "Egg Tart", price: 5},
                 { item: "Palmiers", price: 10},
                 { item: "Strawberry Cream Tart", price: 6}
                ];

let userOrder = [];
let total = 0;
/**********************************
 Main code
**********************************/
const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
const NAME_FIELD = document.getElementById("nameField");

getFormInput('Brownies', 11)
getFormInput('Egg Tart', 5)
getFormInput('Palmiers', 10)
getFormInput('Strawberry Cream Tart', 6)





/***********************************
 Functions
***********************************/

function getFormInput(itemName, itemPrice){
    let choice = {name:itemName, price:itemPrice}
    userOrder.push(choice)
    getElementById("UserOrder").innerHTML += "<p> You have added " + choice.name + " $" + choice.price + "</p>";
}












