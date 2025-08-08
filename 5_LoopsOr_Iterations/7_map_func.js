// map()

const myNumber = [ 1, 2, 3, 4, 5, 6];
//want to add 10 to every number
let newNum = myNumber.map((nums) => nums + 10)
// console.log(newNum); // [11, 12, 13, 14, 15, 16]

 newNum = myNumber.forEach((nums) =>{
// console.log(nums + 11);
 } )



//chaining : we can chain multiple methods together

const newNumber = myNumber.map( (nums) => nums * 10 ).map((nums) => nums + 1).filter((nums) => nums > 40)
console.log(newNumber); // [11, 21, 31, 41, 51