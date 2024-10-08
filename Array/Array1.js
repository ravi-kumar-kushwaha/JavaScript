const Marvel_heroes = ["IronMan","Thor","SpiderMan","AntMan"];
const Dc_Heroes = ["Flash","Batman"];

//Push
Marvel_heroes.push(Dc_Heroes);
console.log(Marvel_heroes);//[ 'IronMan', 'Thor', 'SpiderMan', 'AntMan', [ 'Flash', 'Batman' ] ]
console.log(Marvel_heroes[4]);//[ 'Flash', 'Batman' ]
console.log(Marvel_heroes[4][0]);//Flash

//concat:>
/*(method) Array<string>.concat(...items: ConcatArray<string>[]): string[] (+1 overload)
Combines two or more arrays. This method returns a new array without modifying any existing arrays.

@param items — Additional arrays and/or items to add to the end of the array.
*/
const AllHeroes = Marvel_heroes.concat(Dc_Heroes);
console.log( AllHeroes);//[ 'IronMan', 'Thor', 'SpiderMan', 'AntMan', 'Flash', 'Batman' ]
console.log( AllHeroes[4]);//Flash
console.log( AllHeroes[4][0]);//F

//spread
const AllNew_Heroes = [...Marvel_heroes,...Dc_Heroes];
console.log(AllNew_Heroes);//[ 'IronMan', 'Thor', 'SpiderMan', 'AntMan', 'Flash', 'Batman' ]

//flate:>
/**
      (method) Array<number | (number | number[])[]>.flat<(number | (number | number[])[])[],
       number>(this: (number | (number | number[])[])[], depth?: number | undefined): FlatArray<number 
       | (number | number[])[], 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 11 | 13 | ... 9 more ... | 20>[]
Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
@param depth — The maximum recursion depth
 */
const Another_arr = [1,2,3,4,[5,6,7],4,[8,7,6,5,[9,11,13,2]]];
const real_arr = Another_arr.flat(Infinity);
console.log(real_arr);//[ 1,  2,  3, 4, 5, 6, 7,  4,  8, 7, 6, 5, 9, 11, 13, 2 ]

//isArray
//console.log(Array.isArray("Ravi"));//false

//Array.from
/**
    (method) ArrayConstructor.from<string>(iterable: 
    Iterable<string> | ArrayLike<string>): string[] (+3 overloads)
Creates an array from an iterable object.
@param iterable — An iterable object to convert to an array.
 */
console.log(Array.from("Ravi"));//[ 'R', 'a', 'v', 'i' ]
//

//of
/*
(method) ArrayConstructor.of<number>(...items: number[]): number[]
Returns a new array from a set of elements.
@param items — A set of elements to include in the new array object.
*/
let score1=140;
let score2=150;
let score3=160;
let score4=170;
console.log(Array.of(score1,score2,score3,score4));//[ 140, 150, 160, 170 ]
