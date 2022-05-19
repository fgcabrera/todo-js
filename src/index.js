import './styles.css';

import { Todo, TodoList } from './classes'; //va a buscar el index.js por defecto
import { crearTodoHtml } from './js/componentes';

export const todoList = new TodoList();


// setTimeout( () => {

//     localStorage.removeItem('mi-key');

// }, 1500 );

//todoList.todos.forEach(todo => { crearTodoHtml( todo ) });
// el de arriba es igual al de abajo
todoList.todos.forEach( crearTodoHtml );

// const newTodo = new Todo('Aprende de una vez JavaScript');
// todoList.nuevoTodo( newTodo );

console.log('todos',todoList.todos);

