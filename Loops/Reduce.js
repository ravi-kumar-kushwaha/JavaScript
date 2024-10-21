const numbers = [1,2,3,4,5,6,7,8,9];
const mynum = numbers.reduce((acc,curr)=>{
    console.log(`acc:${acc} and curr ${curr}`);
    /*
        acc:0 and curr 1
        acc:1 and curr 2
        acc:3 and curr 3
        acc:6 and curr 4
        acc:10 and curr 5
        acc:15 and curr 6
        acc:21 and curr 7
        acc:28 and curr 8
        acc:36 and curr 9
     */
    
   return acc=acc+curr;
},0)
console.log(mynum);  //45


const shopingCart = [
    {
        product:'tv',
        price:20000
    },{
        product:'mobile',
        price:150000
    },{
        product:'ipad',
        price:99000
    }
]
const total = shopingCart.reduce((acc,item)=>acc+item.price,0);
console.log(`total cart value is ${total} `);
//total cart value is 269000 
