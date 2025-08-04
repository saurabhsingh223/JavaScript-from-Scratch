// forOf loop

/*
 for...of Loop in JavaScript – Short Note
The for...of loop is used to iterate over iterable objects like arrays, strings, sets, etc.

✅ Syntax:

for (const element of iterable) {
  // code to execute for each element
}
✅ Example with Array:
const fruits = ['apple', 'banana', 'cherry'];

for (const fruit of fruits) {
  console.log(fruit);
}
Output:
apple  
banana  
cherry

✅ Key Points:
Simpler than a traditional for loop for arrays.

Can't use it directly on objects (use for...in or Object.entries() for that).

Works well when you don’t need the index.
*/

const { forwardRef } = require("react");

/* used for iterating over a sequence (such as an array, an object, or a string) 
eg: ["", "", ""]-array of stings, [{}, {}, {}]- aray of objects*/

const arr = [1, 2, 3, 4, 5];

for (const num of arr) { // here object is not that object but the array
    // console.log( num );   
}

const greetings = "Hello saurabh"
let i = 0;
for (const char of greetings) {
    if(char == " ") continue;
    // console.log(`char at ${i} is ${char}`);
    i++
}


//maps
const map = new Map()
map.set('IN', 'India')
map.set('US', 'United States')
map.set('UK', 'United Kingdom')

// console.log(map)

for (const key of map) {
    console.log(key);  
}

for (const [key, value] of map) {
    console.log(key, ':-', value);
}

//objects are not iteratable

