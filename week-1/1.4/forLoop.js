/**
 * For Loop Documentation
 * @description A for loop repeats a block of code a specified number of times.
 * It's useful for iterating over sequences or performing repetitive tasks.
 * @example
 * for (let i = 0; i < 10; i++) {
 *   console.log(i);
 * }
 * @note For loops are efficient for known iteration counts
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for
 */



let ans = 0;

for (let i = 1; i <= 50; i++) {
  ans = ans + i;
  console.log(i + " - " + ans)
}

console.log(ans)
