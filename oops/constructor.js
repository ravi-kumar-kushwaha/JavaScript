const user = function(name,email,password,isloggedIn){
    this.name = name,
    this.email = email,
    this.password = password,
    this.isloggedIn = isloggedIn
    return this
}
const userOne = new user("Ravi","ravi@gmail.com","123456",true);
console.log("userOne:",userOne);
const userTwo = new user("Abhijishya","abhijishya@gmail.com","123456",false);
console.log("userTwo:",userTwo);


//new when we use the new key word then a empty instance is created that means a new object is created