//given a number n find the nth fibanocci number

const recursiveFibanocci=(n)=>{

    if(n<2){
        return n
    }
    
    return recursiveFibanocci(n-1)+recursiveFibanocci(n-2)
}

console.log(recursiveFibanocci(0))
console.log(recursiveFibanocci(1))
console.log(recursiveFibanocci(2))
console.log(recursiveFibanocci(3))
console.log(recursiveFibanocci(4))
//Recursive fibanocci time complexity ---> O(2^n) which is worse than O(n)