import React from 'react';
import ReactDOM from 'react-dom';
import { allTodos } from './reducers/selectors';

import Root from './components/root';
import configureStore from './store/store';
import { receiveTodos, receiveTodo } from './actions/todo_actions';

document.addEventListener('DOMContentLoaded', () => {
    // grub the store here
    const initialState = {
        todos: {
            1: {
                id: 1,
                title: 'wash car',
                body: 'with soap',
                done: false
            },
            2: {
                id: 2,
                title: 'wash dog',
                body: 'with shampoo',
                done: true
            }
        }
        
    };

    const store = configureStore(initialState);
    // debugger;
    window.store = store; // testing only, remove when complete
    window.receiveTodo = receiveTodo; // testing only, remove when complete
    window.receiveTodos = receiveTodos; // testing only, remove when complete
    window.allTodos = allTodos;

    const root = document.getElementById('content');
    // ReactDOM.render(<Root store={store} />, root);
    ReactDOM.render(<Root store={store}/>, root);
});


