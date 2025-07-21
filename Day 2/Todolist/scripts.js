const input = document.getElementById('taskInput');
const todoList = document.getElementById('todoList');

// Add task and send to backend
async function addTask() {
  const taskText = input.value.trim();
  if (taskText === '') return;

  const res = await fetch("http://127.0.0.1:8000/tasks", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text: taskText })
  });

  const data = await res.json();
  input.value = '';
  loadTasks();
}

// Delete task and remove from backend
async function deleteTask(btn, id) {
  await fetch(`http://127.0.0.1:8000/tasks/${id}`, {
    method: "DELETE"
  });
  btn.parentElement.remove();
}

// Toggle task completion (optional: update backend if needed)
function toggleTask(checkbox) {
  const li = checkbox.closest('li');
  li.classList.toggle('completed');
}

// Load all tasks from backend
async function loadTasks() {
  const res = await fetch("http://127.0.0.1:8000/tasks");
  const data = await res.json();
  todoList.innerHTML = '';

  data.tasks.forEach(task => {
    const li = document.createElement('li');
    li.innerHTML = `
      <div class="todo-actions">
        <input type="checkbox" onclick="toggleTask(this)">
      </div>
      <span>${task.text}</span>
      <button onclick="deleteTask(this, '${task.id}')">✕</button>
    `;
    todoList.appendChild(li);
  });
}

// Initial load
window.onload = loadTasks;
