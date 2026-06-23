/***********************************
Name: Ordering System
***********************************/
console.log("Running ordering system");



//Variables
let userArray
let itemsArray = [ 
    {
        name:"Brownies",
        price:12
    },
    {
        name:"Egg Tart",
        price:5
    },
    {
        name:"Strawberry Cream Tart",
        price:6
    },
    {
        name:"Palmiers",
        price:10
    }
    ]

/**********************************
 Main code
**********************************/

const OUTPUT = document.getElementById("spaceForJavaScriptOutput")
const ITEM_FIELD = document.getElementById("itemField")
const QUANTITY_FIELD = document.getElementById("quantityField")





/***********************************
 Functions
***********************************/
let userArray
function getFormInput(){
    let choice = ITEM_FIELD.value
    userArray.push(choice)
    let qty = QUANTITY_FIELD.value
    OUTPUT.innerHTML += qty + "x " + userArray + 
}