document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.js--form');
    const input = document.querySelector('.js--form__input');
    const todosWrapper = document.querySelector('.js--todos-wrapper');

    const todos = JSON.parse(localStorage.getItem('todos')) || [];

    function saveTodos() {
        localStorage.setItem('todos', JSON.stringify(todos));
    }

    function renderTodos() {
        todosWrapper.innerHTML = '';
        todos.forEach((todo, index) => {
            const todoItem = document.createElement('li');
            todoItem.className = 'todo-item';
            if (todo.completed) {
                todoItem.classList.add('todo-item--checked');
            }

            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.checked = todo.completed;
            checkbox.addEventListener('click', function() {
                todos[index].completed = !todos[index].completed;
                saveTodos();
                renderTodos();
            });

            const description = document.createElement('span');
            description.className = 'todo-item__description';
            description.textContent = todo.text;

            const deleteButton = document.createElement('button');
            deleteButton.className = 'todo-item__delete';
            deleteButton.textContent = 'Видалити';
            deleteButton.addEventListener('click', function() {
                todos.splice(index, 1);
                saveTodos();
                renderTodos();
            });

            todoItem.appendChild(checkbox);
            todoItem.appendChild(description);
            todoItem.appendChild(deleteButton);

            todosWrapper.appendChild(todoItem);
        });
    }

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const newTodo = {
            text: input.value,
            completed: false
        };
        todos.push(newTodo);
        saveTodos();
        renderTodos();
        input.value = '';
    });


    renderTodos();
});
