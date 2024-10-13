document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskinput');
    const newTaskButton = document.getElementById('newTask');
    const taskList = document.querySelector('.task-list');
    const numbers = document.getElementById('numbers');
    const progress = document.getElementById('progress');

    let tasks = [];
    let completedTasks = 0;

    function updateProgress() {
        const totalTasks = tasks.length;
        const progressPercentage = totalTasks === 0 ? 0 : (completedTasks / totalTasks) * 100;
        progress.style.width = `${progressPercentage}%`;
        numbers.innerText = `${completedTasks} / ${totalTasks}`;
    }

    function addTask(taskText) {
        const li = document.createElement('li');
        li.textContent = taskText;
        li.classList.add('task-item');
        taskList.appendChild(li);

        li.addEventListener('click', () => {
            li.classList.toggle('completed');
            if (li.classList.contains('completed')) {
                completedTasks++;
            } else {
                completedTasks--;
            }
            updateProgress();
        });

        tasks.push(taskText);
        updateProgress();
    }

    newTaskButton.addEventListener('click', (e) => {
        e.preventDefault();
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            addTask(taskText);
            taskInput.value = '';
        }
    });

    updateProgress();
});
