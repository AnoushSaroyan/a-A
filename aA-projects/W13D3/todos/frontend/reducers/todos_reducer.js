import { RECEIVE_TODOS, RECEIVE_TODO } from '../actions/todo_actions';

const todosReducer = (state = {}, action) => {
    Object.freeze(state);
    
    switch (action.type) {
        case RECEIVE_TODOS:
            let newState = {};
            // debugger;
            for (let i = 0; i < action.todos.length; i++) {
                newState[todo.id] = action.todos[i];
            }
            return newState;
        case RECEIVE_TODO:
            let newTodo = {[action.todo.id]: action.todo };
            return Object.assign({}, state, newTodo);
        default:
            return state;
    }
};

/*
action.todos.forEach(todo => { newState[todos][todo.id]= action.todo; });

*/

// action ={
//     type:
//     todo
// }
export default todosReducer;

// {
//     1: {
//         id: 1,
//             title: 'wash car',
//                 body: 'with soap',
//                     done: false
//     },
//     2: {
//         id: 2,
//             title: 'wash dog',
//                 body: 'with shampoo',
//                     done: true
//     },
// }
