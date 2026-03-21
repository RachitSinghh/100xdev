# Async vs Sync Functions: JS Browser Architecture & Callbacks

## Synchronous Execution
* **Definition**: Operations execute sequentially, one after another
* **Behavior**: Only one operation runs at a time
* **Use case**: Simple, linear code flow

## Asynchronous Execution
* **Definition**: Opposite of synchronous; operations can run in parallel
* **Behavior**: Multiple operations run concurrently via context switching
* **Use case**: I/O operations, timers, network requests

## Key Concepts
* **Callbacks**: Functions passed as arguments to handle async results
* **Browser Architecture**: Single-threaded with event loop managing async operations

## Let's build some Intiuition
**Human brain and body threaded**
1. we can only do one thing at a time 
2. but we can context swtich b/w tasks, or we can delegate tasks to other people

**Case 1: Sequential Execution (No Context Switching)**
```
Person A making breakfast:
8:00 - Boil water ████████████████ 8:10
8:10 - Make toast ████████████████ 8:15
8:15 - Pour juice ████████████████ 8:17
Total time: 17 minutes
```

**Case 2: Context Switching (Parallel Execution)**
```
Person A cooking with delegation:
8:00 - Start boiling water ██ (ask roommate)
8:00 - Make toast ██████ 8:06
8:06 - Pour juice ██ 8:08
8:08 - Water ready (roommate) ✓
Total time: 10 minutes
```

**Browser Analogy:**
- **Sync**: Main thread com pletes one task fully before starting the next (blocking)
- **Async**: Main thread delegates I/O tasks to Web APIs (timers, fetch, etc.) and continues with other work using the event loop

## What did we learn up until now? 
Even if you're single threaded(brain can do only one thing at a time), you can do things parallely by Delegating you can also context switch between tasks if need to be (the net time to do both the things would still be same)

Net amount of time take to do a task can be decreased by doing these thing (delegating and context switching)

## How does JS do the same thing ? can JS delegate ? can JS do the context switching 

**Yes!** Using asynchronous function

### What are common async functions? 
**fs.readFile** - to read a file from you fileSystem
**Fetch** - to fetch some data from an API endpoint

## Async Functions in JavaScript

### Understanding Delegation in JS
JavaScript delegates blocking operations to the **Web APIs** (provided by the browser), allowing the main thread to continue executing other code.

**Example: `setTimeout` (Delegation)**
```javascript
console.log("Start");
setTimeout(() => {
    console.log("Delayed task");
}, 2000); // Delegated to Web API
console.log("End");

// Output:
// Start
// End
// Delayed task (after 2 seconds)
```
The main thread doesn't wait for `setTimeout`. The Web API handles the timer while JS continues.

### Common Async APIs

**1. `fs.readFile()` - File System**
```javascript
const fs = require('fs');
fs.readFile('file.txt', 'utf-8', (err, data) => {
    if (err) console.log(err);
    console.log(data); // File content
});
console.log("Reading..."); // Executes immediately
```

**2. `fetch()` - Network Requests**
```javascript
fetch('https://api.example.com/data')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));

console.log("Fetching..."); // Executes immediately
```

Both delegate to Web APIs, preventing the main thread from blocking while waiting for I/O operations to complete.

# Promises
## Understanding Promises

**Definition**: A Promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

**Three States**:
1. **Pending**: Initial state, operation hasn't completed yet
2. **Fulfilled**: Operation completed successfully, returns a value
3. **Rejected**: Operation failed, returns a reason/error

**Promise Syntax**:
```javascript
const promise = new Promise((resolve, reject) => {
    // Async operation here
    if (success) {
        resolve(value); // Fulfilled state
    } else {
        reject(error); // Rejected state
    }
});
```

**Consuming Promises**:
```javascript
promise
    .then(value => {
        console.log("Success:", value); // Handles fulfilled state
    })
    .catch(error => {
        console.log("Error:", error); // Handles rejected state
    })
    .finally(() => {
        console.log("Done"); // Executes regardless of outcome
    });
```

**Real-world Example**:
```javascript
const fetchData = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Data fetched successfully");
    }, 2000);
});

fetchData
    .then(data => console.log(data))
    .catch(error => console.log(error));

console.log("Fetching..."); // Executes immediately
```

**Why Promises?** They provide a cleaner alternative to callback functions and make error handling more manageable through the chain pattern.


