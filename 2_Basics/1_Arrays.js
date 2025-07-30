// array

// const arr = [1,3,4,'abc',true]
// //  console.log(arr); 
//another way of declaring array
//  const arr2 = new Array(1,2,3,'abc',true)
//  console.log(arr2);
 
//  console.log(arr2[3]+'\n'); */

 //*********Array Methods */
 console.log('******Array Methods*****');
  const arr = new Array(1,2,3,4)
//  console.log(arr);
  //1. push() & pop()
  
  arr.push(5)
//   console.log(arr);
  arr.pop()
//   console.log(arr);

//2. unshift() & shift()

arr.unshift(0)
// console.log(arr);
arr.shift()
// console.log(arr);


//3. includes()
/*
console.log(arr.includes(6))
*/

//4.indexOf()
/*
console.log(arr.indexOf(4));
*/

//5. join()

const arr2 = arr.join()
// console.log(arr2);
// console.log(typeof arr2);


//6. slice() & spice()

let arr1 = arr.slice(1,4)
// console.log(arr1);
// console.log('original arr: '+arr);
let arr3 = arr.splice(1,4)
// console.log(arr3);
// console.log('original arr: '+arr);



