//++++++++++++++++++++++++++++++Array+++++++++++++++++++++++++++++++++++++++++++++
const myArr = [1,2,3,4,5,6];
console.log(myArr);//[ 1, 2, 3, 4, 5, 6 ]
console.log(myArr.push(7));//7.      //Add element on the last index of the array
console.log(myArr);//[1, 2, 3, 4, 5, 6, 7]
myArr.pop();//remove element on the last index of the array
console.log(myArr);//[ 1, 2, 3, 4, 5, 6 ]
myArr.unshift(0);//add element in first index of the array
console.log(myArr);//[ 0, 1, 2, 3, 4, 5, 6]
myArr.shift();//remove fisrt element of the array
console.log(myArr);//[ 1, 2, 3, 4, 5, 6 ]
console.log(myArr.includes(6));//used to check element is exists on the array or not
//true
console.log(myArr.indexOf(6));//check the index of the given element
//5
const newArr = myArr.join();//use to conver the elements of the array in string type
console.log(newArr);//1,2,3,4,5,6
console.log(typeof(newArr));//string
const myArr2 = new Array(1,2,3,4,5,6,7,8,9);
console.log(myArr2);//[1, 2, 3, 4, 5, 6, 7, 8, 9]

//slice
/**
 (method) Array<number>.slice(start?: number, end?: number): number[]
Returns a copy of a section of an array. For both start and end, a negative index can be used to indicate an offset from the end of the array. For example, -2 refers to the second to last element of the array.

@param start
The beginning index of the specified portion of the array. If start is undefined, then the slice begins at index 0.

@param end
The end index of the specified portion of the array. This is exclusive of the element at the index 'end'. If end is undefined, then the slice extends to the end of the array.
 */
console.log("A " ,myArr)//A  [ 1, 2, 3, 4, 5, 6 ]
console.log(myArr.slice(1,4));//[ 2, 3, 4 ]
console.log("B ",myArr);//B  [ 1, 2, 3, 4, 5, 6 ]

//splice
/**
   (method) Array<number>.splice(start: number, deleteCount?: number): number[] (+1 overload)
Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.

@param start — The zero-based location in the array from which to start removing elements.

@param deleteCount — The number of elements to remove.

@returns — An array containing the elements that were deleted.
 */
console.log("C " ,myArr)//C  [ 1, 2, 3, 4, 5, 6 ]
console.log(myArr.splice(1,4));//[ 2, 3, 4, 5 ]
console.log("D " ,myArr);//D  [ 1, 6 ]