// A function that simulates fetching data from a server
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true; // Simulating a condition
      console.log("I am inside the promise");
      if (success) {
        resolve("Data fetched successfully!");
      } else {
        reject("Failed to fetch data.");
      }
    }, 2000); // Simulating a 2-second delay
  });
}

// An async function to handle the fetchData operation
async function handleData() {
  await fetchData();
  await fetchData();
  await fetchData();
}

// Call the async function
handleData();
