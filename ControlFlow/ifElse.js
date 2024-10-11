let temp = 50;
if(temp<=50){
    console.log("temprature is less thean or equal to 50");//temprature is less thean or equal to 50
}else{
    console.log("temprature is not less thean or equal to 50");
    
}

const score = 500;
if (score>450) {
    console.log("you can fly");//you can fly
    
} else {
    console.log("you can't fly");
    
}

const balance = 100;
if(balance==100) console.log("your balance is rs 100");//your balance is rs 100
//never write code like this
if(balance==100) console.log("your balance is rs 100"),
console.log("you can buy something!");
//your balance is rs 100
//you can buy something!

const userloggedIn = true;
const debitCard = true;
if(userloggedIn && debitCard){
    console.log("login successfully to our website");//login successfully to our website
}else{
    console.log("can't login");
    
}
