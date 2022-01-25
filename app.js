//Variables store information
// let name = "Kaleb"
// let lName = "Glodowski"
// let fName = name+" "+lName;

//user input variables
// let name = prompt("What is your name?");
// let lName = prompt("What is your last name?");
// let fName = name+" "+lName:

//write value of variables to the web page

//variables for numbers

let bill = Number(prompt("Please enter your bill.")); //putting Number prior to prompt is declaring result as a number instead of string

let billTax = bill*0.07; //Declaring variable of tax
let billWithTax = billTax+bill; //Declaring variable of total price of bill not including tip
let billTip = billWithTax*0.05; //Declaring variable for the tip based off of bill with tax
let billTotal = billTip+billWithTax;

// let totalPrice = (number1+number2)-((number1+number2)*0.3); //same as above


//write value of variables to the web page

//writing for the strings

//document.body.innerHTNML=fName;

//writing for numbers

document.body.innerHTML=billTotal;



