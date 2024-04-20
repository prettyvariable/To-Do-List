window.onload = function () {
  const inputBox = document.getElementById("input-box");
  const listContainer = document.getElementById("list-container");
  const addButton = document.querySelector("button");

  // Function to add task
  function addTask() {
    // Check if the input is empty
    if (inputBox.value === "") {
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
  // checked task and remove task
  listContainer.addEventListener(
    "click",
    function (e) {
      if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
      } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
      }
    },
    false
  );
  // Event listener for button click
  addButton.addEventListener("click", function () {
    addTask();
  });

  // Event listener for input box keyup
  inputBox.addEventListener("keyup", function (event) {
    // Check if the input is empty
    if (inputBox.value.trim() === "") {
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
