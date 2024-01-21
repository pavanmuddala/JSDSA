//A set is a collection of values. The values must be unique
//Set does not maintain insertion order
//You can store any data type in the same set
//Sets are dynamically sized we dont need to declare the size of the set
//Sets are iterables, We can use forof loop on a set
//Set vs Array
//Arrays can contain duplicate values where Sets cannot
//Arrays maintain insertion order while sets dont
//Searching and deleting are faster in sets compared to arrays

const set = new Set([1,2,4,4,5])
console.log(set)
set.add(10)
console.log(set)
console.log(set.has(4))
console.log(set.has(1000))
console.log(set.size)
set.delete(10)
console.log(set)

for(const i of set){
    console.log(i)
}
set.clear()
console.log(set)