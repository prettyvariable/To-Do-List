const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

inputBox.addEventListener("keyup", function(event) {
  if (event.key === "Enter") {
    
    // Validating text input
    let textValidator = this.validator.message('text', this.state.text, 'required|text');
    
    let inputClassName = textValidator ? 'border-red' : 'border-default';

    // Rendering the input box with appropriate class based on validation
    inputBox.innerHTML = `
      <div>
        <input class="${inputClassName}" />
      </div>
    `;

    addTask(this.value);
    this.value = "";
  }
});

// Add task
function addTask() {
  if(inputBox.value === ''){
    alert("Write something");
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
