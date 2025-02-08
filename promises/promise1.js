const promiseOne = new Promise((resolve,reject)=>{
    setTimeout(()=>{
    console.log("async promise is completed");
    resolve();
},1000)
   
});

promiseOne.then(()=>{
    console.log("promise resolved successfully!");
}).catch((error)=>{
   console.log("promise is rejected!");
   
});

//promise 2
new Promise((resolve, reject) => {
    setTimeout(()=>{
    console.log("promise resolved successfully!");
    resolve();
    },1000)
}).then(()=>{
    console.log("promise completed!");
}).catch(()=>{
    console.log("promise is rejected!");
    
})

//promise 3
const promises3 = new Promise((resolve, reject) => {
    setTimeout(()=>{
     resolve({name:"Arun kumar",email:"arunkumar@gmail.com"});
    },1000);
});
promises3.then((user)=>{
    console.log(user);
    console.log("name:",user.name);
    console.log("email:",user.email);
}).catch(()=>{
    console.log("promise is rejected");
});

//promise 4
const promise4 = new Promise((resolve, reject) => {
    setTimeout(()=>{
     const error = true;
     if(!error){
        resolve({name:"Virat",email:"virat12@gmail.com"});
     }else{
        console.log("Some thing went wrong");
     }
    },1000)
});

promise4.then((user)=>{
return user.name;
}).then((name)=>{
    console.log(name);
}).catch((error)=>{
    console.log("something went wrong",error);
}).finally(()=>{
    console.log("finally either promise is resolve or rejected!");
});

//promise 5
const promise5 = new Promise((resolve, reject) => {
    setTimeout(()=>{
       const error = true;
       if(!error){
        resolve({name:"akash",email:"akash123@gmail.com"});
       }else{
        reject("Error Something went wrong");
       }
    },1000)
})

async function promiseConsumed(){
    try {
     const response = await promise5 
      console.log("response:",response);
      console.log("name:",response.name + " email :",response.email);
      
    } catch (error) {
        console.log("Something Went Wrong!");
        
    }
}
promiseConsumed();


//promise 6

const getAllUsers = async()=>{
try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    console.log(data);
} catch (error) {
    console.log("Something while wrong when fetching the uasers data!");
}
}
getAllUsers();


//promise 6

fetch('https://jsonplaceholder.typicode.com/users').then((response)=>{
    return response.json();
}).then((data)=>{
console.log("data",data);

}).catch(()=>{
    console.log(error);
})