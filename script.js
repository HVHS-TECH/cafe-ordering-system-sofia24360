/***********************************
Name: Ordering System
***********************************/
console.log("Running ordering system");


//Variables
//array with the names of the items and their prices
const menuArray = [{ item:"Brownies", price: 11},
                 { item: "Egg Tart", price: 5},
                 { item: "Palmiers", price: 10},
                 { item: "Strawberry Cream Tart", price: 6}
                ];

//empty array to later store what the user orders
let userOrder = [];
// variable to keep track of how much the users order cost
let total = 0;
/**********************************
 Main code
**********************************/





/***********************************
 Functions
***********************************/
//funcion for the user to add items into their order 
function getFormInput(itemName, itemPrice){
    let choice = {name:itemName, price:itemPrice}
//stores the items that the user wants into another array(userOrder)
    userOrder.push(choice)
//calculates the total and continues adding to it as the user adds more stuff into their order
    total = total + choice.price;
//shows the user the items they have added along with the price
    document.getElementById("userOrder").innerHTML += "<p> You have added " + choice.name + " $" + choice.price + "</p>";
//displays and updates the total as the user orders
    document.getElementById("userTotal").innerHTML += "<p> TOTAL: $ " + total + "</p>";

}

//function will print a receipt for the user
function placeOrder(){
   const userName = document.getElementById("nameField").value;
   const userMoney = Number(document.getElementById("moneyField").value)
//if's will check for any mistakes or empty/missing information 
// checks whether the user has added items before placing their order
    if(userOrder.length == 0){
        document.getElementById("receiptOutput").innerHTML = "<br> Your order is currently empty"
        return;
    }
//checks if the user has entered a name before placing their order
    if(userName == ""){
        document.getElementById("receiptOutput").innerHTML = "<br> Please enter a name"
        return;
    }
//checks if the user had put in their money before placing their order
    if(userMoney == 0){
        document.getElementById("receiptOutput").innerHTML = "<br> Please put in your money"
        return;
    }
//ifthe user has put in their money, this checks if they have enough for their order/total
    if(userMoney < total){
        document.getElementById("receiptOutput").innerHTML = "<br> Sorry you don't have enough money"
        return;
    }
    
//calculates the users change based on their total and amount of money they put in
let userChange = userMoney - total;

let receipt ="";
//for loop used to display the users order that has been stored in userOrder
for(let item = 0; item < userOrder.length; item++){
    receipt += userOrder[item].name + " $" + userOrder[item].price + "<br>";
}
//the format that the receipt will be displayed in
document.getElementById("receiptOutput").innerHTML = "<h3>RECEIPT</h3>" + "<p> Name: " + userName + "</p>" 
                                                     + receipt + "<br>" + " <p> Total: $" + total + "</p>" 
                                                     + "<br>" + "<p> Money paid: $" + userMoney + "</p>" +
                                                     "<p> Change: $" + userChange + "</p>";
}
//function allows the user to erase their order and start over
function resetOrder(){
    total = 0;
    userOrder = [];
    userMoney = 0;
    document.getElementById("userOrder").innerHTML = "";
    document.getElementById("receiptOutput").innerHTML = "";
    document.getElementById("userTotal").innerHTML = "TOTAL: 0";

}













