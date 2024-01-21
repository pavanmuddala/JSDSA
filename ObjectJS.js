//An object is an unordered collection of key-value pairs.
//The key must be a string or symbol data type but value can be of any data type
//To access a value you can use the corresponding key it can be achieved by using [] or .
//An Object is not a iterable you can not use for of loop on a object

const obj={
    name:"pavan",
    "age":22,
    "village - address":"Medapadu West Godavari",
    sayMyName:function(){
        console.log("My name is "+this.name)
    }
}
console.log(obj)
console.log(obj.name)
console.log(obj["age"])
console.log(obj["village - address"])
obj.hobby="cricket"
obj['new hobby']="working.."
console.log(obj)
// we can delete a key value pair using delete
delete obj['new hobby']
console.log(obj)
// we can also have a function in an object
obj.sayMyName()
//Object.keys() returns an array of keys of the object
console.log(Object.keys(obj),"keys.....")
console.log(Object.values(obj),"values....")
console.log(Object.entries(obj),"Entries....")//return the object as 2D array
//hasOwnProperty() is used to check whether a key is present in the object or not
console.log(obj.hasOwnProperty("name"))
console.log(obj.hasOwnProperty("sai"))
console.log("name" in obj)
console.log("sai" in obj)
