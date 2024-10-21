const languages = {
    'js':'javaScript',
    'cpp':'c++',
    "java":'java',
    'py':'python',
    'rb':"rubby",
    'swwift':'swift by apple'
}

for (key in languages){
console.log(key);

}
/**
js
cpp
java
py
rb
swwift
 */
// print key value pair
for (key in languages){
    console.log(`${key} for ${languages[key]}`);
}
/**
    js for javaScript
    cpp for c++
    java for java
    py for python
    rb for rubby
    swwift for swift by apple
 */
//print index
const programing = ['c','c++','python','java','javaScript'];

for(lan in programing){
    console.log(`${lan}`);
   }
   /*
    0
    1
    2
    3
    4
   */
//print key value pair
    for(lan in programing){
     console.log(`${programing[lan]}  at index ${lan}`);
    }
    /*
    c  at index 0
    c++  at index 1
    python  at index 2
    java  at index 3
    javaScript  at index 4
    */