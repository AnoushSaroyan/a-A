export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
import * as APIUtil from '../util/session_api_util';


export const receiveCurrentUser = currentUser => ({
    type: RECEIVE_CURRENT_USER,
    currentUser
});

export const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER
});

export const receiveErrors = errors => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
});



export const login = (user) => (dispatch) => {
    return(
        APIUtil.login(user).then(
            paylod => dispatch(receiveCurrentUser(paylod)),
            (errors) => {
                // debugger;
                receiveErrors(errors.responseJSON)
            })
    )
} 
export const logout = ()  => (dispatch) => {
    return(
        APIUtil.logout().then(paylod => dispatch(logoutCurrentUser(paylod)))
    )
}

export const signup = (user) => (dispatch) => {
    return(
        APIUtil.signup(user).then(paylod => dispatch( receiveCurrentUser(paylod) ),
        (errors) => {
            // debugger;
            receiveErrors(errors.responseJSON)
        })

        )
} 