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

//for og loop
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