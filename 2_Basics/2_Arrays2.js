const marvel = ["thor", "ironman", "captain"];
const dc = ["batman", "superman", "wonderwoman"];
// 1. push() method to add two arrays, but it return another array as a individual ellement in the first array

marvel.push(dc)
// console.log(marvel);
// console.log(marvel[3]);
// console.log(marvel[3][1]);


//2. concat() method return new array after adding two arrays

const allHero = marvel.concat(dc);
// console.log(allHero);


//alternate better option is
//3. spread method, we can add many arrays by using spread  method

const allheroes = [...marvel, ...dc]
// console.log(allheroes);


//4. flat(): use to concat array in which many array into usable array
const arr = [1, 2, 6,[1, 2], 4, [1, 2, [4, 5]] ]
const usableArray = arr.flat(Infinity)
// console.log(arr);
// console.log(usableArray);

//5. Array.isArray(): used to check that element is array or not
// Array.isArray()
// console.log(Array.isArray(marvel))
// console.log(Array.isArray("saurabh"))

//5. Array.from() : use  to covert string into array
// Array.from()
// console.log(Array.from('saurabh'));
// console.log(Array.from({name : 'saurabh'})); //return empty array because it does not work on objects

//6. Araay.of(): convert multiple varivbales into array
// Array.of()
let x = 10, y = 5, z = 6
console.log(Array.of(x, y, z));

