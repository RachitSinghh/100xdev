// callback function

// step 1 - can you call one function inside another function?

// find the square of the input
function square(n) {
  return n * n;
}
function cube(n){
    return n * n * n; 
}

// find the sum of the squares of the input

// function sumOfSquare(a, b) {
//   const val1 = square(a);
//   const val2 = square(b);
//   return val1 + val2;
// }

// console.log(sumOfSquare(1, 2));

// call back funciton example

function sum(a, b, fn) {
  const val1 = fn(a);
  const val2 = fn(b);

  console.log(val1 + val2);
}

sum(2, 3, square);
sum(5, 5, square);
sum(5, 5, cube);