let todos = loadTodos();

const filters = {
    searchText: '',
    hideCompleted: false
};

document.querySelector('#searchInp').addEventListener('input', function(e){
    filters.searchText = e.target.value;
    renderTodos(todos, filters);
});

document.querySelector('#hideC').addEventListener('click', function(e) {
    filters.hideCompleted = e.target.checked;
    renderTodos(todos, filters);
});

document.querySelector('#addTodoForm').addEventListener('submit', function(e){
    e.preventDefault();
    todos.push({
        id: uuidv4(),
        title: e.target.elements.addTodoInp.value,
        completed: false
    })
    localStorage.setItem('todos', JSON.stringify(todos));
    e.target.elements.addTodoInp.value = '';
    renderTodos(todos, filters);
});

renderTodos(todos, filters);