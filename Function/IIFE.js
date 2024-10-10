//Immediately Invoked Function Expressions (IIFE):-global scope ke polution se kai bar problem hoti hai to us globle  scope ke polution ko htane ke liye IIFE ka use kiya jata hai;

//using normal function it is also known as named IIFE
(
    function DatabaseConnection(){
        console.log("Data base connected Successfully");
        // Data base connected Successfully
    }
)();

//using arrow function
((name)=>{
    console.log(`Data base connected to ${name} Successfully`);//Data base connected to Server Successfully
})("Server");