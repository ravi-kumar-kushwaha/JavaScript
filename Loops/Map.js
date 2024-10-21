const num = [1,2,3,4,5,6,7,8,9];
const number = num.map((item)=>{
    return item+10;
})
console.log(number);//[11, 12, 13, 14, 15,16, 17, 18, 19]


//using forEach
num.forEach((item)=>{
    console.log(item+20);
})
/*
21
22
23
24
25
26
27
28
29
*/

const num1 = num.map((item)=>item*10).map((item)=>item+2);
console.log(num1); //[12, 22, 32, 42, 52,62, 72, 82, 92]
