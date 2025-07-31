// 1. Conditional
/*
if(condtiton){
    //code
}
else{
    //code
    }
    */

/*eg: 
    const isLogedin = true
    if(isLogedin){
    console.log("you are logged in") 
    } 
    else{
        console.log("you are not logged in")
    }
       # condition checking is done in the if block and the else block is executed if the condition is false
        condtion checking operators
        <, >, <=, >=, ==, !=, ===, !==, &&, ||, !,
        === is used for strict equality checking, also the data type is also checked
        != is used for inequality checking, also the data type is also checked
        eg: 2 == "2" returns true because the value is equal but the data type is different
        eg: 2 != "2" returns false because the value is equal but the data type is different
        2 === "2" returns false because the value is equal but the data type is different
    */
/*
   const score = 200
   if(score > 100){
   const power = "fly"
   console.log(`user power: ${power}`)
   } output : user power: fly

   */

const balanace = 1000;
//    implicit scope
// if(balanace>  500) console.log("test1");
/* 
    if(balanace < 500){
        console.log("test1");
    }else if( balanace< 750){
        console.log("test2");
    } else if(balanace< 1200){
        console.log("test3");
    } else {
        console.log("test4");
    } 
    */

const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

/*
    if(userLoggedIn && debitCard){ // both conditions must be true
        console.log("Allow to buy course");
    } 
    if( loggedInFromGoogle || loggedInFromEmail){ // at least one condition must be true
     console.log("user logged in"); 
    }
*/
