function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");
  
    if (taskInput.value === "") {
      alert("Please enter a task.");
      return;
    }
  
    var task = document.createElement("li");
    task.innerHTML = taskInput.value;
  
    task.addEventListener("click", function() {
      if (this.classList.contains("completed")) {
        this.classList.remove("completed");
      } else {
        this.classList.add("completed");
      }
    });
  
    taskList.appendChild(task);
    taskInput.value = "";
  }