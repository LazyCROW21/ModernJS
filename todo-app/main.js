const todos = [
    {
        title: 'Play Valorant',
        completed: false
    },
    {
        title: 'Sleep',
        completed: false
    },
    {
        title: 'Hangout with Friends',
        completed: true
    },
    {
        title: 'Eat',
        completed: true
    },
    {
        title: 'Exercise',
        completed: false
    }
];

const filters = {
    searchText: ''
};


document.querySelector('#searchInp').addEventListener('input', function(e){
    filters.searchText = e.target.value;
    renderTodos(todos, filters);
});


// document.querySelector('#clearNotesBtn').addEventListener('click', function(e) {
//     document.querySelectorAll('.note').forEach(function(note){ note.remove(); });
// });


document.querySelector('#addTodoForm').addEventListener('submit', function(e){
    e.preventDefault();
    todos.push({
        title: e.target.elements.addTodoInp.value,
        completed: false
    })
    e.target.elements.addTodoInp.value = '';
    renderTodos(todos, filters);
});

const renderTodos = function (todos, filters) {
    const filteredTodos = todos.filter(function(todo){
        return todo.title.toLowerCase().includes(filters.searchText.toLowerCase());
    });

    let cnt = 0;
    for(let i = 0; i < filteredTodos.length; i++) {
        if(!filteredTodos[i].completed) {
            cnt++;
        }
    }
    document.querySelector('#todo-info').textContent = `You have ${cnt} todos pending!`;


    document.querySelector('#todos-container').innerHTML = '';
    filteredTodos.forEach(function(todo){
        const newP = document.createElement('p');
        newP.textContent = todo.title;
        newP.className = 'todo';
        document.querySelector('#todos-container').appendChild(newP);
    });
};

renderTodos(todos, filters);