//Promise state --> pending,resolve,reject


// let promise0 = new Promise((resolve, reject) => {
//   console.log("I am a promise");
// })



// A function that returns a promise
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true; // Simulating a condition

      if (success) {
        resolve("Data fetched successfully!");
      } else {
        reject("Failed to fetch data.");
      }
    }, 2000); // Simulating a 2-second delay
  });
}

// Using the promise
fetchData()
  .then((message) => {
    console.log(message); // Logs: "Data fetched successfully!"
  })
  .catch((error) => {
    console.error(error); // Handles any error
  })
  .finally(() => {
    console.log("Operation completed."); // Always runs
  });
