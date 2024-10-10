//add two numbers
function addTwoNumbers(num1,num2=30){
    let sum = num1+num2;
    console.log(`Sum of ${num1} and ${num2} is ${sum}`);  //Sum of 10 and 20 is 30
}
let result = addTwoNumbers(10,20);  
console.log("Result ", result); //Result  undefined   

function addTwoNumber(num1,num2=30){
    let sum = num1+num2;
    console.log(`Sum of ${num1} and ${num2} is ${sum}`);  //Sum of 10 and 20 is 30
    return sum;
}
let result1 = addTwoNumber(10,20);  
console.log("Result ", result1);  //Result  30
function loggedInUser (userName){
    return `Welcome back ${userName}`;
}
console.log(loggedInUser());//Welcome back undefined

function loggedInUser (userName){
    return `Welcome back ${userName}`;
}
console.log(loggedInUser(""));//Welcome back 

function loggedInUser (userName){
    if(!userName){  
        return "userName is required please enter username!";
    }
    return `Welcome back ${userName}`;
}
console.log(loggedInUser());  //userName is required please enter username!

function loggedInUser (userName = "Ravi Kumar!"){
        return `Welcome back ${userName}`;
    }
    console.log(loggedInUser());  //Welcome back Ravi Kumar!


function loggedInUser (userName){
    return `Welcome back ${userName}`;
}
console.log(loggedInUser("Ravi Kumar!")); //Welcome back Ravi Kumar!