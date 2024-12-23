let array = [1,2,3,4,5,6,7]
for (let index = 1; index <= array.length; index++) {
    const element = array[index];
    console.log(element);
    
}
/*
1
2
3
4
5
6
7
*/

for(let i=0;i<5;i++){
    for(let j=i;j<5;j++){
        console.log("{",i,"  ",j,"}");
        
    }
    console.log(" ");
    
}
/**
     { 0    0 }
{ 0    1 }
{ 0    2 }
{ 0    3 }
{ 0    4 }
 
{ 1    1 }
{ 1    2 }
{ 1    3 }
{ 1    4 }
 
{ 2    2 }
{ 2    3 }
{ 2    4 }
 
{ 3    3 }
{ 3    4 }
 
{ 4    4 }

 */

//print table 1 to 10
for(let i=1;i<=10;i++){
    console.log(`outer loop Table Of ${i} `);
    for(let j=1;j<=10;j++){
        console.log(i+" * "+j+ "  =  "+i*j);
    }
}
/**
 outer loop Table Of 1 
1 * 1  =  1
1 * 2  =  2
1 * 3  =  3
1 * 4  =  4
1 * 5  =  5
1 * 6  =  6
1 * 7  =  7
1 * 8  =  8
1 * 9  =  9
1 * 10  =  10
outer loop Table Of 2 
2 * 1  =  2
2 * 2  =  4
2 * 3  =  6
2 * 4  =  8
2 * 5  =  10
2 * 6  =  12
2 * 7  =  14
2 * 8  =  16
2 * 9  =  18
2 * 10  =  20
outer loop Table Of 3 
3 * 1  =  3
3 * 2  =  6
3 * 3  =  9
3 * 4  =  12
3 * 5  =  15
3 * 6  =  18
3 * 7  =  21
3 * 8  =  24
3 * 9  =  27
3 * 10  =  30
outer loop Table Of 4 
4 * 1  =  4
4 * 2  =  8
4 * 3  =  12
4 * 4  =  16
4 * 5  =  20
4 * 6  =  24
4 * 7  =  28
4 * 8  =  32
4 * 9  =  36
4 * 10  =  40
outer loop Table Of 5 
5 * 1  =  5
5 * 2  =  10
5 * 3  =  15
5 * 4  =  20
5 * 5  =  25
5 * 6  =  30
5 * 7  =  35
5 * 8  =  40
5 * 9  =  45
5 * 10  =  50
outer loop Table Of 6 
6 * 1  =  6
6 * 2  =  12
6 * 3  =  18
6 * 4  =  24
6 * 5  =  30
6 * 6  =  36
6 * 7  =  42
6 * 8  =  48
6 * 9  =  54
6 * 10  =  60
outer loop Table Of 7 
7 * 1  =  7
7 * 2  =  14
7 * 3  =  21
7 * 4  =  28
7 * 5  =  35
7 * 6  =  42
7 * 7  =  49
7 * 8  =  56
7 * 9  =  63
7 * 10  =  70
outer loop Table Of 8 
8 * 1  =  8
8 * 2  =  16
8 * 3  =  24
8 * 4  =  32
8 * 5  =  40
8 * 6  =  48
8 * 7  =  56
8 * 8  =  64
8 * 9  =  72
8 * 10  =  80
outer loop Table Of 9 
9 * 1  =  9
9 * 2  =  18
9 * 3  =  27
9 * 4  =  36
9 * 5  =  45
9 * 6  =  54
9 * 7  =  63
9 * 8  =  72
9 * 9  =  81
9 * 10  =  90
outer loop Table Of 10 
10 * 1  =  10
10 * 2  =  20
10 * 3  =  30
10 * 4  =  40
10 * 5  =  50
10 * 6  =  60
10 * 7  =  70
10 * 8  =  80
10 * 9  =  90
10 * 10  =  100
 */

//Break And Continue

for(let i=1;i<=20;i++){
    if(i==5){
        console.log(`${i} is detected`);
        break;
    }
    console.log(i);
    
}
/**
      1
2
3
4
5 is detected
 */

for(let i=1;i<=20;i++){
    if(i==10){
        console.log(`${i} is detected`);
        continue;
    }
    console.log(i);
}
/**
   1
2
3
4
5
6
7
8
9
10 is detected
11
12
13
14
15
16
17
18
19
20
 */