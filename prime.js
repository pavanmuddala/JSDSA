//given a number n verify whether it is prime or not
//A prime number is a whole number greater than 1 whose only factors are 1 and itself

const isPrime=(n)=>{
    let count=0
    for(let i=1;i<=n/2;i++){
        if(n%i==0){
            count++
        }
    }
    
    if(count==1){
        return true
    }
    else{
        return false
    }
}
console.log(isPrime(5))
console.log(isPrime(7))
console.log(isPrime(14))
console.log(isPrime(1))
console.log(isPrime(2))

const isPrimeNumber=(n)=>{
    if(n<2){
        return false
    }
    for(let i=2;i<=n/2;i++){
        if(n%i==0){
            return false
        }
    }
    return true
}
console.log(isPrimeNumber(2),"--->",2)
console.log(isPrimeNumber(1),'---> '+1)
console.log(isPrimeNumber(7),"--->",7)
console.log(isPrimeNumber(20),"--->",20)
//time complexity O(log n)