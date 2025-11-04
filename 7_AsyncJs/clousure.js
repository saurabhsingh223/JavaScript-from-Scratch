// Closure:
// A closure is formed when an inner function remembers and
// can access variables from its outer function scope,
// even after the outer function has finished executing.

function outer() {
  let counter = 4;        // variable inside outer function
  return function () {    // inner function (closure)
    counter++;            // still has access to 'counter'
    return counter;
  };
}

let increment = outer();  // outer() returns the inner function
console.log(increment()); // 5
console.log(increment()); // 6
console.log(increment()); // 7

// The inner function keeps accessing 'counter' — this is closure.
