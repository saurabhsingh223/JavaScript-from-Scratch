// Dates

let myDate = new Date()
console.log(myDate);
console.log(typeof myDate);

console.log(myDate.toDateString());
console.log(myDate.toLocaleString());

let newDate = new Date(2002,2,22, 0 ,3)
console.log(newDate.toDateString());
console.log(newDate.toLocaleString());

//timestamp
let timestamp = Date.now()
console.log(timestamp);

console.log(Math.round(Date.now()/1000));
