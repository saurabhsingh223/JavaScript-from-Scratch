//for each and filter()
/*
The filter() method is used to create a new array containing only the elements that pass a test condition.

✅ Syntax:
const result = array.filter((element, index, array) => {
  return condition;
});
✅ Example:
const nums = [10, 25, 30, 45];
const over30 = nums.filter(num => num > 30);

console.log(over30); // [45]
*/


const lang = [ "js", "java", " python", "c++", "c#" ]; // list of programming languages

lang.forEach((item) => {
    // console.log(item); // prints each item in the list
})

// storing the forEach function in a variable
 const values = lang.forEach((item) => {
    // console.log(item); // prints each item in the list
    return item; 
 })


// console.log(values); // prints undefined
// for each on numbers

const number = [1,2,3,4,5,6]
const newNum = []
number.forEach( (num) => {
    if(num > 4){
        newNum.push(num)
    }
})
// console.log(newNum); // prints [5,6]


// filter() : returns a new array with all elements that pass the test implemented by the provided function 
const nums = [ 1, 2, 3, 4, 5];

const myNums = nums.filter((num) => num > 3) 
// console.log(myNums); // prints [ 4, 5 ]




const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userBooks = books.filter( (book) => book.genre === 'History')

//   console.log(userBooks); // prints [ { title: 'Book Three', genre: 'History', publish: 1999

    userBooks = books.filter((book) => book.publish < 2000)
//or
// const userBooks2 = books.filter(book => { return book.publish < 2000})
//if we create a block of code inside the filter function, we can use return keyword to return the value of the condition 
//   console.log(userBooks);

  userBooks = books.filter( (book) => {
    return book.publish < 2000 && book.genre === 'History'
  })
    // console.log(userBooks); // prints [ { title: 'Book Three', genre: 'History', publish: 1999 , edition: 2007 },
  