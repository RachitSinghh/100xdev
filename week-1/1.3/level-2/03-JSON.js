function jsonMethods(jsonString){
    console.log("Original JSON String: ", jsonString)

    // Parsing JSON string to JavaScript Object

    let parsedObject = JSON.parse(jsonString);
    console.log("After JSON.parse(): ", parsedObject); 

    // stringify JavaScript Object to JSON string

    let jsonStringified = JSON.stringify(parsedObject); 
    console.log("After JSON.stringify(): ", jsonStringified);

}

const sampleJSONString = '{"key": "value", "number": 42, "nested":{"nestedkey":"nestedValue"}}'

jsonMethods(sampleJSONString)