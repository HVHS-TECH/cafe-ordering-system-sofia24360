/***********************************
Name: Ordering System
***********************************/



//Variables
let userArray

/**********************************
 Main code
**********************************/

const OUTPUT = document.getElementById("spaceForJavaScriptOutput")
getFormInput()





/***********************************
 Functions
***********************************/

getFormInput(){
    var itemsArray = [
    {
        name:"Brownies",
        price:12
    },
    {
        name:"Egg Tart"
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
    let choice = ITEM_FIELD.value
    OUTPUT.innerHTML += QUANTITY_FIELD.value + "x " + itemsArray[choice] + "<br>"
    

}