import React from 'react';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

   update (field) {
     return (e) => this.setState( { [field]: e.target.value })    
   }

   handleSubmit (e) {
       e.preventDefault(this.props.processForm(this.state));
   }

   render() {
    return <div>
        <h2>{this.props.formType}</h2>
        <form>
            <label>Username:
                <input 
                    type="text"
                    value={this.state.username}
                    onChange={this.update('username')}
                />
            </label>
            <label>Password:
                <input
                    type="text"
                    value={this.state.password}
                    onChange={this.update('password')}
                />
            </label>
            <button onClick={this.handleSubmit}> {this.props.formType} </button>
        </form>
    </div>
   }
}

export default SessionForm;