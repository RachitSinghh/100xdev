# JavaScript Foudation 

## 1. Why Languages?

Programming languages convert high-level code into machine language (0s and 1s) that computers can understand and execute.

- Languages are used to write applications
- Developers write high-level code in these languages
- Every language has a compiler that converts developer code into 0s and 1s

## 2. Interpreted vs Compiled Languages

### a. Compiled Languages

Compilers convert high-level developer-friendly code into 0s and 1s.

**Step 1:** Write code

```cpp
#include <iostream>
using namespace std;

int main() {
  cout << "Hello World" << endl;
  return 0;
}
```

**Step 2:** Compile code

```bash
g++ a.cpp -o temp
```

**Step 3:** Run the code

```bash
./temp
```

### b. Interpreted Languages

**Step 1:** Write code

```js
console.log("Hello World");
```

**Step 2:** Run code

```bash
node a.js
```

Output:
```
Hello World
```

### Difference: Compiled vs Interpreted Languages

| Compiled Languages | Interpreted Languages |
|-------------------|----------------------|
| First need to compile, then need to run | Code is executed line by line |
| Usually don't compile if there is an error | Slower execution (interpreted on the fly) |
| Errors caught at compile time | Errors caught at runtime |
| Platform-specific binaries | More portable (needs interpreter) |
| C, C++, Rust, Go | JavaScript, Python, Ruby |
| Longer (compile step required) | Shorter (no compilation needed) |


## 3. Why JS >> other languages in some use-cases
Browsers can only understand HTML/CSS/JS (not technically true) Thanks to Node.js, JavaScript can also be used for "Backend Development"

Browsers like 
- Brave
- chrome

## 4. strict vs dynamic languages 

***strict***
* Benefits - more strict code

```cpp
  #include <iostream>
  using namespace std;

  int main(){
    int number = 5; // Declaration of an integer variable  
    number = "Hello"; // this will cause a compile time error

    cout << number << endl;

    return 0; 
  }
```

***dynamic langauges***
* Benefits - can move fast

```js
let number = 5;
number = "Hello" ; 


console.log(number);
```

## 5. single threaded nature of JS
JS can do one thing at a time, which is called *single threaded*. This is why it is considered to be a bad language for scalable systems. However, there is a way to make it use all cores of your machine.
your machine (using Worker Threads or clustering).

### Why Single-Threaded?
- **Event Loop:** JavaScript uses an event loop to handle asynchronous operations efficiently
- **Non-blocking I/O:** Even though it's single-threaded, JS can handle many concurrent operations through callbacks and promises
- **Simplicity:** No need to worry about race conditions, deadlocks, or complex thread synchronization

### Interview Points:
- **V8 Engine:** Chrome's V8 engine compiles JS to machine code for faster execution
- **Call Stack:** JS uses a single call stack to track function execution
- **Event Loop Phases:** Timer → I/O callbacks → Idle → Poll → Check → Close callbacks
- **Microtasks vs Macrotasks:** Promises (microtasks) have higher priority than setTimeout (macrotasks)

### How to Achieve Parallelism:
1. **Worker Threads:** For CPU-intensive tasks in Node.js
2. **Cluster Module:** Spawn multiple Node.js processes to utilize all CPU cores
3. **Web Workers:** For browser-based parallel execution

```js
// Example: Using cluster module
const cluster = require('cluster');
const numCPUs = require('os').cpus().length;

if (cluster.isMaster) {
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }
} else {
  // Worker code here
}
```

## Understanding sub-routine

## 6. Simple Primitives in JS

Basic data types that hold single values:

```js
let num = 42;          // Number
let str = "Hello";     // String
let bool = true;       // Boolean
```

## 7. Complex Primitives in JS

Data structures that hold multiple values:

```js
// Array - ordered collection
let arr = [1, 2, 3];

// Object - key-value pairs
let obj = { name: "John", age: 25 };
```

## 8. Functions in JavaScript

*Function lets you*
  1. Abstract out logic in your program 
  2. Take arguments as an input
  3. Return a value as an output
  4. You can think of them as a independent program that is supposed to do somethig given an input
  5. Function can take other functions as input.  

Reusable blocks of code:

```js
// Function declaration
function add(a, b) {
  return a + b;
}

// Arrow function
const multiply = (a, b) => a * b;

// Function as argument (callback)
const numbers = [1, 2, 3];
numbers.map((n) => n * 2); // [2, 4, 6]
```
## 9. Practise problem solving 

## 10. callback functinos, event loop, callback queue, Asynchronous programming

## 11. Callback hell and promises

## Assignment 

1. Create a counter in JS (counts down from 30 to 0)
2. Calculate the time it takes between a setTimout call and the inner function actually running 
3. Create a terminal Clock (HH:MM:SS)