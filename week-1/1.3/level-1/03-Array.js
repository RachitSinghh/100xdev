// push()
function pushExample(arr, element){
    console.log("Original Array: ", arr); 

    arr.push(element); 

    console.log("After Push", arr);
}

pushExample([1,2,3], 4);

console.log("__________________________________________________\n")

// pop()

function popExample(arr){
    console.log("Original Array: ", arr); 

    arr.pop(); 

    console.log("After pop:", arr); 
}

popExample([1,2,3])

console.log("__________________________________________________\n")

// shift()

function shiftExample(arr){
    console.log("Original Array: ", arr);

    arr.shift(); 

    console.log("After shift: ", arr); 
}

shiftExample([1,2,3])


console.log("__________________________________________________\n")

//unshift
function unShiftExample(arr,element){
    console.log("Original Array: ", arr);

    arr.unshift(element); 

    console.log("After unShift: ", arr); 
}

unShiftExample([1,2,3],0)


console.log("__________________________________________________\n")

// concat

function concatExample(arr1, arr2){
    console.log("Original Arrays: ", arr1, arr2);

    let arr3 = arr1.concat(arr2); 

    console.log("After Concat: ", arr3); 
}

concatExample([1,2,3],[4,5,6])

console.log("__________________________________________________\n")

// forEach

function forEachExample(arr){
    console.log("Original Array: ", arr);

    arr.forEach(function(item, index) {
        console.log("After iterating: ",index,"-",item); 
    })
}

forEachExample([1,2,3])

console.log("__________________________________________________\n")

// map()

function mapExample(arr){
    console.log("Original Array: ", arr); 

    let newArr = arr.map(function(item){
        return item*2; 
    })

    console.log("After Map: ", newArr); 
}

mapExample([2,4,6])

