let a = 10;
let b = a;
console.log(b);
b = 20;
console.log(a); //changing b does not effect a because a is a primitive value and that is known as pass by value
console.log(b);                                                                                                                                                                                                                                                              

//symbol
const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);

//big int
const bigInt = 123456789012345678901n