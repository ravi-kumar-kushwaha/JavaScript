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