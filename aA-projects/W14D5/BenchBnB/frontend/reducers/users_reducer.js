import { RECEIVE_CURRENT_USER } from '../actions/session_actions';


const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            const user = { [action.currentUser.id]: action.currentUser };
            return Object.assign({}, state, user);
        default:
            return state;
    }
}

export default usersReducer;


// root:
// {
//     entities: {
//         users: {
//             1: {
//                 id: 1,
//                     username: 'breakfast'
//             }
//         }

//     },
//     session: {
//         id: 1
//     },
//     errors: {
//         session: []
//     }
// }