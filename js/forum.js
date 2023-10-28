function initComments() {
  // Initialize comments array
  let comments = [];

  // Function to add a comment
  function addComment(name, comment) {
    // Create new comment object
    let newComment = {
      name: name,
      comment: comment,
      likes: 0
    };
    // Add new comment to array
    comments.push(newComment);
    // Display updated comments
    displayComments();
  }

  // Function to delete a comment
  function deleteComment(index) {
    // Remove comment from array
    comments.splice(index, 1);
    // Display updated comments
    displayComments();
  }

  // Function to like a comment
  function likeComment(index) {
    // Increment likes for comment
    comments[index].likes++;
    // Display updated comments
    displayComments();
  }

  // Function to display comments
  function displayComments() {
    // Get comments list element
    let commentsList = document.getElementById("comments-list");
    // Clear comments list
    commentsList.innerHTML = "";
    // Loop through comments array and add each comment to list
    for (let i = 0; i < comments.length; i++) {
      // Create comment element
      let commentElement = document.createElement("li");
      // Create name element
      let nameElement = document.createElement("h3");
      nameElement.textContent = comments[i].name;
      // Create comment text element
      let commentTextElement = document.createElement("p");
      commentTextElement.textContent = comments[i].comment;
      // Create likes element
      let likesElement = document.createElement("p");
      likesElement.textContent = "Likes: " + comments[i].likes;
      // Create delete button
      let deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      // Add event listener to delete button
      deleteButton.addEventListener("click", function() {
        deleteComment(i);
      });
      // Create like button
      let likeButton = document.createElement("button");
      likeButton.textContent = "Like";
      // Add event listener to like button
      likeButton.addEventListener("click", function() {
        likeComment(i);
      });
      // Add elements to comment element
      commentElement.appendChild(nameElement);
      commentElement.appendChild(commentTextElement);
      commentElement.appendChild(likesElement);
      commentElement.appendChild(deleteButton);
      commentElement.appendChild(likeButton);
      // Add comment element to comments list
      commentsList.appendChild(commentElement);
    }
  }

  // Add event listener to form submit button
  let submitButton = document.getElementById("submit-button");
  submitButton.addEventListener("click", function(event) {
    event.preventDefault();
    let name = document.getElementById("name").value;
    let comment = document.getElementById("comment").value;
    addComment(name, comment);
  });
}
document.addEventListener("DOMContentLoaded", initComments);