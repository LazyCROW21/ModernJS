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

// console.log(`You have ${todos.length} todos`);
// console.log(`First todo: ${todos[0]}`);
// console.log(`Last todo: ${todos[todos.length - 1]}`);

// todos.splice(2, 1);
// todos.push('Learn JS');
// todos.shift();

let deleteTodo = function(todos, title) {
    let idx = todos.findIndex(function(todo){
        return todo.title.toLowerCase() === title.toLowerCase();
    });

    if(idx !== -1) {
        todos.splice(idx, 1);
    }
};

const getPendingTodos = function(todos) {
    return todos.filter(function(todo, idx) {
        return todo.completed === false;
    });
}

let pendingTodos = getPendingTodos(todos, 'Sleep');
for (let i = 0; i < pendingTodos.length; i++) {
    console.log(i+1, pendingTodos[i]);
}

console.log(todos.sort(function(a, b) {
    if(!a.completed && b.completed) {
        return -1;
    } else if(!b.completed && a.completed) {
        return 1;
    }
    return 0;
}))