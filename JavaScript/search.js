function search() {
  const inputSearch = document.getElementById("searchInput").value.trim();
  if (inputSearch !== "") {
  }
}

function searchPost(input) {
  fetch(`https://dummyjson.com/posts}`)
    .then((res) => res.json())
    .then((data) => {
      inputData = data.inputData;
      console.log("Input Search", inputData);
    });
}
