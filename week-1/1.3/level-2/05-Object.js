function objectMethod(obj){
    console.log("Original Object:", obj);

    let keys = Object.keys(obj); 
    console.log("After Object.Keys():", keys); 
    let values = Object.values(obj); 
    console.log("After Object.values():", values); 
    
    let entries = Object.entries(obj); 
    console.log("After Object.entries():", entries); 
    
    let hasProp = obj.hasOwnProperty("key1"); 
    console.log("After hasOwnProperty():", hasProp); 

    let newObj = Object.assign({}, obj, {newProperty: "newValue"});
    console.log("After Object.assign()", newObj)
}

// example Usage for object Methods
const sampleObject = {
    key1: "value1", 
    key2: "value2", 
    key3: "value3"  
}

objectMethod(sampleObject)