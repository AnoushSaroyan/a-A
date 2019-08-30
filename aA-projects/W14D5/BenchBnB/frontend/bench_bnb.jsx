import React from "react";
import ReactDOM from "react-dom";
// import * as APIUtil from "./util/session_api_util";
import * as actions from "./actions/session_actions";
import configureStore  from './store/store';
import Root from "./components/root";
import {
    fetchBenches,
    fetchBench,
    createBench
} from "./actions/bench_actions"

document.addEventListener("DOMContentLoaded", () => {
    
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

    const root = document.getElementById("root");
    ReactDOM.render(<Root store={store} />, root);

    window.getState = store.getState; // testing 
    window.dispatch = store.dispatch; // testing

    // window.signup = actions.signup   // testing   
    // window.login = APIUtil.login  // testing   
    // window.logOut = APIUtil.logOut  // testing   

    window.fetchBenches = fetchBenches  // testing    
    window.fetchBench = fetchBench  // testingf
    window.createBench = createBench  // testingf
});



