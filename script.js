var deleteCardOnClick = false;

function addDoneCard() {
  var columns = document.getElementById('columns');
  var card = document.createElement('div');
  card.className = "card done";
  card.id = "done";

  // title field
  var textField = document.createElement('div');
  textField.className = "card-title";
  textField.textContent = "DONE :)";
  card.appendChild(textField);

  // list of done tasks
  var taskList = document.createElement('div');
  taskList.className = "task-list";
  card.appendChild(taskList);

  columns.appendChild(card);
}

 function addCard(title) {
  var columns = document.getElementById('columns');
  var card = document.createElement('div');
  card.className = "card";
  card.id = title;
  card.onclick = function() {
    if(deleteCardOnClick) {
      columns.removeChild(card);
      deleteCardOnClick = false;
      document.getElementById('deleteCardButton').style.background = "azure";
    }
  }

  // title field
  var textField = document.createElement('div');
  textField.className = "card-title";
  textField.textContent = title;
  card.appendChild(textField);

  // color choose panel
  textField.appendChild(colorChoosePanel());

  // list of tasks
  var taskList = document.createElement('div');
  taskList.className = "task-list";

  card.appendChild(taskList);

  // task-adding button
  var taskButton = document.createElement('button');
  taskButton.className = "task";
  taskButton.textContent = "+";
  taskButton.onclick = function() {
    var tasksDiv = this.parentNode.childNodes[1]; // tasks-list
    // tasksDiv.appendChild(new Task().getTask());
    tasksDiv.appendChild(new Task().getTask());

  }
  card.appendChild(taskButton);

  // attach to columns
  columns.appendChild(card);
}

function colorChoosePanel() {

  var colorPanel = document.createElement('div');

  var colors = ["red", "green", "blue", "brown", "gray"];
  for(var i = 0; i < colors.length; i++) {
    var button = document.createElement('button');
    button.className = "card-color";
    button.style.background = colors[i];

    function setColor() {
      this.parentNode.parentNode.parentNode.style.background = this.style.background;
    }

    button.onclick = setColor;
    // button.onmouseout = setColor;

    colorPanel.appendChild(button);
  }

  return colorPanel;
}

function addTask(title) {
  var card = document.getElementById
}

// buttons
document.getElementById('newCardButton').onclick = function() {
  var newTitle = prompt("Enter title of new card:");
  if(newTitle !== "" && newTitle !== null) {
    addCard(newTitle);
  }
}

document.getElementById('deleteCardButton').onclick = function() {
  if(deleteCardOnClick) {
    deleteCardOnClick = false;
    this.style.background = "azure";
  } else {
    deleteCardOnClick = true;
    this.style.background = "red";
  }
}

// manual settings

addDoneCard();
addCard("Dev");
addCard("CERN");
addCard("Francuski");
addCard("Inne");
