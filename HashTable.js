// 1. A hash table is also known as a hash map which is a data structure that used to store key value pairs
// 2. Given a key you can associate a value with that key for a very fast lookup
// 3. JavaScripts object is a special implementation of the hash table data structure
// 4. However object class adds its own keys. Keys that you input may conflict and overwrite inherited default properties
// 5. Maps which were introduced in 2015 can store key value pairs
// 6. Writing your own javascript hashtable is a very popular interview question

// Hash table
// 1. We store the key value pair in a fix sized array
// 2. Arrays have a numeric index
// 3. A Hashing function accepts the string key and converts it into a hash code using a defined logic and the maps it into a numeric index that is within the bounds of the array
// 4. Using the index store the value
// 5. The same hashing function reused to retrieve the value given a key
// 6. Set to store a key value pair
// 7. Get to retrieve a value given a key
// 8. Remove to delete a key value pair

// Hash table usage
// 1. Hash tables are typically implemented where contant time lookup and insertion are required
// Example database indexing and caching 

class HashTable {
    constructor(size) {
        this.size = size;
        this.table = new Array(size);
    }
    hash(key) {
        let total = 0
        for (let i = 0; i < key.length; i++) {
            total += key.charCodeAt(i);
        }
        return total % this.size
    }
    set(key, value) {
        let index = this.hash(key);
        let bucket = this.table[index];
        if (!bucket) {
            this.table[index] = [[key, value]];
        }
        else {
            let sameKeyBucket = bucket.find(f => f[0] === key);
            if (sameKeyBucket) {
                sameKeyBucket[1] = value
                // bucket.find(f=>f[0]===key)[1]=value
            }
            else {
                bucket.push([key, value])
                this.table[index] = bucket
            }
        }
    }
    get(key) {
        let index = this.hash(key);
        const bucket = this.table[index];
        if (bucket) {
            const sameKeyBucket = bucket.find(f => f[0] === key)
            if (sameKeyBucket) {
                return sameKeyBucket;
            }
            else {
                return undefined;
            }
        }
        else {
            return undefined
        }
    }
    remove(key) {
        let index = this.hash(key);
        const bucket = this.table[index];
        if (bucket) {
            const sameKeyBucket = bucket.find(f => f[0] === key);
            if (sameKeyBucket) {
                bucket.splice(bucket.indexOf(sameKeyBucket), 1);
            }
            else{
                this.table[index]=undefined
            }
        }
        else {
            console.log("no element present with that key " + key)
        }
    }
}

const hashTable = new HashTable(50);
hashTable.set("name", "pavan");
hashTable.set("address", "medapadu");
hashTable.set("mane", 7993011526);
console.log(hashTable.get("name"));
console.log(hashTable.get("address"));
console.log(hashTable.get("mane"));
hashTable.remove("name");
console.log(hashTable.get("name"));

// console.log(hashTable.table)
