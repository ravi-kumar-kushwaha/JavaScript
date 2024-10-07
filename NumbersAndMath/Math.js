console.log(Math);//Object [Math] {}
console.log(Math.abs(-12.234));//12.234
console.log(Math.ceil(4.4));//5
console.log(Math.round(4.4));//4
console.log(Math.floor(4.4));//4
console.log(Math.min(2,3,7,1,9,7,6));//1
console.log(Math.max(2,3,7,1,9,7,6));//9

//print the number between 1 to 6
console.log(Math.floor(Math.random()*6)+1);

//print the number between 10 to 20
const max=20;
const min=10;
console.log(Math.floor(Math.random()*(max-min+1))+min);