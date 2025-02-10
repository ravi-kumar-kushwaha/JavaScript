const name = "Ravi Kumar Kushwaha";
for(char in name){
    console.log(char);
}
/*
0
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
*/
for(char of name){
    console.log(char);
}
/*
R
a
v
i
 
K
u
m
a
r
 
K
u
s
h
w
a
h
a
*/

console.log(name.indexOf('Kumar'));//5
console.log(name.indexOf('Ravi'));//0
console.log(name.indexOf('Kushwaha'));//11

const text = Array.from(name); //convert string into array
console.log(text);
//['R', 'a', 'v', 'i', ' ','K', 'u', 'm', 'a', 'r',' ', 'K', 'u', 's', 'h','w', 'a', 'h', 'a']

text.forEach((curr,index,arr)=>{
    console.log(`${curr} ${index}`);
    
})
/*
R 0
a 1
v 2
i 3
  4
K 5
u 6
m 7
a 8
r 9
  10
K 11
u 12
s 13
h 14
w 15
a 16
h 17
a 18
*/

const str = text.map((curr,index)=>{
    return `${curr} - ${index}`
})
console.log(str);
/*
[
  'R - 0',  'a - 1',  'v - 2',
  'i - 3',  '  - 4',  'K - 5',
  'u - 6',  'm - 7',  'a - 8',
  'r - 9',  '  - 10', 'K - 11',
  'u - 12', 's - 13', 'h - 14',
  'w - 15', 'a - 16', 'h - 17',
  'a - 18'
]
*/
console.log(name.indexOf("K"));//5

console.log(name.lastIndexOf('K'));//11
console.log(name.search(/kumar/i));//5
console.log(name.match("kumar"));//null

console.log(name.match("Kumar"));//[ 'Kumar', index: 5, input: 'Ravi Kumar Kushwaha', groups: undefined ]