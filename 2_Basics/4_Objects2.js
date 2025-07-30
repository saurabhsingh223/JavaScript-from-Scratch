// const user = new Object() -> this is singleton object
// const user = {} -> this is object literal

const user = {};
user.id = "123abs";
user.name = "John Doe";
user.isLoggedIn = true;
//  console.log(user) // { id: '123abs', name: 'John Doe', isLoggedIn: true}



// getting keys and values of user object
const keys = Object.keys(user);
// console.log(keys);
const values = Object.values(user);
// console.log(values);
const entries = Object.entries(user);
//  console.log(entries);

//  console.log(user.hasOwnProperty('name'))





const user2 = {
  email: "john.doe@example.com",
  fullName: {
    userfullname: {
      first: "John",
      last: "Doe",
    },
  },
};
// console.log(user2) // { email: 'john.doe@example.com', fullName: {
//   userfullnamr: { first: 'John', last: 'Doe' }
// }}

// Ascessing fullname
//console.log(user2.fullName.userfullname.first); //-> this is accessing nested object




// combining or adding two objects
const obj1 = { 1: "b", 2: "b" };
const obj2 = { 3: "c", 4: "d" };
const obj3 = { 5: "e", 6: "f" };
//  const obj4 = Object.assign({}, obj1, obj2, obj3)
const obj4 = { ...obj1, ...obj2, ...obj3 }; // this is combining
// console.log(obj4);



//when data comes from database then it always come in the form of array of objects
//example
const dbUser = [
  {
    id: 1,
    name: "John Doe",
  },
  {
    id: 1,
    name: "John Doe",
  },
  {
    id: 1,
    name: "John Doe",
  },
]


