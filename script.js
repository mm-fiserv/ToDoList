// add task functionality
function addTask() {
    // get the input field and task list elements
    let taskInput = document.getElementById("new-task");
    let taskList = document.getElementById("incomplete-tasks");
 
    // console.log('taskInputs value: ', taskInput.textContent);
   
    // check if input field is not empty or contains only whitespace
    if (taskInput.value.trim() != "") {
        // create a new list item
 
        let li = document.createElement("li");
        let lab = document.createElement("label");
        lab.innerHTML = taskInput.value;
        li.appendChild(lab);
       
        let deleteButton = document.createElement("button");
        deleteButton.innerText = "Delete";
        deleteButton.onclick = function () {
            deleteTask(li);
        };
        li.appendChild(deleteButton);
 
 
 
        let completeButton = document.createElement("button");
        completeButton.innerText = "Complete";
        completeButton.onclick = function () {
            completeTask(li);
        };
        li.appendChild(completeButton);
 
 
       
        // add the task text to the list item
 
       
        // display the list item to the task list
        taskList.appendChild(li);
 
        // clear the input field
        taskInput.value = "";
    }
}
 
 
function completeTask(){
    let taskList = document.getElementsById("incomplete-tasks");
       
   
 
}
 
// move task to completed tasks
function completeTask(taskItem) {
    let incompleteTasks = document.getElementById("incomplete-tasks");
    let completedTasks = document.getElementById("completed-tasks");
 
    // remove Edit and Complete buttons
    taskItem.removeChild(taskItem.querySelector("button")); // Edit button
    taskItem.removeChild(taskItem.querySelector("button")); // Complete button
 
    // move the task item to completed tasks
    completedTasks.appendChild(taskItem).textDecoration;

}


function clearTasks(){
    let taskList = document.querySelectorAll("#completed-tasks li");
    Array.from(taskList).forEach((li)=>
    {
        li.parentNode.removeChild(li);
    });
}
 
 
 
 
// delete task functionality
 
function deleteTask(taskItem){
    let incompleteTasks = document.getElementById("incomplete-tasks");
    let completedTasks = document.getElementById("completed-tasks");
 
    // remove Edit and Complete buttons
    taskItem.removeChild(taskItem.querySelector("button")); // Edit button
 
    // move the task item to completed tasks
    incompleteTasks.removeChild(taskItem);
}

function darkMode(){
    var element = document.body;
    element.classList.toggle("dark-mode");
    var elem = document.getElementById("modeButton");
    if(elem.innerHTML == "Dark Mode") elem.innerHTML = "Light Mode";
    else elem.innerHTML = "Dark Mode";

}

document.addEventListener('DOMContentLoaded', function () {
    // This ensures that the script runs after the HTML document has been completely loaded

    // Find the button element
    document.getElementById("loginButton").addEventListener("click", function(event) {
        authenticate();
    });

});



function authenticate() {
   
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "melissa" && password === "mezzina") {
        alert("Authentication successful!");
        redirectToAnotherPage();
    } else {
        alert("Authentication failed. Please check your credentials.");
    }
}


function redirectToAnotherPage() {
    window.location.href = 'http://127.0.0.1:5500/index.html';
}

function logout() {
    window.location.href = 'http://127.0.0.1:5500/login.html';
}