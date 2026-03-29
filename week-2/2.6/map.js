// map filter arrow
// given an array, give me back a new array in which every value is multipled by 2

const input = [1, 2, 3, 4, 5];
// let inputLength = input.length;
//[2,4,6,8,10]

// solution
// const newArray =[]

// for(let i = 0; i < inputLength; i++){
//     newArray.push(input[i] * 2)
// }

// console.log(newArray)

function multiple(i) {
  return i * 2;
}

const ans = input.map(multiple);

console.log(ans)


// note: whenever you're being told to transform and array we use map


// create a map function that takes two inputs
// an array, and a tranformation function callback/fn
// and transforms the array into a new one using the transform fn 

function mapping(arr, fn){
    const result = []; 
    for(let i = 0; i < arr.length; i++){
        result.push(fn(arr[i]))
    }
    return result
}


const solution = mapping(input, multiple);
console.log("Mapping custom function", solution)