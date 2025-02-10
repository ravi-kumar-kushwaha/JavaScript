const persons = ["ravi", "vishal", "tarun", "akash"];

console.log(persons.at(-1));//akash
console.log(persons[-1]); //undefined

//useing array constructor
let fruits = new Array("apple", "mango", "orange");
console.log(("fruits:", fruits));//[ 'apple', 'mango', 'orange' ]

//using array litrals
const fruit = ['apple', 'mango', 'orange'];
console.log("fruits:", fruit);//ruits: [ 'apple', 'mango', 'orange' ]
console.log(fruit[1]);//mango

fruit[3] = "banana";
console.log(fruit);//[ 'apple', 'mango', 'orange', 'banana' ]

//for of loop
for (fruits of fruit) {
    console.log("fruits:", fruits);
}
/*
 fruits: apple
fruits: mango
fruits: orange
fruits: banana
 */

for(item in fruit){
    console.log(item);
    
}
/*
0
1
2
3
*/

fruit.forEach((currEle,index,arr)=>{
console.log(`${currEle} ${index}`);
})
/*
apple 0
mango 1
orange 2
banana 3
for each never return any value
*/

fruit.map((item)=>{
    console.log(item);
})
/*
apple
mango
orange
banana
*/

const fruitsArray = fruit.map((currEle,index,arr)=>{
    return`${currEle} ${index}`;
})
console.log(fruitsArray);//[ 'apple 0', 'mango 1', 'orange 2', 'banana 3' ]
//wap to multiply each element by 2

const number = [1,2,3,4,5];
number.map((item)=>console.log(item*2)
)
/*
2
4
6
8
10
*/

number.forEach((item)=>console.log(item*3)
)
/*
3
6
9
12
15
 */

// searching in an array

//for search we have indexOf,lastIndexOf, and includes

const numbers = [1,2,3,4,5,6,7,8,9,3,3];
console.log(numbers.indexOf(3));//2
console.log(numbers.includes(3));//true
console.log(numbers.lastIndexOf(3));//10

//filter
const filterdItem = numbers.filter((item)=>{ 
    return item%2 === 0 ;
}
)
console.log("filterdItem:",filterdItem);//filterdItem: [ 2, 4, 6, 8 ]

let value = 7;
const updatedNumbers = numbers.filter((item)=>{
  return  item === value
});
console.log("updatedNumbers:",updatedNumbers);//updatedNumbers: [ 7 ]

const updatedNumber = numbers.filter((item)=>{
    return  item !== value
  });
  console.log("updatedNumbers:",updatedNumber);//updatedNumbers: [1, 2, 3, 4, 5, 6, 8, 9, 3, 3]
//find
 const find = numbers.find((item)=>{
    return item > 8;
 });
 console.log("find:",find);//find: 9

 //findIndex
 const result = numbers.findIndex((item)=>{
    return item > 8;
 });
 console.log("result:",result);//result: 8
 
 //practice questions
 /*
 1-given an array of products where each product has a name and price ,
  write a function that uses the filter method to return an array conatining only 
  the products with a price less than or equal to 500.
 */
const products = [
    {name:"Laptop",price:1200},
    {name:"Phone",price:800},
    {name:"Tablet",price:300},
    {name:"SmartWatch",price:150}
]

const product = products.filter((item)=>{
    return item.price >= 500;
});
console.log("products with price greater than 500 :",product);
//products with price greater than 500 : [ { name: 'Laptop', price: 1200 }, { name: 'Phone', price: 800 } ]

// filter unique value

const numbers1 = [1,2,3,4,5,6,7,8,6,8,9];
let uniqueValue = numbers1.filter((curr,index,arr)=>{
    // console.log(index);
    // console.log(arr.indexOf(curr)); 
    return arr.indexOf(curr) === index;
})

console.log("uniqueValue:",uniqueValue);//uniqueValue: [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

//another way using set method

const uniqueNumber = ([...new Set(numbers1)]);
console.log("uniqueNumber: ",uniqueNumber);//uniqueNumber:  [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

//sort and compare

const fruit1 = ["apple","mango","banana"];
console.log(fruit1.sort());//[ 'apple', 'banana', 'mango' ]


const numbers2 = [1,2,3,4,5,6,7,8,6,8,9,11,12,14,13];
console.log(numbers2.sort((a,b)=>a-b));//[ 1,  2,  3, 4, 5,  6, 6,  7,  8, 8, 9, 11, 12, 13, 14 ]
//ascending order
const sort1 = numbers2.sort((a,b)=>{
    if(a>b) return 1
    if(a<b) return -1
});
console.log("sort:",sort1);//sort: [ 1,  2,  3, 4, 5,  6, 6,  7,  8, 8, 9, 11, 12, 13, 14 ]

//descending order
const sort2 = numbers2.sort((a,b)=>{
    if(a>b) return -1
    if(a<b) return 1
 })
console.log("sort2 : ",sort2);//sort2 :  [ 14, 13, 12, 11, 9, 8, 8,  7,  6,  6, 5, 4, 3,  2,  1 ]

const removeDuplicate = numbers2.filter((curr,index,arr)=>{
    return arr.indexOf(curr) === index
})
console.log("uni :",removeDuplicate); //uni : [ 1, 2, 3,  4,  5,  6, 7, 8, 9, 11, 12, 13, 14 ]

//reduce

const TotalSum = numbers2.reduce((acc,curr)=>{
    return acc+curr
},0);

console.log("TotalSum : ",TotalSum); //TotalSum :  109

const products1 = [
    {name:"Laptop",price:1200},
    {name:"Phone",price:800},
    {name:"Tablet",price:300},
    {name:"SmartWatch",price:150}
]
const totalCartPrice = products1.reduce((acc,curr)=>{
    return acc + curr.price;
},0);
console.log("total cart price is :",totalCartPrice);//total cart price is : 2450

const products2 = [
    {name:"Laptop",price:1200,quantity:2},
    {name:"Phone",price:800,quantity:5},
    {name:"Tablet",price:300,quantity:3},
    {name:"SmartWatch",price:150,quantity:4}
]
const TotalCartPrice = products2.reduce((acc,curr)=>{
    return acc + (curr.price*curr.quantity);
},0);
console.log("total cart price is :",TotalCartPrice);//total cart price is : 7900


//square each number of the array
const numbers3 = [1,2,3,4,5,6,7,8,6,8,9,11,12,14,13];
const square = numbers3.map((item)=> item*item);
console.log("Square : ",square);//Square :  [ 1,   4,   9, 16, 25,  36, 49,  64,  36, 64, 81, 121, 144, 196, 169 ]

//convert string to uppercase
const str = ["apple","mango","banana"];
const uppercase = str.map((item) => item.toUpperCase());
console.log("uppercase : ",uppercase);//uppercase :  [ 'APPLE', 'MANGO', 'BANANA' ]

//find the square of all the even number of the given array

const number2 = [1,2,3,4,5,6,7];
const squares = number2.map((item)=>{
    if(item%2===0){
        return item*item
    }
}).filter((item)=>item%2 ===0 )
console.log("squares : ",squares);//squares :  [ 4, 16, 36 ]

//using the map method waf that takes an array of names and returns a new array where each name is prefixed with "Mr."
const name = ["Rudra","Virat","Sachin"]
const result2 = name.map((item)=>{
    return `Mr. ${item}`
})
console.log("result : ",result2);//result :  [ 'Mr. Rudra', 'Mr. Virat', 'Mr. Sachin' ]
