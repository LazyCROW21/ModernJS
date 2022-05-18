const todos = [
    'Play Valorant',
    'Exercise',
    'Eat',
    'Hangout with Friends',
    'Sleep'
];

console.log(`You have ${todos.length} todos`);
console.log(`First todo: ${todos[0]}`);
console.log(`Last todo: ${todos[todos.length - 1]}`);

todos.splice(2, 1);
todos.push('Learn JS');
todos.shift();