const el_input = document.querySelector('.add-item input');
const el_btn = document.querySelector('.add-item button');
const el_todolist = document.querySelector('.todo-list');
const el_clear = document.querySelector('.clear');
let tasks;

const addTask = (e) => {
    e.preventDefault();
    if (el_input.value !== "") {
        addTaskToLS();
        displayTasks();
    } else {
        alert('Please enter a task');
    }
}

const addTaskToLS = () => {
    getTasks();
    tasks.push(el_input.value);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    el_input.value = "";
}

const getTasks = () => {
    try {
        tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    } catch (error) {
        console.error("Error parsing tasks from localStorage:", error);
        tasks = [];
    }
}


el_btn.addEventListener('click', addTask);


function displayTasks() {
    getTasks();
    el_todolist.innerHTML = "";
    tasks.forEach((task, index) => {
        const el_li = document.createElement('li');
        const el_trash = document.createElement('button');
        el_trash.innerHTML = `<i class="fas fa-trash-alt" id="${index}" onclick="deleteTask(this.id)"></i> `;
        el_li.appendChild(document.createTextNode(task));
        el_li.appendChild(el_trash);
        el_todolist.appendChild(el_li);
    });
}

function deleteTask(index){
    getTasks();
    tasks.splice(index,1);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    displayTasks();
}

displayTasks();

function clearTasks(){
    let clear = confirm('Are you sure you want to clear?');
    if(clear){
        localStorage.clear();
        el_todolist.innerHTML="";
        displayTasks();
    }
}



el_clear.addEventListener('click', clearTasks);
