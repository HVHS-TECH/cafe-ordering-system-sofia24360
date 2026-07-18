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

const userName = document.getElementById("nameField".value);






/***********************************
 Functions
***********************************/

function getFormInput(itemName, itemPrice){
    let choice = {name:itemName, price:itemPrice}
    userOrder.push(choice)
    document.getElementById("userOrder").innerHTML += "<p> You have added " + choice.name + " $" + choice.price + "</p>";
}

function placeOrder(){


}











