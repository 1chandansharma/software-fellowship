    function addTask() {
      const input = document.getElementById('taskInput');
      const taskText = input.value.trim();
      if (taskText === '') return;

      const li = document.createElement('li');

      li.innerHTML = `
        <div class="todo-actions">
          <input type="checkbox" onclick="toggleTask(this)">
        </div>
        <span>${taskText}</span>
        <button onclick="deleteTask(this)">✕</button>
      `;

      document.getElementById('todoList').appendChild(li);
      input.value = '';
    }

    function deleteTask(btn) {
      btn.parentElement.remove();
    }

    function toggleTask(checkbox) {
      const li = checkbox.closest('li');
      li.classList.toggle('completed');
    }