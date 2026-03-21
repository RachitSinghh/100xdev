// String handbook

// String: Length, indexOf(), lastIndexOf(), slice(), substring(), replace(), split(), trim(), toUpperCase(), toLowerCase(), etc.

// Run each function to see the output, play and learn by doing.

// length
function getLength(str) {
  console.log("Original String:", str);
  console.log("Length:", str.length);
}

getLength("Hello World");

// indexOf
function findIndexOf(str, target) {
  console.log("Original String: ", str);
  console.log("Index: ", str.indexOf(target));
}

findIndexOf("Hello World", "World");

// lastIndexOf
function findLastIndexOf(str, target) {
  console.log("Original String: ", str);
  console.log("Index: ", str.lastIndexOf(target));
}

findLastIndexOf("Hello Rachit", "Rachit");

// slice
function getSlice(str, start, end) {
  console.log("Original String: ", str);
  console.log("After slice: ", str.slice(start, end));
}

getSlice("Hello World", 0, 5);

// replace
function replaceString(str, target, replacement) {
  console.log("Original String: ", str);
  console.log("After Replace:", str.replace(target, replacement));
}

replaceString("Hello World", "World", "JavaScript");

// split
function splitString(str, separator) {
  console.log("Original String: ", str);
  console.log("After Split: ", str.split(separator));
}

splitString("Hello,World,my,self,rachit", ",");

// trim

function trimString(str) {
  console.log("Original String: ", str);
  console.log("After Trim: ", str.trim());
}

trimString("   Hello my name is rachiitt   ");

// toUpperCase
function toUpper(str) {
  console.log("Original String: ", str);
  console.log("After ToUpper: ", str.toUpperCase());
}

toUpper("rachit");

// toLower
function toLower(str) {
  console.log("Original String: ", str);
  console.log("After toLowerCase: ", str.toLowerCase());
}

toLower("racAchit")