console.log("day 2 of js dsa")
//given an integer n return factorial of n
const factorial=(n)=>{
    let result=1
    for(let i=2;i<=n;i++){
        result=result*i
    }
    return result
}
console.log(factorial(0))
console.log(factorial(1))
console.log(factorial(5))