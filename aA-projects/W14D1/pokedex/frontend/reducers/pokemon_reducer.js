import { RECEIVE_ALL_POKEMON, RECEIVE_POKEMON } from '../actions/pokemon_actions';

const pokemonReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_ALL_POKEMON:
            const newState = Object.assign({}, state, action.pokemon);
            return newState; 
        case RECEIVE_POKEMON:
            const newState2 = Object.assign({}, state, action.pokemon);
            return newState2; 
        default: 
            return state;        
    }
}

export default pokemonReducer;