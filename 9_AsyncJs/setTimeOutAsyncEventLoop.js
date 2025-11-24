function sayHello() {
  console.log("I would like to say Hello");
}

setTimeout(() => {
  sayHello();
}, 4000);

console.log("chaicode");

for (let index = 0; index < 10; index++) {
  console.log(index);
}


// Event Loop:
// JS is single-threaded. Event Loop manages async tasks.
// It checks if Call Stack is empty, then moves callbacks
// from Task Queue/Microtask Queue to the Call Stack.

// Async JavaScript:
// Allows code to run without waiting (non-blocking).
// Uses callbacks, Promises, async/await to handle operations
// like API calls, timers, etc.
