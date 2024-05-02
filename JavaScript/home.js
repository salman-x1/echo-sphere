// Showing Users in the Message Container
const apiUrlUser = "https://dummyjson.com/users";

fetch(apiUrlUser)
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    const users = data.users; // Access the array of users
    console.log(users); // Log the data to inspect its structure
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

// Showing Users and Comments in the Post Section
const apiURLpost = "https://dummyjson.com/posts";
const apiURLcomment = "https://dummyjson.com/comments";

fetch(apiURLpost)
  .then((res) => {
    return res.json();
  })
  .then((postData) => {
    const posts = postData.posts; // Assuming 'posts' is the correct property name containing posts

    fetch(apiUrlUser)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        // console.log(data); // Log the data to inspect its structure
        const users = data.users; // Access the array of users
        if (Array.isArray(users)) {
          users.forEach((user, index) => {
            // Use 'user' as the loop parameter instead of 'post'
            // const userIndex = index % users.length;
            const currentUser = users[index]; // Use 'currentUser' to avoid confusion with 'user'
            fetch(`https://dummyjson.com/comments/post/${posts[index].id}`)
              .then((res) => res.json())
              .then((data) => {
                // console.log(posts[index].id, "hi");
                const comments = data.comments;
                // console.log(comments, "c");
                // console.log(comments[index].body, "body");
                const markup = `
                    <div class="main-user-post-ctn mt-3">
                      <div class="username-post-ctn d-flex justify-content-between mt-3 mx-2">
                        <div class="username-info-ctn d-flex p-1">
                          <div class="username-picture-ctn">
                            <img src="${currentUser.image}" alt="" />
                          </div>
                          <div class="my-auto mx-2">
                            <p class="username-ctn my-auto "><strong>${
                              currentUser.firstName
                            } ${currentUser.lastName}</strong></p>
                            <small>${currentUser.username}</small>
                          </div>
                        </div>
                        <div class="my-auto">
                          <i class="fa-solid fa-ellipsis my-auto p-1"></i>
                        </div>
                      </div>
                      <div class="user-post-ctn">
                        <img src="./Images/person2.jpg" alt="" />
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
                        <p><strong>${users[index].username}</strong></p>
                        
                        </div>
                        <p class=""> ${posts[index].body}</p>
                      </div>
                      <div class="mx-3">
      
                      <h6 class="mx-2"><strong>Comments</strong></h6>
                      <div class="mx-2">
                          <p>
                           ${
                             comments.length > 0
                               ? comments
                                   .map(
                                     (comment) => `
                            <div class="comment-body py-1">
                            <span class=""><b>${comment.user.username}</b> ${comment.body}</span>
                            </div>`
                                   )
                                   .join("")
                               : ""
                           } 
                          </p>
                      </div>
      
                      <div class="comments-show-ctn p-2 mx-2">
                      <div class="comments-show" id="showComments-${
                        posts[index].id
                      }">
                      <h5 id="loginUserName"></h5>
                      
                      <!-- Comments will be dynamically added here -->
                    </div>
                  </div>
      
                  <div class='commentInput-ctn d-flex'>

                   <input class="commentInput" id="inputComment-${
                     posts[index].id
                   }" class="w-100 py-2" type="text" placeholder="Enter Comments">
                        <i class="fa fa-paper-plane" aria-hidden="true" onclick="addcommentfun(${
                          posts[index].id
                        })"></i>
                      </div>                      
                    </div>
                  </div>
                  `;
                // Create markup for each user and corresponding post

                document
                  .getElementById("post-ctn")
                  .insertAdjacentHTML("beforeend", markup);
              });
          });
        } else {
          console.error("Users data is not an array:", users);
        }
      })
      .catch((error) => console.log(error));
  });


  // Search Users 
  


//Function for Adding Comments in Posts

function addcommentfun(postId) {
  let commentInput = document.getElementById(`inputComment-${postId}`).value;

  fetch("https://dummyjson.com/comments/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      body: commentInput,
      postId: postId,
      userId: 5, // Assuming the user ID is hardcoded for now
    }),
  })
    .then((res) => res.json())
    .then((commentData) => {
      let commentShow = document.getElementById(`showComments-${postId}`);

      // Retrieve the first name of the user who added the comment
      const commentUsername = localStorage.getItem("userFirstName");

      // Create a new element to display the user's first name
      let usernameElement = document.createElement("span");
      usernameElement.textContent = commentUsername;
      usernameElement.style.fontWeight = "bold";

      // Create a new div to hold the comment and the user's first name
      let commentDiv = document.createElement("div");
      commentDiv.style.display = "flex";
      commentDiv.style.alignItems = "center";
      commentDiv.style.marginBottom = "10px";

      // Create a span to display the comment text
      let commentText = document.createElement("span");
      commentText.textContent = commentData.body;
      commentText.style.flex = "1";
      commentText.style.marginRight = "10px";

      // Create buttons container to align buttons to the right side
      let buttonsContainer = document.createElement("div");

      // Create buttons for editing and deleting the comment
      let editButton = document.createElement("button");
      editButton.textContent = "Edit";
      editButton.style.marginLeft = "5px";
      editButton.onclick = function () {
        editComment(commentData.id, commentText);
      };

      let deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.style.marginLeft = "5px";
      deleteButton.onclick = function () {
        deleteComment(commentData.id, commentDiv);
      };

      // Append elements to their respective containers
      buttonsContainer.appendChild(editButton);
      buttonsContainer.appendChild(deleteButton);
      commentDiv.appendChild(usernameElement);
      commentDiv.appendChild(commentText);
      commentDiv.appendChild(buttonsContainer);
      commentShow.appendChild(commentDiv);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}


// Edit Comments in Post

function editComment(commentId, commentTextElement) {
  let updatedComment = prompt(
    "Edit your comment:",
    commentTextElement.textContent
  );
  if (updatedComment !== null) {
    fetch(`https://dummyjson.com/comments/${commentId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        body: updatedComment,
      }),
    })
      .then((res) => res.json())
      .then((updatedData) => {
        // Update the comment text in the UI
        commentTextElement.textContent = updatedData.body;
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
}

// Delete Comment in Post
function deleteComment(commentId, commentElement) {
  fetch(`https://dummyjson.com/comments/${commentId}`, {
    method: "DELETE",
  })
    .then(() => {
      // Remove the comment element from the UI
      commentElement.remove();
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
window.addEventListener("scroll", ()=> {
  const {scrollTop, scollHeight, clientHeight} = document.documentElement;
  if (scrollTop + clientHeight>= scollHeight -5 ) {
    
  }
})

function routingLogin() {
  const token = localStorage.getItem("token");
  if (!token) {
    window.location.href = "index.html";
  }
}
routingLogin();


function logout() {
  localStorage.removeItem("token");
  window.location.href="index.html"
}



