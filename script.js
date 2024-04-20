// script.js

window.onload = function() {
  const inputBox = document.getElementById("input-box");
  const listContainer = document.getElementById("list-container");

  inputBox.addEventListener("keyup", function(event) {
    // Check if the input is empty
    if (inputBox.value.trim() === '') {
      // Add the 'border-red' class to the input
      inputBox.classList.add("border-red");
    } else {
      // Remove the 'border-red' class from the input
      inputBox.classList.remove("border-red");
    }

    // If Enter key is pressed, add the task
    if (event.key === "Enter") {
      addTask();
    }
  });

  // Function to add task
  function addTask() {
    // Check if the input is empty
    if (inputBox.value === '') {
      alert("Write something");
      // Add the 'border-red' class to the input
      inputBox.classList.add("border-red");
      return; // Exit the function early if input is empty
    }

    // If input is not empty, proceed to add the task
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);

    // Clear the input box
    inputBox.value = "";

    // Save the updated list to local storage
    saveData();
  }

  // Load saved tasks from local storage
  function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
  }

  // Save tasks to local storage
  function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
  }

  // Call the function to load saved tasks when the page loads
  showTask();
};


