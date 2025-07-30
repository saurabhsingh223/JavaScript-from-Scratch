//Non_Primitive DataTypes
//1. Arrays
console.log("-----Arrays-----");

const heroes = ['shaktiman' , 'naagraj', 'krish']
console.log(heroes);
console.log(typeof heroes);

console.log(heroes[0]);

let arr = [1,'hello', true, null, undefined, [1,2], {name:'shaktiman'}];
console.log(arr);

//2. Objects
console.log("-----Objects-----");

let person = {
    name: 'shaktiman',
    age: 25,
    isStudent : true
    };

    console.log(person);
console.log("\n");

//3. Functons
console.log("-----Functions-----");
let add = function(a,b){
    return a+b;
    }
    console.log(add(5,7));

