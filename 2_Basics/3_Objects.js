//constructor method of declaring objects
// object.create{} -> make singletons

//creating symbol for adding int he object as key in the object
const sym = Symbol('key1')

//object literals

const jsUser = {
    name : 'saurabh',
    'fullName' : 'saurabh singh',
    [sym] : 'myKey1',
    age : 25,
    location : 'delhi',
    email : 'saurabh@gmail.com',
    loginDays: ['mon', 'tue', 'wed']
}

//acessing the objects
console.log(jsUser);
// console.log(jsUser.name);



// better method 
console.log(jsUser['name']);
console.log(jsUser['fullName']);
console.log(jsUser[sym]);
// console.log(typeof jsUser[sym]);
//changing values
jsUser.email = 'sksing@gml'
// Object.freeze(jsUser) //to freeze the specific value so that no one can change
jsUser.email = 'abc@gml.com'

// adding function to our object
//functions can be treated as variables, there is no any problem
jsUser.greeting = function(){
    console.log('hello');
    }
    jsUser.greeting();
 
    jsUser.greetingTwo = function(){
    console.log(`hello ${this.name}`); //this keyword is used to access the current object
    } //we can also use ${ jsUser.name} instead of this.name
    jsUser.greetingTwo();