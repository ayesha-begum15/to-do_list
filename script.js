// Get tasks from local storage
var tasks = JSON.parse(localStorage.getItem("tasks"));
// localstorage - BROWSER & JSON.parse - converts the STRING to an ARRAY

if (tasks == null) {
  tasks = [];
}

// Show tasks when (BROWSER)page loads
showTasks();

function addTask() {
  var input = document.getElementById("taskInput");
  var text = input.value;

  if (text == "") {
    return;
  }

  // Add new task
  tasks.push({ text: text, done: false });

  input.value = "";

  saveData();
  showTasks();
}
function showTasks() {
  var list = document.getElementById("list");
  list.innerHTML = "";

  for (var i = 0; i < tasks.length; i++) {
    var li = document.createElement("li");

    //TASK TEXT
    var span = document.createElement("span");
    span.innerHTML = tasks[i].text;

    if (tasks[i].done) {
      span.classList.add("done");
    }

    // Click to mark complete
    span.onclick = makeDone.bind(null, i);

    // Delete button
    var delBtn = document.createElement("button");
    delBtn.innerHTML = "Delete";
    delBtn.onclick = deleteTask.bind(null, i);

    li.appendChild(span);
    li.appendChild(delBtn);

    list.appendChild(li);
  }
}
function makeDone(index) {
  tasks[index].done = !tasks[index].done;
  saveData();
  showTasks();
}

function deleteTask(index) {
  tasks.splice(index, 1);
  saveData();
  showTasks();
}

function saveData() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
