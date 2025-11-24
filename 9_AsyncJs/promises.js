// Promise:
// A Promise represents a value that will be available in the future.
// It handles async operations (like API calls, timers).
// .then() is used when Promise resolves (success).
// .catch() is used when Promise rejects (error).

function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let success = true;

      if (success) {
        resolve("Data fetched successfully"); // Promise fulfilled
      } else {
        reject("Error fetching data"); // Promise rejected
      }
    }, 3000);
  });
}

fetchData()
  .then((data) => {
    console.log(data);        // Output: "Data fetched successfully"
    return data.toLowerCase(); // returning value to next .then()
  })
  .then((value) => {
    console.log(value);       // Output: "data fetched successfully"
  })
  .catch((error) => console.error(error)); // handles any error


  // Promises help avoid "callback hell" by providing cleaner async code.

// Promise States:
// 1) pending   → waiting
// 2) fulfilled → success (resolve())
// 3) rejected  → failure (reject())

// Promise Chaining:
// Each .then() returns a new Promise, allowing sequential execution.

// .catch():
// Catches errors from any previous .then() in the chain.

// Async Operation Example:
// setTimeout/fetch/API calls return results in the future,
// and Promises wait for that result without blocking the program.
