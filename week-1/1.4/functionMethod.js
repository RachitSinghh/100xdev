/**
 * Function Documentation
 * @description A function in JavaScript is a set of statements that performs a task or calculates a value.
 * It should take some input and return an output where there is an obvious relationship between the input and the output.
 * @example
 * function add(a, b) {
 *   return a + b;
 * }
 * @note Functions promote code reusability and modularity
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions
 */


function findSum(n){
    let ans = 0; 
    for(let i = 1; i <= n; i++){
        ans = ans + i; 
        console.log(`${i} - ${ans}`)
    }

    return ans;
}

const sum = findSum(10); 
console.log(sum)


//  Why do we need function


// example without function 
let n = 100;
let ans = 0; 

for(let i =1; i< n; i++){
    ans = ans + i; 
}

console.log(ans);


let n2 = 1000; 
let ans2 = 0; 

for(let i = 1; i < n2; i++){
    ans2 = ans2 + i; 
}

console.log(ans2); 

// example with function 

function findSum(n){
    let ans = 0; 
    for(let i = 1; i < n; i++){
        ans = ans + i; 
    }

    return ans; 
}

let ans3 = findSum(100); 
console.log(ans3)

let ans4 = findSum(1000); 
console.log(ans4)