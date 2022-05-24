import { loadTodos, toggleTodo, removeTodo } from "./todos";
import { getFilters } from "./filters";

const generateTodoDOM = function(todo) {
  const newD = document.createElement("div");
  const newC = document.createElement("input");
  const newP = document.createElement("span");
  const newB = document.createElement("button");

  newD.className = 'todo';

  newC.type = "checkbox";
  newC.checked = todo.completed;
  newC.addEventListener("click", function() {
    toggleTodo(todo.id);
    renderTodos();
  });

  newB.textContent = "X";
  newB.addEventListener("click", function() {
    removeTodo(todo.id);
    renderTodos();
  });

  if (todo.title.length > 0) {
    newP.textContent = todo.title;
  } else {
    newP.textContent = "-todo not found-";
  }

  newD.appendChild(newB);
  newD.appendChild(newP);
  newD.appendChild(newC);
  return newD;
};

const generateTodoSummary = function() {
  const todos = loadTodos();
  const filters = getFilters();
  const filteredTodos = todos.filter(function(todo) {
    if (filters.hideCompleted && todo.completed) {
      return false;
    }
    return todo.title.toLowerCase().includes(filters.searchText.toLowerCase());
  });

  let cnt = 0;
  for (let i = 0; i < filteredTodos.length; i++) {
    if (!filteredTodos[i].completed) {
      cnt++;
    }
  }
  return `You have ${cnt} todos pending!`;
};

const renderTodos = function() {
  const todos = loadTodos();
  const filters = getFilters();
  const filteredTodos = todos.filter(function(todo) {
    if (filters.hideCompleted && todo.completed) {
      return false;
    }
    return todo.title.toLowerCase().includes(filters.searchText.toLowerCase());
  });

  document.querySelector("#todo-info").textContent = generateTodoSummary(
    filteredTodos
  );

  const todoContainer = document.querySelector("#todos-container");
  todoContainer.innerHTML = "";
  filteredTodos.forEach(function(todo) {
    todoContainer.appendChild(generateTodoDOM(todo));
  });
};

export { renderTodos };
