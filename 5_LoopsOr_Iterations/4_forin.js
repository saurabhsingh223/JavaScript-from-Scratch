// forin loop: iterate objects

/*
The for...in loop is used to iterate over the keys (property names) of an object.

✅ Syntax:
for (const key in object) {
  // code to execute for each key
}
✅ Example with Object:
const person = { name: 'John', age: 30 };

for (const key in person) {
  console.log(key, person[key]);
}
Output:
name John  
age 30
*/

const myObject = {
    js: 'javascript',
    css: 'css',
    rb: 'ruby'
}

for (const key in myObject) {
    console.log(myObject[key]); 
}

for (const key in myObject) {
    console.log(`${key} is shortcut for ${myObject[key]}`)
}