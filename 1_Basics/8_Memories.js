console.log("***********JS Memorie***********");
//there are two kind of memories ude in JS
//1> Stack Memory: store primitive data types like number, string, boolean, null, undefined
//2> Heap Memory: store complex data types like object, array, function, etc.
console.log("***********Stack Memory***********");
 let myName = "Saurabh"
 let anotherName = myName
 anotherName = "Sarthak"
 console.log(anotherName);
 console.log(myName);
 
 //here we can see the value of 1st declared variable is not changed when we changed the value of 2nd declared variable
//because the copy of the value is created in the stack memory and both the variables are pointing to the same location in
console.log("\n");

console.log("*************Heap Memory**************");
let obj1 = {name: "Saurabh", age: 25};
let obj2 = obj1;
obj2.name = "Sarthak";
console.log(obj1);
console.log(obj2);


