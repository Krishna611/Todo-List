const taskList = document.getElementById('taskList');
const addTaskBtn = document.getElementById('addTaskBtn');

function getStatus(deadline) {
    const today = new Date();
    const dueDate = new Date(deadline);
    const daysDiff = (dueDate - today) / (1000 * 60 * 60 * 24);
    if (daysDiff < 0) return `<span class="task-status-overdue">Overdue</span>`;
    else return `<span class="task-status-upcoming">Due in ${Math.round(daysDiff)} days</span>`;
}

function createTaskElement(title, priority, deadline) {
    const li = document.createElement('li');
    li.className = 'list-group-item d-flex justify-content-between align-items-center task-row';
    li.innerHTML = `
        <div>
            <h5>${title}</h5>
            <span class="badge badge-pill badge-secondary badge-priority">${priority}</span>
            <span class="ml-2"><i class="far fa-calendar-alt"></i> ${deadline}</span>
            <span class="ml-2">${getStatus(deadline)}</span>
        </div>
        <div>
            <i class="far fa-edit text-primary mr-3" style="cursor:pointer;"></i>
            <i class="far fa-trash-alt text-danger" style="cursor:pointer;" onclick="this.closest('li').remove();"></i>
        </div>
    `;
    return li;
}

addTaskBtn.onclick = () => {
    const title = document.getElementById('taskTitle').value.trim();
    const priority = document.getElementById('taskPriority').value;
    const deadline = document.getElementById('taskDeadline').value;

    if (title === '' || deadline === '') {
        alert("Please fill in all fields");
        return;
    }

    const taskElement = createTaskElement(title, priority, deadline);
    taskList.appendChild(taskElement);

    // Clear inputs
    document.getElementById('taskTitle').value = '';
    document.getElementById('taskDeadline').value = '';
};