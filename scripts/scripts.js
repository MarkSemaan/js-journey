const taskInput = document.querySelector('.task-input');
const addButton = document.querySelector('.add-btn');
const taskList = document.querySelector('.task-list');

function addTask() {

    const taskText = taskInput.value.trim(); 

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    const li = document.createElement("li");

    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;
    taskSpan.classList.add('task-text');

    li.appendChild(taskSpan);

    taskList.appendChild(li);

    taskInput.value = "";

    taskInput.focus();
}

addButton.addEventListener('click', addTask);

taskList.addEventListener('click', function(event) {
    const listItem = event.target.closest('li');
    if (listItem) {
        listItem.classList.toggle('completed');
    }
});