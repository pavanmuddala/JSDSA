//given a number n find the factorial of the number

const recursiveFactorial=(n)=>{
    if(n<=1){
        return 1
    }
    return n*recursiveFactorial(n-1)
}
console.log(recursiveFactorial(10))
console.log(recursiveFactorial(5))
console.log(recursiveFactorial(1))
console.log(recursiveFactorial(0))
//Time complexity for recursive factorial O(n)