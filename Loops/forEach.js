const programmingLanguages = ['c','c++','java','python','javaScript'];
console.log(programmingLanguages);  //[ 'c', 'c++', 'java', 'python', 'javaScript' ]

programmingLanguages.forEach((item)=>{
console.log(item);
})
/**
    c
    c++
    java
    python
    javaScript
 */
    programmingLanguages.forEach((item , index , arr)=>{
        console.log(`${item} at index  ${index} array is ${ arr}`);
        })
        /**
          c at index  0 array is c,c++,java,python,javaScript
            c++ at index  1 array is c,c++,java,python,javaScript
            java at index  2 array is c,c++,java,python,javaScript
            python at index  3 array is c,c++,java,python,javaScript
            javaScript at index  4 array is c,c++,java,python,javaScript
         */

        const product = [
            {
                name:'mobile',
                price:220
            },
            {
                name:'laptop',
                price:122334567
            },
            {
                name:'tv',
                price:123456
            },
            {
                name:'pen',
                price:125
            },
            {
                name:'book',
                price:1235
            }
        ]
        product.forEach((item)=>{
            console.log(`price of ${item.name} is $${item.price}`);
        })
        /*
        price of mobile is $220
        price of laptop is $122334567
        price of tv is $123456
        price of pen is $125
        price of book is $1235
        */

        const values = programmingLanguages.forEach((item)=>{
            console.log(item);
            return item;
        })
        console.log(values);
        /**
            c
            c++
            java
            python
            javaScript
            undefined
         */