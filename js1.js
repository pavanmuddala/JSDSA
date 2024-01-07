//given a number n find the first n elements of the fibanocci series
let a=0
let b=1
let c=0
let n=8
for (let i=0;i<n;i++)
{
    console.log(a);
    c=a+b
    a=b
    b=c
}

const fibanocci=(n)=>{
    let fib=[0,1]
    for(let i=2;i<n;i++){
        fib[i]=fib[i-1]+fib[i-2]
    }
    return fib
}
console.log(fibanocci(6))
console.log(fibanocci(8))
console.log(fibanocci(10))