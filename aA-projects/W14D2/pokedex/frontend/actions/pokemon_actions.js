export const RECEIVE_ALL_POKEMON = 'RECEIVE_ALL_POKEMON';
export const RECEIVE_SINGLE_POKEMON = 'RECEIVE_SINGLE_POKEMON';
export const CREATE_POKEMON = 'CREATE_POKEMON';

import { fetchAllPokemon, fetchSinglePokemon, postPokemon } from '../util/api_util';

// receiving all pokemon
export const receiveAllPokemon = pokemon => ({
    type: RECEIVE_ALL_POKEMON,
    pokemon
});

export const requestAllPokemon = () => (dispatch) => (
    fetchAllPokemon()
        .then(pokemon => dispatch(receiveAllPokemon(pokemon)))
);

// receiving single pokemon
export const receiveSinglePokemon = payload => ({
    type: RECEIVE_SINGLE_POKEMON,
    payload
});

export const requestSinglePokemon = (pokemonId) => (dispatch) => (
    fetchSinglePokemon(pokemonId)
        .then(payload => dispatch(receiveSinglePokemon(payload)))
)

// export const receiveNewPokemon = pokemon => ({
//     type: RECEIVE_NEW_POKEMON,
//     pokemon
// });

export const createPokemon = pokemon => dispatch => (
    postPokemon(pokemon).then(pokemon => {
        dispatch(receiveSinglePokemon(pokemon));
        return pokemon;
    })
);