const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// Click Enter event
inputBox.addEventListener("keyup", function(event){
  if (event.key == "Enter") {
    addTask(this.value)
    this.value = ""
  }
})

// Add task
function addTask() {
  if(inputBox.value === ''){
    alert("Write something");
    inputBox.classList.add("border-red");
    inputBox.addEventListener('focus', function() {
      // Change the border color to transparent when the input box is active
      this.style.borderColor = 'transparent';
  });
  }
  else{
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
  saveData();
}

// checked task and remove task
listContainer.addEventListener("click", function(e){
  if(e.target.tagName === "LI"){
    e.target.classList.toggle("checked");
    saveData();
  }
  else if(e.target.tagName === "SPAN"){
    e.target.parentElement.remove();
    saveData();
  }
}, false);

// Save local data
function saveData(){
  localStorage.setItem("data", listContainer.innerHTML);
}

function showTask(){
  listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
