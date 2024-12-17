/*
//Async Operation Chapter

//Sync code
console.log("start");
console.log("middle");
console.log("end");

//Async code 
console.log("start");
setTimeout(() => console.log("middle"), 2000);
console.log("end");     

//Fetch

//c//onst url = "https://jsonplaceholder.typicode.com/todos/1"
//fetch(url)
//   .then((res) => res.json())
//   .then((res) => console.log(res))
//   .catch((error) => console.log(err)); */

//Using Async/Await with Fetch:
async function fetchData(){
   try{
      const response = await fetch (url);
      const data = await response.json();
      console.log(data);

   } catch (error){
    console.error("Error",error);
   }
};



 



