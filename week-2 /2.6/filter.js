// filtering 
// what if I tell you, given an input array, give me back all the the even values from it. 

 const arr = [1,2,3,4,5];


// map way 
function even(i){
    if(i % 2 === 0){
     return true;
    }else{
        return false;
    }
}

const solution = arr.filter(even)
console.log(solution)



// ugly way 
const newArr =[]

for(let i = 0; i < arr.length;i++){
    if(arr[i] % 2 === 0){
        newArr.push(arr[i])
    }
}

console.log(newArr)

