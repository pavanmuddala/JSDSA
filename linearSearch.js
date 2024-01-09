//given an arr and key find the index of the key

const findKey=(arr,key)=>{
    let ind=-1
     arr.map((f,index)=>{
        if(f==key){
            ind=index
        }
    })
    return ind
}
console.log(findKey([1,2,3,4],4))
console.log(findKey([1,2,3,4,5],3))
console.log(findKey([1,2,3,4],10))