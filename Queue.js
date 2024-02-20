//The queue data structure is a sequential collection of elements that follows FIFO
// First In First Out
// The first element inserted into the queue is the first element to be removed
// a queue of people. people enter the queue at one end (tail or rear) leave from the other end (front or head)
//Queue is a abstract data type
//The queue data structure two main operations
//1. Enqueue --> which adds an element to the tail/rear of the queue
//2. Dequeue --> which removes an element from the head/front of the queue

class Queue{
    constructor(){
        this.items=[]
    }
    enqueue(element){
        this.items.push(element)
    }
    dequeue(){
        this.items.shift()
    }
    isEmpty(){
        return this.items.length==0
    }
    peek(){
        if(!this.isEmpty()){
            return this.items[0]
        }
        else{
            return null
        }
    }
    size(){
        return this.items.length
    }
    print(){
        console.log(this.items.toString())
    }
}
const q=new Queue()
q.enqueue(10)
q.enqueue(20)
q.enqueue(30)
q.enqueue(40)
q.print()
console.log(q.peek())
console.log(q.size())
q.dequeue()
q.print()