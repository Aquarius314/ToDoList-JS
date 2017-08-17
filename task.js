class Task {
  constructor() {
    var taskName = prompt("Enter new task name:");
    if(taskName === null || taskName === "") {
      return null;
    }
    this.taskField = document.createElement('div');
    this.taskField.className = "task";

    this.name = taskName;
    this.text = document.createElement('textarea');
    this.text.className = "task-text";
    this.text.textContent = taskName;

    this.isDone = false;
    this.checkButton = document.createElement('button');
    this.checkButton.className = "task-check";
    this.checkButton.textContent = "✓";
    this.checkButton.style.float = "right";
    this.checkButton.style.margin = "0px";
    this.checkButton.onclick = function() {
      if(!this.isDone) {
        var t = this.parentNode.childNodes[0];
        t.style.textDecoration = "line-through";
        t.style.color = "rgb(140, 140, 140)";
        this.textContent = "×";
        this.isDone = true;
      } else {
        var parentTask = this.parentNode;
        parentTask.childNodes[0].style.textDecoration = "none";
        parentTask.childNodes[0].readOnly = "true";
        parentTask.childNodes[0].style.color = parentTask.parentNode.parentNode.style.background;
        console.log(parentTask.parentNode.parentNode);
        parentTask.removeChild(this);
        var tasksParent = parentTask.parentNode;
        tasksParent.removeChild(parentTask);
        document.getElementById("done").childNodes[1].appendChild(parentTask);
      }
    }

    this.taskField.appendChild(this.text);
    this.taskField.appendChild(this.checkButton);
  }

  getTask() {
    return this.taskField;
  }

  createTask() {
    var task = document.createElement('div');
    task.className = "task";
    var name = prompt("Enter new task name:");
    if(name !== null && name !== "") {
      task.textContent = name;
    } else {
      return null;
    }
    var checkButton = document.createElement('button');
    checkButton.className = "task-check";
    checkButton.textContent = "✓";
    checkButton.style.float = "right";
    checkButton.style.margin = "0px";
    task.appendChild(checkButton);

    return task;
  }

}

function createTask() {
  var task = document.createElement('div');
  task.className = "task";
  var name = prompt("Enter new task name:");
  if(name !== null && name !== "") {
    task.textContent = name;
  } else {
    return null;
  }
  var checkButton = document.createElement('button');
  checkButton.className = "task";
  checkButton.textContent = "✓";
  checkButton.style.float = "right";
  checkButton.style.margin = "0px";
  task.appendChild(checkButton);

  return task;
}
