//singleton

//object literals
const user = {
    name:"Ravi Kumar Kushwaha",
    age:25,
    location:"Ballia",
    email:"ravi@gmail.com",
    islogin:false,
    lastloginDays:["Monday","friday"]
}
// console.log(user.name);//Ravi Kumar Kushwaha
// console.log(user['name']);//Ravi Kumar Kushwaha
// console.log(user);
/**
     {
  name: 'Ravi Kumar Kushwaha',
  age: 25,
  location: 'Ballia',
  email: 'ravi@gmail.com',
  islogin: false,
  lastloginDays: [ 'Monday', 'friday' ]
}
 */
console.log(user.email="virat@gmail.com");//virat@gmail.com
console.log(user);
/**
    {
  name: 'Ravi Kumar Kushwaha',
  age: 25,
  location: 'Ballia',
  email: 'virat@gmail.com',
  islogin: false,
  lastloginDays: [ 'Monday', 'friday' ]
}
 */

//freeze
/**
Prevents the modification of existing property attributes and values, and prevents the addition of new properties.
@param o — Object on which to lock the attributes.
 */
// Object.freeze(user);
// console.log(user.name="Virat Verma");//Virat Verma
// console.log(user);
/**
   {
  name: 'Ravi Kumar Kushwaha',
  age: 25,
  location: 'Ballia',
  email: 'virat@gmail.com',
  islogin: false,
  lastloginDays: [ 'Monday', 'friday' ]
}
 */
 user.greet = function(){
  console.log('Hello Java Script Users!')
}
console.log(user.greet());//Hello Java Script Users!
console.log(user);
// {
//   name: 'Ravi Kumar Kushwaha',
//   age: 25,
//   location: 'Ballia',
//   email: 'virat@gmail.com',
//   islogin: false,
//   lastloginDays: [ 'Monday', 'friday' ],
//   greet: [Function (anonymous)]
// }

user.greetTwo = function(){
  console.log(`Hello Java Script Users! ${user.name}`)
}
console.log(user.greetTwo());//Hello Java Script Users! Ravi Kumar Kushwaha
console.log(user);
// {
//   name: 'Ravi Kumar Kushwaha',
//   age: 25,
//   location: 'Ballia',
//   email: 'virat@gmail.com',
//   islogin: false,
//   lastloginDays: [ 'Monday', 'friday' ],
//   greet: [Function (anonymous)],
//   greetTwo: [Function (anonymous)]
// }
