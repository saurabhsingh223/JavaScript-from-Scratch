let a = 10

// global scope
if(true){
    //block scope 
    let a = 20
    let b = 40
}
// console.log(a); //10


function one(username){
    username = "John"
     function two(website){
      website = "Google"
     console.log(username)
    }
    two()
    // console.log(website)
}

one();


// greet() //we can acess this before initalizing it because it is a function declaration
function greet(){
    console.log("hello");
    
}

// hello() // we cannot acess this before initalizing it because it is a function expression
const hello = function(){
    console.log("hello");
}
