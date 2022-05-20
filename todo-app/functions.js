const loadTodos = function () {
    let todoJSON = localStorage.getItem('todos');
    try {
        return todoJSON ? JSON.parse(todoJSON) : [];
    } catch (e) {
        return [];
    }
}

const generateTodoDOM = function(todo) {
    const newD = document.createElement('div');
    const newC = document.createElement('input');
    const newP = document.createElement('span');
    const newB = document.createElement('button');
    
    newC.type = 'checkbox';
    newC.checked = todo.completed;
    newC.addEventListener('click', function(){
        toggleTodo(todo.id);
        renderTodos(todos, filters);
    });

    newB.textContent = 'X';
    newB.addEventListener('click', function() {
        removeTodo(todo.id);
        renderTodos(todos, filters);
    });
    
    if(todo.title.length > 0) {
        newP.textContent = todo.title;
    }  else {
        newP.textContent = '-todo not found-'
    }
    newP.className = 'todo';

    newD.appendChild(newC);
    newD.appendChild(newP);
    newD.appendChild(newB);
    return newD;
}

const removeTodo = function(uuid) {
    const idx = todos.findIndex(function (todo){
        return todo.id === uuid;
    });
    if(idx > -1) {
        todos.splice(idx, 1);
    }
    localStorage.setItem('todos', JSON.stringify(todos));
}

const toggleTodo = function(uuid) {
    const idx = todos.findIndex(function (todo){
        return todo.id === uuid;
    });
    if(idx > -1) {
        todos[idx].completed = !todos[idx].completed;
    }
    localStorage.setItem('todos', JSON.stringify(todos));
}

const generateTodoSummary = function(todos) {
    let cnt = 0;
    for(let i = 0; i < todos.length; i++) {
        if(!todos[i].completed) {
            cnt++;
        }
    }
    return `You have ${cnt} todos pending!`;
}

const renderTodos = function (todos, filters) {
    const filteredTodos = todos.filter(function(todo) {
        if(filters.hideCompleted && todo.completed) {
            return false;
        }
        return todo.title.toLowerCase().includes(filters.searchText.toLowerCase());
    });

    document.querySelector('#todo-info').textContent = generateTodoSummary(filteredTodos);

    document.querySelector('#todos-container').innerHTML = '';
    filteredTodos.forEach(function(todo){
        document
        .querySelector('#todos-container')
        .appendChild(generateTodoDOM(todo));
    });
};