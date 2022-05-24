import uuidv4 from 'uuid/v4';

let todos = [];

const loadTodos = () => {
    let todos = localStorage.getItem('todos');
    if(todos) {
        return JSON.parse(todos);
    }
    return [];
}

todos = loadTodos();

const saveTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos));
}

const createTodo = (todoTitle) => {
    todos.push({
        id: uuidv4(),
        title: todoTitle,
        completed: false
    });
    saveTodos();
}

const removeTodo = (todoId) => {
    const idx = todos.findIndex(function (todo){
        return todo.id === todoId;
    });
    if(idx > -1) {
        todos.splice(idx, 1);
        saveTodos();
    }
}

const toggleTodo = (todoId) => {
    const idx = todos.findIndex(function (todo){
        return todo.id === todoId;
    });
    if(idx > -1) {
        todos[idx].completed = !todos[idx].completed;
        saveTodos();
    }
}

export {
    loadTodos,
    createTodo,
    removeTodo,
    toggleTodo
}
