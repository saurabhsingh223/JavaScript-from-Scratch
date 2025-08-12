// reduce() method

const myNums = [1,2,3]

//using simple function

let myTotal = myNums.reduce(function (accumulator, curr_val) {
    // console.log(`accumulator: ${accumulator}, curr_val: ${curr_val}`);    
    return accumulator + curr_val
}, 0)//zero is starting value of accumulator

// console.log(myTotal);

//using arrow function

let myTotal2 = myNums.reduce(( accumulator, curr_val) => {
    return accumulator+curr_val},0)
// console.log(myTotal2);


const shoppingCart = [
    {name: 'apple', price: 1.00},
    {name: 'banana', price: 0.50},
    {name: 'orange', price: 1.50},
    {name: 'grape', price: 2.00},
    {name: 'mango', price: 3.50}
]

//want to add the prices of items in the shopping cart together using reduce() method

const totalPrice = shoppingCart.reduce((accumulator, item) => accumulator + item.price, 0)
console.log(totalPrice);
