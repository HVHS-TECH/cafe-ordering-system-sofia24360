/***********************************
Name: Ordering System
***********************************/



//Variables
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


/**********************************
 Main code
**********************************/








/***********************************
 Functions
***********************************/

getFormInput(){
    let choice = ITEM_FIELD.value
    let userArray = [choice]
    OUTPUT.innerHTML = QUANTITY_FIELD.value + "x " + itemsArray[choice] + "<br>"
    

}