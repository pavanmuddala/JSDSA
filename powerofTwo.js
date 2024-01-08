// given an integer determine if it is in power of 2 or not

const powerOfTwo=(n)=>{
    if(n<1){
        return false
    }
    while(n>1){
        if(n%2!==0){
            return false
        }
        n=n/2
    }
    return true
}
console.log(powerOfTwo(2))
console.log(powerOfTwo(4))
console.log(powerOfTwo(16))
console.log(powerOfTwo(20))
console.log(powerOfTwo(1))
console.log(powerOfTwo(0))
console.log(powerOfTwo(34))
//time complexity O(logn)

//Efficient solution
console.log("******************pp")
//logic if the number is power of 2 the binary and of n and n-1 is always 0
const powerOfTwo2=(n)=>{
    if(n<1){
        return false
    }
    return (n & (n-1)) === 0
}
console.log(powerOfTwo2(2))
console.log(powerOfTwo2(4))
console.log(powerOfTwo2(16))
console.log(powerOfTwo2(20))
console.log(powerOfTwo2(1))
console.log(powerOfTwo2(0))
console.log(powerOfTwo2(34))
//Time complexity O(1)