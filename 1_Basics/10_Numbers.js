//normal of declaring numbers
let num = 100
console.log(num);

//professional way of declaring num
let newnum = new Number(200)
console.log(newnum);

console.log(newnum.toString().length)


console.log(newnum.toFixed(2))


let other = 123.4667
console.log(other.toFixed(2));
console.log(other.toPrecision(4));

let num2 = 1000000
console.log(num2.toLocaleString());

console.log(Math.max(other, num2));

