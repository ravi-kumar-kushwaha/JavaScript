// function cartPrice(num1,num2,...num){
//     console.groupCollapsed(`num1:${num1} and num2:${num2}`);  //num1:10 and num2:20
//     return num;
// }
// console.log(cartPrice(10,20,30,40,50,60,70));//[ 30, 40, 50, 60, 70 ]


//write function to find total cart price
function totalCartPrice(...nums){
    let item = [];
    let cartPrice = 0;
    for(let num of nums){
        item.push(num);
        cartPrice+=num;
    }
    console.log(`item in cart ${item}`);  //item in cart [10,20,30,40,50,60,70,80];
    return cartPrice;
   
}
console.log("Total Cart price is: ",totalCartPrice(10,20,30,40,50,60,70,80));  //Total Cart price is:  360


//objects in function

const user = {
    name:"Ravi Kumar Kushwaha",
    email:"ravi@gmail.com",
    password:"ravi@1234"
}
function findUserDetail(anyObject){
    console.log(`my name is ${anyObject.name} and my email is ${anyObject.email} and password is ${anyObject.password}`);
    //my name is Ravi Kumar Kushwaha and my email is ravi@gmail.com and password is ravi@1234
}
findUserDetail(user);

//Array in object
const newArray = [10,20,30,40,50];

function returnEachElementOfnewArray(anyArray){
    console.log("Each element of array is");
    let cartprice=0;
              for(array of anyArray){
                console.log(array);
                // Each element of array is
                //                         10
                //                         20
                //                         30
                //                         40
                //                         50
                cartprice+=array;
              }
              console.log("Total Cart Price is:",cartprice);//Total Cart Price is: 150
}
returnEachElementOfnewArray(newArray);