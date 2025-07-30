console.log("1-> " + (2 > 1));
console.log("2-> " +(2 >= 1));
console.log("3-> " +(2 < 1));
console.log("4-> " +(2 == 1));
console.log("5-> " +(2 != 1));

console.log("6-> " +("2" > 1)); //Js automatically converst string to number for comparison
console.log("7-> " +("02" > 1));

//alway avoid these kind of comparison for better and clean code
console.log("8-> " +(null > 0));
console.log("9-> " +(null == 0));//
console.log("10-> " +(null >= 0)); //these both are treated as different
console.log("11-> " +(null <= 0));
/*“The reason is that an equality check == and comparisons > < >= <= work differently.
Comparisons convert null to a number, treating it as 0.
 That's why (3) null >= 0 is true and (1) null > 0 is false.”*/
 //comparisons( < , > , <=, >= ) and equality check works differently in js
console.log("12-> " +(undefined == 0));
console.log("13-> " +(undefined < 0));
console.log("14-> " +(undefined > 0));
