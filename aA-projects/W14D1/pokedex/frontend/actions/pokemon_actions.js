export const RECEIVE_ALL_POKEMON = 'RECEIVE_ALL_POKEMON';
export const RECEIVE_POKEMON = 'RECEIVEPOKEMON';

import { fetchPokemon } from '../util/api_util';

export const receiveAllPokemon = pokemon => ({
    type: RECEIVE_ALL_POKEMON,
    pokemon
})


export const receivePokemon = pokemon => ({
    type: RECEIVE_POKEMON,
    pokemon
})

// export const receivePokemon = (pokemonId) => {
//     return (dispatch) => {
//         return fetchPokemon(pokemonId).then(response => {
//             dispatch(receiveAllPokemon(response));
//         })
//     }
// }