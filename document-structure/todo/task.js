const btn = document.getElementById('tasks__add');
const input = document.getElementById('task__input');
const tasksList = document.getElementById('tasks__list');
const form = document.getElementById('tasks__form');
btn.addEventListener('click', (event) => {
    event.preventDefault();
    addNewTask();
})

function addNewTask() {
    const id = new Date().getTime();

    let task = document.createElement('div');
    task.classList.add('task');
    task.setAttribute('id', id);

    let taskTitle = document.createElement('div');
    taskTitle.classList.add('task__title');

    taskTitle.textContent = input.value;

    let a = document.createElement('a');
    a.classList.add('task__remove');
    a.href = '#';
    a.innerHTML = '&times;'
    a.setAttribute('id', id);
    a.onclick = function(event) {
        removeTask(event);
    };

    task.appendChild(taskTitle);
    task.appendChild(a);
    tasksList.appendChild(task);
}

function removeTask(event) {
    let tasks = document.querySelectorAll('.task');
    console.log(tasks);

    let id = event.target.id;

    tasksList.textContent = '';
    tasks.forEach((elem) => {
        if (+elem.id === +id) {
            return
        }

        tasksList.append(elem);
    })
}