//arrays in java script
//arrays are built in data structure

// 1. an array is a data structure that can store collection of values
// 2. Arrays can contain mix of data types you can store boolean, string and all in a single array
// 3. Arrays are resizable you dont need to declare the size of the array
// 4. JavaScript arrays are insertion order and zero indexed
// 5. Arrays are iterables they can be used with for of loop

const arr=[1,2,3,"pavan"]
arr.push(0)
console.log(arr)
arr.unshift(10)
console.log(arr)
arr.pop()
console.log(arr)
arr.shift()
console.log(arr)
//basic array operations in js
//map, reduce, filter, concat, slice and splice
//1. map iterates on the array performs callback function on each element and returns a new array
const newArr=arr.map(f=>f+f)
console.log(newArr,"new Array")
//2. filter
// The filter() method creates a new array filled with elements that pass a test provided by a function.
// The filter() method does not execute the function for empty elements.
// The filter() method does not change the original array.
const filteredArray= arr.filter((f)=>{console.log(Number.isInteger(f));return Number.isInteger(f)})
console.log(filteredArray,"filtered array...")
//3.concat
// The concat() method of Array instances is used to merge two or more arrays. 
// This method does not change the existing arrays, but instead returns a new array.
const arr1=[1,2,4]
const arr2=[5,6,7]
const arr3=arr1.concat(arr2)
console.log(arr3,"concat...")
//4.slice
// The slice() method returns selected elements in an array, as a new array.
// The slice() method selects from a given start, up to a (not inclusive) given end.
// The slice() method does not change the original array.
const sliceArray=["banana","orange","grapes","pavan","pineapple"]
const newSliceArray=sliceArray.slice(1,3)
console.log(newSliceArray,"sliceArray",sliceArray)
//5.splice
// The splice() method adds and/or removes array elements.
// The splice() method overwrites the original array.
// array.splice(index, howmany, item1, ....., itemX)
const spliceArr=[1,2,3,4,5,6]
spliceArr.splice(2,2,"apple","banana")//at index two remove two add two elements banana and apple
console.log(spliceArr,"splcie array")
//6.reduce
// The reduce() method executes a reducer function for array element.
// The reduce() method returns a single value: the function's accumulated result.
// The reduce() method does not execute the function for empty array elements.
// The reduce() method does not change the original array.
//At the first callback, there is no return value from the previous callback.

// Normally, array element 0 is used as initial value, and the iteration starts from array element 1.
// If an initial value is supplied, this is used, and the iteration starts from array element 0.
//Syntax: array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
const reduceArray=[1,2,3,4,5]
const sum=(total,current)=>{
    return total+current
}
const reduceSum=reduceArray.reduce(sum,0)
console.log(reduceSum,"reduce sum.....")




//1. insert or remove from the end --> O(1)
//2. Insert or remove from begining --> O(n) as it requires change of index
//3. Access --> O(1)
//4. Search --> O(n)
//5. Push/Pop --> O(1)
//6. shift/unshift/concat/slice/splice --> O(n)
//7. foreach/map/filter/reduce --> O(n)
