import React from "react";
import ReactDOM from "react-dom";
// import * as APIUtil from "./util/session_api_util";
import * as actions from "./actions/session_actions";
import configureStore  from './store/store';
import Root from "./components/root";

document.addEventListener("DOMContentLoaded", () => {
    window.signup = actions.signup
    // window.login = APIUtil.login
    // window.logOut = APIUtil.logOut
    let store;
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: { id: window.currentUser.id }
        };
        store = configureStore(preloadedState);
        // debugger;
        delete window.currentUser;
    } else {
        store = configureStore();
    }

    window.getState = store.getState; // testing 
    window.dispatch = store.dispatch; // testing
    const root = document.getElementById("root");
    ReactDOM.render(<Root store={store} />, root);
});



