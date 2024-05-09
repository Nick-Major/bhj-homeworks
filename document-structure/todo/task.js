const btn = document.getElementById('tasks__add');
const input = document.getElementById('task__input');
const tasksList = document.getElementById('tasks__list');
btn.addEventListener('click', (event) => {
    event.preventDefault();
    addNewTask();
})

function addNewTask() {
    tasksList.insertAdjacentHTML("afterbegin", `
    <div class="task">
        <div class="task__title">
            ${input.value}
        </div>
        <a href="#" class="task__remove">&times;</a>
    </div>
    `)
    document.querySelectorAll('.task__remove').forEach((elem) => {
        elem.addEventListener('click', removeTask);
    })
    input.value = '';
}

function removeTask(event) {
    event.target.closest('.task').remove();
}