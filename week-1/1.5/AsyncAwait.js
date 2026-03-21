// function findSum(n) {
//   let ans = 0;
//   for (let i = 0; i < n; i++) {
//     ans += i;
//   }
//   return ans;
// }

// function findSumTill100() {
//   console.log(findSum(100));
// }

// this code is ugly, Promises are syntatical sugar that make this code slightly more readable
// setTimeout(findSumTill100, 1000);
// console.log("Hello World");

const fs = require("fs");

// // file system module
// fs.readFile("a.txt", "utf-8", function(err, data){
//     console.log(data)
// })

// How can we create an asynchronous fn of our own?

// ugly way
// function rachitReadsFile(cb){
//     fs.readFile("a.txt", "utf-8", (err,data) =>{
//         cb(data)
//     })
// }

// function onDone(data){
//     console.log(data)
// }
// it is just a wrapper on top of another async function which is fine.
// usually all async function we will write will be on top of JS provided async function like settimeout or fs.readfile
// rachitReadsFile(onDone)

// Cleaner way
// function RachitReadsFile() {
//   console.log("first console ");
//   return new Promise((resolve) => {
//     console.log("second console");
//     fs.readFile("a.txt", "utf-8", function (err, data) {
//       console.log("third console");
//       resolve(data);
//       console.log("fourth console");
//     });
//   });
// }

// function onComplete(data) {
//   console.log("On complete:", data);
// }

// RachitReadsFile().then(onComplete);

function rachitAsyncFunction() {
  let p = new Promise(function (resolve) {
    // do some async task
    setTimeout(() => {
      resolve("Hi there!");
    }, 1000);
  });

  return p;
}

async function main() {
  let value = await rachitAsyncFunction();
  console.log(value);
}

main()