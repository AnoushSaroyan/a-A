import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';

import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
  const preloadedState = localStorage.state ?
    JSON.parse(localStorage.state) : {};
  let store = configureStore(preloadedState);

  //Added for testing the Phase 1
  // store.dispatch = addLoggingToDispatch(store);


  //Added for testing the Phase 2
  store = applyMiddlewares(store, addLoggingToDispatch, addLoggingToDispatch2);

  const root = document.getElementById('content');
  ReactDOM.render(<Root store={store} />, root);
});

// Phase 1: Logging
// const addLoggingToDispatch = (store) => {
//   const dispatch = store.dispatch;
//   return (action) => {
//     console.log(store.getState()); // this is the old state
//     console.log(action);
//     dispatch(action);
//     console.log(store.getState());
//   }
// }


// Phase 2: Refactoring: now can run a group of middlewares
// addLoggingToDispatch should return a function that receives the next middleware as an argument.
// This inner function will return yet another function that receives the action
// Inside all of this we will need to do the logging and invoke the next middleware with the action
const addLoggingToDispatch = store => next => action => {
  console.log("inside of the first middleware");
  console.log(store.getState()); // this is the old state
  console.log(action);
  debugger;
  next(action);
  store; next; action;
  console.log(store.getState());
}

const addLoggingToDispatch2 = store => next => action => {
  console.log("inside of the second middleware");
  console.log(store.getState()); // this is the old state
  console.log(action);
  debugger;
  next(action);
  store; next; action;
  console.log(store.getState());
}


const applyMiddlewares = (store, ...middlewares) => {
  // debugger;
  let dispatch = store.dispatch;
  middlewares.forEach(middleware => {
    dispatch = middleware(store)(dispatch);
    // debugger;
  });

  const obj = Object.assign({}, store, { dispatch });
  // debugger;
  return obj;
}




