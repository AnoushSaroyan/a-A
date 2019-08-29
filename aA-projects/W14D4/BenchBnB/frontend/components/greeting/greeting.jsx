import { Link } from 'react-router-dom';
import React from 'react';
class Greeting extends React.Component{
        constructor(props){
            super(props)
        }
        
        render(){
            if (this.props.currentUser) {
                // debugger
                return <div>
                    
                    < h2>Hello: {this.props.currentUser.username}</h2>
                    < button onClick={this.props.logout}> Log out</button>
                </div>   
            } else {
                return <div>
                    < Link to="/signup">Sign Up!</Link>
                    < Link to="/login">Login </Link>
                </div>
            }
        }
}

export default Greeting;