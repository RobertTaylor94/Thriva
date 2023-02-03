//document selectors
let addTaskBtn = $("#add-button");
let taskInput = $(".task-input");
let taskOutput = $("#task-output");
let taskForm = $("#task-form");
let taskDisplay = $("#task-display");
let taskText = $("#daily-task");
let progressBar = $("#progress-bar");

function addTask(event) {
    event.preventDefault();

    var task = taskInput.val().trim();
    console.log(task);
    taskText.val(task);
    taskInput.val("");

    taskForm.css("display", "none");
    taskDisplay.css("display", "block");
    addTaskBtn.css("display", "none");
    progressBar.css("display", "block");
    taskText.text(task);
}

function saveTask() {

}

//save and display task on button press
addTaskBtn.on("click", addTask);