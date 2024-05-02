document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("loginForm");

  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Call the login API
    fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: username,
        password: password,
        expiresInMins: 30, // optional, defaults to 60
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        // Check if token exists in the response
        if (data && data.token) {
          // Store token and username in localStorage
          localStorage.setItem("token", data.token);
          localStorage.setItem("username", username);

          // Fetch user data from the specified endpoint
          fetch("https://dummyjson.com/users", {
            method: "GET",
          })
            .then((res) => res.json())
            .then((userData) => {
              // Assuming userData is an array of users
              const users = userData.users;
              console.log(users);

              // Assuming you want to store attributes of the first user
              
              const user = users.find((user)=> user.username === username )
                localStorage.setItem("userId", user.id);
                localStorage.setItem("userFirstName", user.firstName);
                localStorage.setItem("userLastName", user.lastName);
                localStorage.setItem("userEmail",user.email);
                localStorage.setItem("userImage",user.image)
                // Store more user data attributes as needed
              

              // Redirect to index.html
              window.location.href = "home.html";
            })
            .catch((error) => {
              console.error("Error fetching user data:", error);
            });

        } else {
          console.error("Token not found in response:", data);
        }
      })
      .catch((error) => {
        console.error("Login error:", error);
      });
  });
});


// Log token and user data in console
              // console.log("Token:", data.token);
              // console.log("User Data:", userData);
