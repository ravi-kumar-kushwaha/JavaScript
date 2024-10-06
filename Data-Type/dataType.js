//primitive 7 types both are call by value type
// 1-String
// 2-Number
// const number = 100;
// 3-boolean
// const isloggedIn = false;
// 4-Null
// 5-undefined
// const Name;
6-Symbol
const id = Symbol('1234');
const id1 = Symbol('1234');
console.log(id===id1);//false
7-BigInt
let number= 123456789099876543n;
//non premitive coll by reference type -we can directly alocate the space on memory
1-Array
const heros = ["ironman","thor","spiderman"];
console.log(heros);//[ 'ironman', 'thor', 'spiderman' ]
console.log(typeof(heros));//object
2-Object
const student = {
    name:'Ravi',
    age:25
}
console.log(student)//{ name: 'Ravi', age: 25 }
console.log(typeof(student));//object
3-Function
const sum = function(n,m) {
    console.log(n+m);
}
    sum(10,20);//30
    console.log(typeof(sum));//function