import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, withRouter } from 'react-router-dom';

const mapStateToProps = state => ({
    loggedIn: Boolean(state.session.currentUser)
});

// auth routes
// <AuthRoute path="somePath" component="someComponent">
const Auth = ({ loggedIn, path, component: Component }) => ( 
    <Route 
        path={path} 
        render={props => (
            loggedIn ? <Redirect to="/" /> : <Component {...props} /> 
        )} 
    />
);

// protected routes
const Protected = ({ loggedIn, path, component: Component }) => (
    <Route 
    path={path}
    render={props => (
        loggedIn ? <Component {...props} /> : <Redirect to="/signup" />
    )}
    />
);

// withRouter will give the Auth component an access to locations, history, and match
export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));
export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected));

