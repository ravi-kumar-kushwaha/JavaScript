const userEmail = "ravi@gmail.com";
if(userEmail){
    console.log("user exists!");
    
}else{
    console.log("don't have an account!");
    
}
//user exists!

//falsy value
/*
1->false
2->0
3->-0
4->BigInt 0n
5->""
6->null
7->undefined
8->NaN
else all values are truthy values
*/
//truthy values
//"0"," ",'false',[],{},function(){}

const userEmail1 = [];
if(userEmail1.length===0){
    console.log("array is empty!");
    //array is empty!
}

const emptyObject = {};
if(Object.keys(emptyObject).length===0){
    console.log("object is empty");
    //object is empty
}

//Nullish Coalescing Operator (??):null undefined

let val1;
val1=5??10
console.log(val1);//5
val1 = null??10;
console.log(val1);//10
val1 = undefined??10;
console.log(val1);//10
val1 = undefined??10??15;
console.log(val1);//10


//terniary operator
//condition?true:false
const teaPrice =150;
teaPrice<=140?console.log("less than 140"):console.log("more than 140");
//more than 140