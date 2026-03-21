function explainParseInt(value) {
  console.log("Original value", value);
  let result = parseInt(value);
  console.log("After parseInt: ", result);
}

// Example Usage for ParseInt
explainParseInt("42");
explainParseInt("42px");
explainParseInt("3.14");

console.log("__________________________________________________\n")

function explainParseFloat(value) {
  console.log("Original value", value);
  let result = parseFloat(value);
  console.log("After parseInt: ", result);
}

explainParseFloat("3.14"); 
explainParseFloat("42"); 
explainParseFloat("42px"); 

console.log("__________________________________________________\n")

