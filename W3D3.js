const taskList = [];

// aggiungere task
function addTask() {
  const taskInput = document.getElementById("taskInput");
  const task = taskInput.value;
  taskList.push({ name: task, completed: false });
  taskInput.value = "";
  displayTasks();
}

// segnare task completata
function markTaskCompleted(index) {
  taskList[index].completed = true;
  displayTasks();
}

// rimuovere task
function removeTask(index) {
  taskList.splice(index, 1);
  displayTasks();
}

// display tutte le tasks
function displayTasks() {
  const taskContainer = document.getElementById("taskContainer");
  taskContainer.innerHTML = "";

  taskList.forEach((task, index) => {
    const taskItem = document.createElement("li");
    const taskName = document.createTextNode(task.name);

    if (task.completed) {
      taskItem.style.textDecoration = "line-through";
    }

    const completeButton = document.createElement("button");
    completeButton.innerHTML = "D-d-done!";
    completeButton.addEventListener("click", () => markTaskCompleted(index));

    const removeButton = document.createElement("button");
    removeButton.innerHTML = "Giving up is okay too";
    removeButton.addEventListener("click", () => removeTask(index));

    taskItem.appendChild(taskName);
    taskItem.appendChild(completeButton);
    taskItem.appendChild(removeButton);
    taskContainer.appendChild(taskItem);
  });
}

displayTasks();
