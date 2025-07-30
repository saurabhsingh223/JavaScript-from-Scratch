console.log("Learning about the strings");
console.log("\n");

let name = "saurabh";
let count = 0;
let canVote = false;
let age = 18;
console.log("Normal way of adding all them: "+"name is "+ name+ ",count is "+ +count+ ", can vote " +canVote+ + ", age is "+ age);
console.log("\n");
console.log("Another professional way of adding strings and another data types:");
console.log(`name is ${name}, count is ${count}, can vote ${canVote}, age is ${age}`);
console.log("\n");

//another/Modern way of declaring strings 
const game = new String("pubg");
console.log(game);
console.log(game[1]);
console.log(game.__proto__);

console.log("Methods for strings:");
console.log(game.length);//used to find the length of string
console.log(game.charAt(0)); //used to find the character at the specified index
console.log(game.indexOf('g')); //used to find the index of the specified character
// console.log(game.toLocaleLowerCase);
console.log(game.toUpperCase());

//substring
const newString = game.substring(0, 3)
console.log("Substring is: "+newString);

//slice 
const antoherString = game.slice(-4, 3)
console.log(antoherString);

//trim() use to remove empty space
let newString1 = "    saurabh    "
console.log("Original String-> "+ newString1);
console.log("trim String-> "+ newString1.trim());

//replace(old value, new value)
let link = "http//google%20sksinghs.co"
console.log("original strinnng-> "+ link)
console.log("replaced value string" + link.replace('%20', '_'));

//inclue() used t search elemnt is string
console.log(link.includes('google'))
console.log(link.includes('amazon'))

//split() method
let newStr = "hello bhai kya haal hai"
console.log(newStr);
console.log(newStr.split(' '));





// console.log(game.charAt(4));
// console.log(game.indexOf('s'));


// let namee = new String("saurabh")
// console.log(namee);

