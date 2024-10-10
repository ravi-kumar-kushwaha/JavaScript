//1:-globle execution context -{}
 // 1.1:-memory creation phase:-place alocated for variable which is decleared by us
 //1.2:-execution phase:-In this phase we perform the logica operation like arithmetic operation
 let value1=10;
 let value2=20;
 function addtwoNo(n1,n2){
let sum = n1+n2;
return sum;
 }
 let res1 = addtwoNo(value1,value2);
 console.log(res1);//30
 let res2 = addtwoNo(5,3);
 console.log(res2);//8
 //1-globle execution :-it is alocated by this keyword
 //cycle one
 //1.1-memory creation phase:-
 //value1=undefined
 //value2=undefined
 
 //addtwoNo:-function defination
 //res1=undefined
 //res2=undefined

 //cycle2
 //1.2:-execution phase:-
 //value1=10
 //value2=20
 //addtwoNo:- new variable enviornment + execution thread
//res1=undefined
 //res2=undefined
 //addtwoNo:- new variable enviornment + execution thread
 //memory creation phase:-
 //value1=undefined
 //value2=undefined
 //sum = undefined

 //execution phase:-
 //n1=10
 //n2=20
 //sum = 30 return it on globale execution phase
 //res1=30
 //res2=undefined :-here we perform operation same as res1 after it assign the value of sum to res2=8;
//2:-function execution context
//3:-eval execution context:-it is the property of globale execution context


//collstack