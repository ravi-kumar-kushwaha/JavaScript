const number = new Number(2000);
console.log(number);//[Number: 2000]
console.log(number.toString());//2000
console.log(typeof(number.toString()));//string
console.log(number.toString().length);//4
console.log(number.toFixed(4));//2000.0000
const number1=1234.67689;
console.log(number1.toPrecision(6));//1234.68
 
const num2 = 100000000000;
console.log(num2.toLocaleString("en-IN"));//1,00,00,00,00,000