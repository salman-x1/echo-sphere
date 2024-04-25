const apiURL = "https://dummyjson.com/users";
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

// *************
// Real
// *************
fetch(apiURL)
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(data); // Log the data to inspect its structure
    const users = data.users; // Access the array of users
    if (Array.isArray(users)) {
      users.forEach((user) => {
        // Create markup for each user
        const markup = `<div class="message-users d-flex mt-2">
          <div class="message-users-profile">
            <img src="${user.image}" alt="">
          </div>
          <div class="message-username">
            <h5>${user.firstName}</h5>
            <p class="active-min-ago">${user.domain}</p>
          </div>
        </div>`;
        document
          .getElementById("message-users-ctn")
          .insertAdjacentHTML("beforeend", markup);
      });
    } else {
      console.error("Users data is not an array:", users);
    }
  })
  .catch((error) => console.log(error));

// POST
const apiURLpost = "https://dummyjson.com/posts";
fetch(apiURLpost)
  .then((res) => {
    return res.json();
  })
  .then((postData) => {
    const posts = postData.posts; // Assuming 'posts' is the correct property name containing posts

    fetch(apiURL)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data); // Log the data to inspect its structure
        const users = data.users; // Access the array of users
        if (Array.isArray(users)) {
          users.forEach((user, index) => {
            // Use 'user' as the loop parameter instead of 'post'
            const userIndex = index % users.length;
            const currentUser = users[userIndex]; // Use 'currentUser' to avoid confusion with 'user'

            // Create markup for each user and corresponding post
            const markup = `
              <div class="main-user-post-ctn mt-5">
                <div class="username-post-ctn d-flex justify-content-between mt-3 mx-2">
                  <div class="username-info-ctn d-flex p-1">
                    <div class="username-picture-ctn">
                      <img src="${currentUser.image}" alt="" />
                    </div>
                    <div class="my-auto mx-2">
                      <p class="username-ctn my-auto "><strong>${currentUser.firstName} ${currentUser.lastName}</strong></p>
                      <small>${currentUser.username}</small>
                    </div>
                  </div>
                  <div class="my-auto">
                    <i class="fa-solid fa-ellipsis my-auto p-1"></i>
                  </div>
                </div>
                <div class="user-post-ctn">
                  <img src="./Images/person1.jpg" alt="" />
                </div>
                <div class="posts-icons d-flex justify-content-between p-2 mx-3">
                  <div class="posts-icons-reactions">
                    <i class="fa-regular fa-heart"></i>
                    <i class="fa-regular fa-comment"></i>
                    <i class="fa-solid fa-share-nodes"></i>
                  </div>
                  <div class="posts-icons-reactions">
                    <i class="fa-regular fa-bookmark"></i>
                  </div>
                </div>
                <div class="post-liked-ctn mx-4">
                  <p>Liked by <strong>salmannaz1r</strong> and 6,992 others</p>
                </div>
                <div class="user-desc mx-4">
                  <div class='d-flex'>
                  <p>${users[index].username}</p>
                  <p><strong>&nbsp  ${posts[index].title}</strong></p>
                  </div>
                  <p> ${posts[index].body}</p>
                </div>
              </div>
            `;

            document
              .getElementById("post-ctn")
              .insertAdjacentHTML("beforeend", markup);
          });
        } else {
          console.error("Users data is not an array:", users);
        }
      })
      .catch((error) => console.log(error));
  });
