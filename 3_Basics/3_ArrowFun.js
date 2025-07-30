const user = {
    username : "saurabh",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
        // console.log(this);
        
    }
    
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this); //global spacr



function chai(){
    let username = "saurabh"
    // console.log(this);
    
    console.log(this.username);
}

// chai()



const chai = function () {
   let username = "hitesh"
//    console.log(this.username); ->undefined
}



const chai =  () => {
    let username = "hitesh"
    // console.log(this); => undefined
}


// chai()

const addTwo = (num1, num2) => {
    return num1 + num2
}
// console.log(addTwo(5,7))


// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

// const addTwo = (num1, num2) => ({username: "hitesh"})


// console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()