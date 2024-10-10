//scope

let a=20;
const b=30;
if(true){
    let a = 40;
    console.log(a);//40   block scope
    
    const b = 50;
    console.log(b);//50.    block scope
}
console.log(a);//20    globle scope
console.log(b);//30     globle scope


//scope using if else
if(true){
    const userName = "Ravi Kumar KUshwaha";
    if(userName){
        const visit = "welcome to my website!";//welcome to my website!
        console.log(visit);
        
        console.log(userName);//Ravi Kumar KUshwaha
    }
}
