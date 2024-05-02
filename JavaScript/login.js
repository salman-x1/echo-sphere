class LoginForm {
  constructor(formId) {
    this.form = document.getElementById(formId);
    this.form.addEventListener("submit", this.handleSubmit.bind(this));
  }

  handleSubmit(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    this.login(username, password);
  }

  login(username, password) {
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
        if (data && data.token) {
          this.storeUserData(username, data.token);
          this.fetchUserData(username);
        } else {
          console.error("Token not found in response:", data);
        }
      })
      .catch((error) => {
        console.error("Login error:", error);
      });
  }

  storeUserData(username, token) {
    localStorage.setItem("token", token);
    localStorage.setItem("username", username);
  }

  fetchUserData(username) {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((userData) => {
        const user = userData.users.find((user) => user.username === username);
        if (user) {
          this.storeAdditionalUserData(user);
          window.location.href = "home.html";
        } else {
          console.error("User not found in user data.");
        }
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }

  storeAdditionalUserData(user) {
    localStorage.setItem("userId", user.id);
    localStorage.setItem("userFirstName", user.firstName);
    localStorage.setItem("userLastName", user.lastName);
    localStorage.setItem("userEmail", user.email);
    localStorage.setItem("userImage", user.image);
    // Store more user data attributes as needed
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const loginForm = new LoginForm("loginForm");
});
