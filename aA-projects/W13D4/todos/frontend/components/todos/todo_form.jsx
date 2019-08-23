import React from 'react'

class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {title: "", body: ""};
        this.handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this);
    }

    update(field) {
        return (e) => {
            this.setState({ [field]: e.target.value });
        }
    }

    uniqueId() {
        return new Date().getTime();
    }

    handleSubmit(e) {
        e.preventDefault();
        const newTodo = {id: this.uniqueId(), body: this.state.body, title: this.state.title};
        this.props.receiveTodo(newTodo);
        this.setState({ title: "", body: "" });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Title:
                  <br/>
                    <input type="text" name="title" placeholder="Example: Buy milk" value={this.state.title} onChange={this.update('title')}/>
                </label>
                <br/>
                <label>Body:
                  <br/>
                    <input type="text" name="body" placeholder="Example: 2% or Whole" value={this.state.body} onChange={this.update('body')}/>
                </label>
                <br/>
                <input type="submit" value="Create Todo!" />
            </form>
        );
    }
}


export default TodoForm;