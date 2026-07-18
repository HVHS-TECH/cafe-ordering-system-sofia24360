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
const userMoney = Number(document.getElementById("moneyField").value)





/***********************************
 Functions
***********************************/

function getFormInput(itemName, itemPrice){
    let choice = {name:itemName, price:itemPrice}
    userOrder.push(choice)
    total = total + 
    document.getElementById("userOrder").innerHTML += "<p> You have added " + choice.name + " $" + choice.price + "</p>";
}

function placeOrder(){
    if(userOrder.length == 0){
        document.getElementById("receiptOutput").innerHTML = "Your order is currently empty";
    }
    if(userName == ""){
        document.getElementById("receiptOutput").innerHTML = "Please enter a name"
        return;
    }
    if(userMoney < total){
        document.getElementById("receiptOutput").innerHTML = "Sorry you don't have enough money"
        return;
    }
}











