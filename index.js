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
            <p class="active-min-ago">Active 5m ago</p>
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
        const markup = `
        <div class="main-user-post-ctn mt-5 ">
        <div class="username-post-ctn d-flex justify-content-between mt-3 mx-2">
            <div class="username-info-ctn d-flex p-1">
                <div class="username-picture-ctn">
                    <img
                        src="${user.image}"
                        alt=""
                    />
                </div>
                <div class="my-auto">
                  <p class="username-ctn x-2 my-auto p-2">${user.firstName}</p>
                </div>
              </div>
                    <div class="my-auto">
                        <i class="fa-solid fa-ellipsis my-auto p-1"></i>
                    </div>
                </div>

            <div class="user-post-ctn">
              <img src="${user.image}" alt="" />
            </div>
            <div class="posts-icons d-flex justify-content-between p-2 mx-3 ">
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
            <div class="user-desc d-flex mx-4 ">
              
              <p><strong>${user.username}</strong>  ${user.company.title}</p>
            </div>
            </div>
        </div>`;
        document
          .getElementById("post-ctn")
          .insertAdjacentHTML("beforeend", markup);
      });
    } else {
      console.error("Users data is not an array:", users);
    }
  })
  .catch((error) => console.log(error));
