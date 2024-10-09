//Singleton Object
const user = new Object();
user.id = 123;
user.name = "Ravi";
user.age = 25;
user.city = "Ballia";
user.state = "Uttar-Pradesh";
//console.log(user);
// {
//     id: 123,
//     name: 'Ravi',
//     age: 25,
//     city: 'Ballia',
//     state: 'Uttar-Pradesh'
//   }

const regularUser = {
    email:"ravi@gmail.com",
    fullName:{
        userName:{
            firstName:"Ravi",
            lastName:"Kushwaha",
            userAge:{
                age:25
            }
        }
    }
};
// console.log(regularUser);
//{
//     email: 'ravi@gmail.com',
//     fullName: {
//       userName: { firstName: 'Ravi', lastName: 'Kushwaha', userAge: [Object] }
//     }
//   }
// console.log(regularUser.email);//ravi@gmail.com
// console.log(regularUser.fullName);
// {
//     userName: { firstName: 'Ravi', lastName: 'Kushwaha', userAge: { age: 25 } }
//   }
// console.log(regularUser.fullName.userName);//{ firstName: 'Ravi', lastName: 'Kushwaha', userAge: { age: 25 } }
// console.log(regularUser.fullName.userName.firstName);//Ravi
// console.log(regularUser.fullName.userName.lastName);//Kushwaha
// console.log(regularUser.fullName.userName.userAge);//{ age: 25 }
// console.log(regularUser.fullName.userName.userAge.age);//25
  


const obj1={
    1:'a',
    2:'b'
}
const obj2={
    3:'a',
    4:'b'
}
const obj3={
    5:'a',
    6:'b'
}
//assign
// Copy the values of all of the enumerable own properties from one or more source objects to a target object. 
// Returns the target object.
// @param target — The target object to copy to.
// @param source1 — The first source object from which to copy properties.
// @param source2 — The second source object from which to copy properties.

// const obj4= Object.assign({},obj1,obj2,obj3);
// console.log(obj4);//{ '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }

//spread

const obj5 = {...obj1,...obj2,...obj3};
//console.log(obj5);//{ '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }

const users = [
    {
        id:1,
        name:"ravi",
        email:"ravi@gmail.com"
    },{
        id:2,
        name:"ravi1",
        email:"ravi1@gmail.com"
    },{
        id:3,
        name:"ravi3",
        email:"ravi3@gmail.com"
    },{
        id:4,
        name:"ravi4",
        email:"ravi4@gmail.com"
    },{
        id:5,
        name:"ravi5",
        email:"ravi5@gmail.com"
    },{
        id:6,
        name:"ravi6",
        email:"ravi6@gmail.com"
    }
]
// console.log(users[0]);//{ id: 1, name: 'ravi', email: 'ravi@gmail.com' }
// console.log(users[0].id);//1
// console.log(users[0].name);//ravi
// console.log(users[0].email);//ravi@gmail.com

//map()
// Calls a defined callback function on each element of an array, and returns an array that contains the results.
// @param callbackfn — A function that accepts up to three arguments. 
// The map method calls the callbackfn function one time for each element in the array.
// @param thisArg — An object to which the this keyword can refer in the callbackfn function. 
// If thisArg is omitted, undefined is used as the this value.
users.map((item)=>{
console.log(item);
})
// { id: 1, name: 'ravi', email: 'ravi@gmail.com' }
// { id: 2, name: 'ravi1', email: 'ravi1@gmail.com' }
// { id: 3, name: 'ravi3', email: 'ravi3@gmail.com' }
// { id: 4, name: 'ravi4', email: 'ravi4@gmail.com' }
// { id: 5, name: 'ravi5', email: 'ravi5@gmail.com' }
// { id: 6, name: 'ravi6', email: 'ravi6@gmail.com' }

users.map((item)=>{
    console.log("id:",item.id);
    console.log("name:",item.name);
    console.log("email:",item.email);
    })
    // id: 1
    // name: ravi
    // email: ravi@gmail.com
    // id: 2
    // name: ravi1
    // email: ravi1@gmail.com
    // id: 3
    // name: ravi3
    // email: ravi3@gmail.com
    // id: 4
    // name: ravi4
    // email: ravi4@gmail.com
    // id: 5
    // name: ravi5
    // email: ravi5@gmail.com
    // id: 6
    // name: ravi6
    // email: ravi6@gmail.com