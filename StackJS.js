// The stack data structure is a sequential collection of elements which follows
//LIFO Last In First Out
//The last element entered into the stack is the first element to be removed
//Stack is a abstract data type
//  The stack data structure supports two main operations
// 1. push, which adds an element to the collection
// 2. pop, which removes the last element from the collection

// Fixed Size Stack: As the name suggests, a fixed size stack has 
// a fixed size and cannot grow or shrink dynamically. If the stack is full 
// and an attempt is made to add an element to it, an overflow error occurs.
//  If the stack is empty and an attempt is made to remove an element from it, an underflow error occurs.

// Dynamic Size Stack: A dynamic size stack can grow or shrink dynamically. 
// When the stack is full, it automatically increases its size to accommodate the new element, and when the stack is empty,
//  it decreases its size. This type of stack is implemented using a linked list, as it allows for easy resizing of the stack.

//implementing stack using arrays
const MAX=10//size of stack
let t=-1 // pointer 
const stack=Array(MAX).fill(0)
//isEmpty Function returns true if stack is empty or false
const isEmpty=()=>{
    if(t==-1){
        console.log("Stack is Empty...")
        return true
    }
    else{
        console.log("Stack is not Empty....")
        return false
    }
}
console.log(isEmpty())

// Push pushes elements into stack
const push=(item)=>{
    if(t<MAX-1){
        stack[t+1]=item
        t=t+1
        console.log("item inserted successfully")
    }
    else{
        console.log("item not inserted")
    }
}
push(10);

//pop function removes item from the stack
const pop=()=>{
    if(t==-1){
        console.log("stack is already empty")
    }
    else{
        let k=stack[t]
        stack[t]=0
        t=t-1
        console.log(k+" is successfully removed")
    }
}
pop()
pop()

// peek() will return the peek element from the stack
const peek=()=>{
    if(t==-1){
        console.log("stack is empty")
        return 0
    }
    else{
        return stack[t]
    }
}
peek()
push(20)
push(30)
console.log(peek())

//print() method will print the entire stack
const print=()=>{
    console.log("pavan...")
    for(let i=t;i>=0;i--){
        console.log(stack[i])
    }
}
print()

// Advantages of array implementation:
// Easy to implement.
// Memory is saved as pointers are not involved.

// Disadvantages of array implementation:
// It is not dynamic i.e., it doesn’t grow and shrink depending on needs at runtime. [But in case of dynamic sized arrays like vector in C++, list in Python, ArrayList in Java, stacks can grow and shrink with array implementation as well].
// The total size of the stack must be defined beforehand.