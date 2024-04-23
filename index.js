// const apiURL = "https://jsonplaceholder.typicode.com/users";
// console.log(fetch(apiURL));
// const username = document.getElementById("username");

// fetch(apiURL)
//   .then((response) => {
//     if (!response) {
//       throw new Error("Network Error is not ok");
//     }
//     return response.json();
//   })
//   .then((userData) => {
//     console.log("User Data", userData);
//   })
//   .catch((error) => {
//     console.error("Error is", error);
//   });

// fetch(apiURL, {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json"
//   },
//   body: JSON.stringify({
//     name: "Salman 1",
//   }),
// })
//   .then((res) => {
//     return res.json();
//   })
//   .then((data) => console.log(data))
//   .catch((error) => console.log("ERROR", error));
