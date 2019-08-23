import React from 'react';

class TodoListItem extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        const todo = this.props.todo;
        return (
          <li key={todo.id}><a href="#">{todo.title}</a></li>
        );
    }
}

export default TodoListItem;