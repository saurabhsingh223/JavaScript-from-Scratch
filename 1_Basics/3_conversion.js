
// *******************CONVERSION*********************

//conversion to number
console.log("conversion to number");

let age = "23"
let score = "23abc"

console.log(age+"=> "+typeof(age))
console.log(score+"=> "+typeof score)

let valInNumber = Number(age)
console.log(valInNumber);

console.log(typeof valInNumber)

let valInNum = Number(score)
console.log(valInNum) // NaN: Not a Number

/*coversion to Number*/
// "33" => 33
//"33anb" => NaN
//true => 1, false=> 0
// null => 0
// undefined => NaN


//coversion to bollean
console.log("conversion to boolean");

let isLoggedIn = 1
console.log(typeof isLoggedIn);

let bolleanIsLoggetIn = Boolean(isLoggedIn)
console.log(bolleanIsLoggetIn) // true

/*conversion to boolean
1 => true
"" => false
0 => false
"saurabh" => true*/

//conversion to string
console.log("Conversion to string");

let num = 345
console.log(typeof num);

let strNum = String(num)
console.log(strNum) // "345"
console.log(typeof strNum);


//*****************OPERATION************* */

