// Task 01:
async function iterateWithAsyncAwait(values) {
    for (let value of values) {
      await new Promise(resolve => setTimeout(resolve, 1000)); 
      console.log(value);
    }
  }
  
  // Task 02 & Task 03:
  async function awaitCall() {
    try {
      const data = await new Promise((resolve, reject) => {
        setTimeout(() => {
          if (Math.random() > 0.5) resolve("Data fetched successfully!");
          else reject(new Error("Failed "));
        }, 1000);
      });
      console.log(data);
    } catch (error) {
      console.error("Error");
    }
  }
  
  // Task 04: 
  async function chainedAsyncFunctions() {
    const first = async () => {
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log("First function completed");
    };
  
    const second = async () => {
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log("Second function completed");
    };
  
    const third = async () => {
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log("Third function completed");
    };
  
    await first();
    await second();
    await third();
  }
  
  // Task 05: 
  async function concurrentRequests() {
    const fetchAPI1 = new Promise(resolve => setTimeout(() => resolve("Data from API 1"), 1000));
    const fetchAPI2 = new Promise(resolve => setTimeout(() => resolve("Data from API 2"), 1000));
  
    const results = await Promise.all([fetchAPI1, fetchAPI2]);
    console.log("Concurrent Results:", results);
  }
  
  // Task 06: 
  async function parallelCalls() {
    const call1 = async () => {
      await new Promise(resolve => setTimeout(resolve, 1000));
      return "Parallel Call 1 completed";
    };
  
    const call2 = async () => {
      await new Promise(resolve => setTimeout(resolve, 1000));
      return "Parallel Call 2 completed";
    };
  
    
    const results = await Promise.all([call1(), call2()]);
    console.log("Parallel Results:", results);
  }
  
  
  
  iterateWithAsyncAwait([1, 2, 3, 4, 5]);
  awaitCall();
  chainedAsyncFunctions();
  concurrentRequests();
  parallelCalls();
  