import React from "react";
import { Link } from "react-router-dom";
import { IS_LOGGED_IN } from "../graphql/queries";
import { Query, ApolloConsumer } from 'react-apollo';
import {withRouter} from 'react-router-dom';

const Nav = props => {
    return (
        <ApolloConsumer>
            {
             client => (
                 <Query query={IS_LOGGED_IN}>
                     {({ data }) => {
                         if (data.isLoggedIn) {
                             return <button
                                 onClick={e => {
                                     e.preventDefault();
                                     localStorage.removeItem('auth-token');
                                     client.writeData({ data: { isLoggedIn: false } });
                                     props.history.push("/");
                                 }}>Logout</button>
                         } else {
                             return (
                                 <div>
                                     <Link to="/login">Login</Link>
                                     <Link to="/register">Register</Link>
                                 </div>
                             );
                         }
                     }}
                 </Query>
             )   
            }
        </ApolloConsumer>
    );
};

export default withRouter(Nav);