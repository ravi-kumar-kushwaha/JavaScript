const user = {
    name:"Ravi Kumar Kushwaha",
    email:"ravi@gmail.com",
    greet:function(){
        console.log(`Hello ${this.name} Welcome to javaScript Series!`);
        console.log(this);//this returns the current context 
    }
}
console.log(user.greet());
console.log(this);//it is used to return the global context

