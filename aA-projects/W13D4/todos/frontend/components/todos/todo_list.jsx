import React from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';

// export default () => <h3>Todo List goes here!</h3>

class TodoList extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        const todos = this.props.todos;
        const listItems = todos.map((todo, idx) =>
            <TodoListItem  todo={todo}/>
        );

        return (
            <div>
                <ul>{listItems}</ul>
                <TodoForm receiveTodo={this.props.receiveTodo}/>
            </div>
        );
    }
}

export default TodoList;


// const numbers = [1, 2, 3, 4, 5];
// const listItems = todos.map((todo) =>
//     <li>{todo}</li>
// );

// ReactDOM.render(
//     <ul>{listItems}</ul>,
//     document.getElementById('root')
// );
