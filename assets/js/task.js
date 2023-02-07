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
    //get user input from text field
    var task = taskInput.val().trim();
    console.log(task);
    taskText.val(task);
    taskInput.val("");

    //hide input form and show inputted task and timer
    taskForm.css("display", "none");
    taskDisplay.css("display", "block");
    addTaskBtn.css("display", "none");
    progressBar.css("display", "none");
    taskText.text(task);
    saveTask(task);
}

function saveTask(task) {
    //Store user input to local storage
    localStorage.setItem("task", JSON.stringify(task));
}

function retrieveTask() {
    //retrieve user task from local storage
    task = JSON.parse(localStorage.getItem("task"));

    //if no task saved then display the form for submitting a new task for the day
    if (!task) {
        taskForm.css("display", "block");
        addTaskBtn.css("display", "block");
        taskDisplay.css("display", "none");
    } else {
        //if a task has been saved show the task and hide the form
        taskForm.css("display", "none");
        taskDisplay.css("display", "block");
        addTaskBtn.css("display", "none");
        progressBar.css("display", "none");
        taskText.text(task);
    }
}

function clearTask() {
    localStorage.removeItem("task");
}

//save and display task on button press
addTaskBtn.on("click", addTask);