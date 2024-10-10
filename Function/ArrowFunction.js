const user= {
     userName:"Ravi",
     price:12345,
     welcomeMessage:function(){
         console.log(`welcome ${this.userName}`)//welcome Ravi
         console.log(this);
        //  {
        //     userName: 'Ravi',
        //     price: 12345,
        //     welcomeMessage: [Function: welcomeMessage]
        //   }
     }   
}
user.welcomeMessage();
console.log(this);//{}
//this can be used to make the current context

function one(){
    const userName= " Ravi "
    console.log(this.userName);//undefined
    // console.log(this);
    // <ref *1> Object [global] {
    //     global: [Circular *1],
    //     clearImmediate: [Function: clearImmediate],
    //     setImmediate: [Function: setImmediate] {
    //       [Symbol(nodejs.util.promisify.custom)]: [Getter]
    //     },
    //     clearInterval: [Function: clearInterval],
    //     clearTimeout: [Function: clearTimeout],
    //     setInterval: [Function: setInterval],
    //     setTimeout: [Function: setTimeout] {
    //       [Symbol(nodejs.util.promisify.custom)]: [Getter]
    //     },
    //     queueMicrotask: [Function: queueMicrotask],
    //     structuredClone: [Function: structuredClone],
    //     atob: [Getter/Setter],
    //     btoa: [Getter/Setter],
    //     performance: [Getter/Setter],
    //     fetch: [Function: fetch],
    //     navigator: [Getter],
    //     crypto: [Getter]
    //   }
}
one();

const two = ()=>{
    const userName1= " Ravi "
    console.log(this.userName1);//undefined
    console.log(this);//{}
}
two();

//++++++++++++++++++++++++++++++++++++++++++++++++++++++ Arrow Function +++++++++++++++++++++++++++++++++++++++++++++++
const addTwo = (n1,n2)=>{
        return n1+n2;
}
console.log(addTwo(10,20));//30. explicit 

const addThree = (n1,n2,n3)=> n1+n2+n3;
console.log(addThree(12,14,18)); //44.      implicite

const addOne = (n1,n2,n3)=>(
    n1+n2+n3
);
console.log(addOne(12,14,18));//44
