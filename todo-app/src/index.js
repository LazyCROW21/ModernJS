import {setFilters} from './filters';
import {createTodo} from './todos';
import {renderTodos} from './views';

document.querySelector('#searchInp').addEventListener('input', function(e){
    setFilters(e.target.value);
    renderTodos();
});

document.querySelector('#hideC').addEventListener('click', function(e) {
    setFilters(undefined, e.target.checked);
    renderTodos();
});

document.querySelector('#addTodoForm').addEventListener('submit', function(e){
    e.preventDefault();
    createTodo(e.target.elements.addTodoInp.value);
    e.target.elements.addTodoInp.value = '';
    renderTodos();
});

console.log('ASDASDA');

window.addEventListener('storage', (e) => {
    if(e.key === 'todos') {
        renderTodos();
    }
});

renderTodos();