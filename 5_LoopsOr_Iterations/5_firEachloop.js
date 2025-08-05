//forEach Loop
/*
The forEach() method is used to execute a function for each element in an array.

✅ Syntax:
array.forEach((element, index, array) => {
  // code to run for each element
});
✅ Example:
const nums = [1, 2, 3];

nums.forEach((num) => {
  console.log(num * 2);
});
Output:
2  
4  
6
*/


const lang = ["js", " py", "java", "cpp", "c"];

lang.forEach( function (i){
    // console.log(i);
})
// for each loop requires a callback function to call the indexes of the array
// the call back function is called for each item in the array
// call baack functions doesn't have function name and the parameters in this function will be act as a index of the array
// we call also use arrow function to call the callback function

lang.forEach((i) => {
    // console.log(i);
})

// using foreach by another alrady made function
 function print(i){
    // console.log(i);
 }

 lang.forEach(print) // givng the reference of build function into the call back function

 // the for each has many use cases
 // 1. it is used to iterate over the array
 // 2. it is used to iterate over the object
 // it can also give indexes, and list of whole array

 lang.forEach(( i, index, arr) => {
    // console.log(i, index, arr);
 })


 //using for each over the array of objects
 const myLang = [
    {
        langName: "javascript",
        langVersion: "ES6",
    },
    {
        langName: "python",
        langVersion: "3.9",
        },
        {
            langName: "java",
            langVersion: "11",
            }
 ]

 myLang.forEach((item) =>{
console.log(item.langName, item.langVersion);
 })