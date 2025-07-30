function addNumbers(num1, num2) {
  let result = num1 + num2;
  return result;
}

const result = addNumbers(3, 4);
// console.log('result: ', result );

function loginUserMessage(username) {
  if (username === undefined) {
    // check if username is undefined
    // if(!username)--> also use this
    return "Please enter your username";
  }
  return `${username} just logged in`;
}

const message = loginUserMessage("John");
// console.log(message)

// Rest operateor
function cartPrice(...num) {
  return num;
}
//  console.log(cartPrice(100, 200, 300))


// objects in function
const user = {
  usename: "saurabh",
  age: 22,
};

function handleUser(anyObject) {
  console.log(` username: ${anyObject.usename} , his age: ${anyObject.age}`);
}
// handleUser(user);

//or
// handleUser({
// username: "saurabh",
// age: 22,
// })

//handling array in functions

const numbers = [1, 2, 3, 4, 5];
function handleArray(arr) {
    return arr[4]
}
console.log(handleArray(numbers));
