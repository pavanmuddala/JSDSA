//A map is a unordered collection of key value pairs
//Both keys and values can be of any data type
//To retrieve a value you can use any corresponding key
//Maps are iterables they can be used with for of loop
//Maps vs Objects
//1. Objects are unordered whereas Maps are ordered
//2. Keys in objects can only be String or Symbol type whereas in Map they can be of any type
//3. An object has a prototype and may contain a few default keys which may collide with our keys
//4. Maps does not have any default keys
//5. Objects are not iterables whereas Maps are iterables
//6. The number of items in an object are determined manually whereas It is readily available with size property in Map
//7. Apart from storing data you can add functionality in object whereas Maps are restricted for storage only

const m=new Map()
m.set('a',1)
m.set('b',40)
m.set('c',true)
console.log(m.get('a'))
console.log(m.get('b'))
console.log(m)
const obj={'a':45,'b':34}
console.log(obj)
console.log(m.size)

const map=new Map([['a',12],['b',56]])
console.log(map.has('67'))

for(const [key,value] of map){
    console.log(key,value,"pavan....")
}
map.delete('a')
console.log(map)
map.clear()
console.log(map)