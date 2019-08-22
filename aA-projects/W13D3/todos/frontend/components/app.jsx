import React from 'react';
// don't forget to import the todo list container
import TodoListContainer from './todos/todo_list_container';

const App = () => (
    <div className="app">
        <h1>Todo List</h1>
        {/* to do list container here:::: remember the container not the presentation component */}
        <TodoListContainer />
    </div>
);

export default App;