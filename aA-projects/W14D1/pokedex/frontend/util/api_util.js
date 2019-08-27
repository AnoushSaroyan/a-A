import { receiveAllPokemon } from '../actions/pokemon_actions';

export const fetchAllPokemon = () => {
    return $.ajax({
        method: "GET",
        url: "api/pokemon"
    });
}

export const requestAllPokemon = () => (dispatch) => (
  fetchAllPokemon()
    .then(pokemon => dispatch(receiveAllPokemon(pokemon)))
)

export const fetchPokemon = (pokemonId) => {
    return $.ajax({
        method: "GET",
        url: `api/pokemon/${pokemonId}`
    });
}


export const requestPokemon = (pokemonId) => (dispatch) => (
    fetchPokemon(pokemonId)
    .then(pokemon => dispatch(receivePokemon(pokemon)))
)

// export const createPokemon = ({ pokemon }) => {
//     return $.ajax({
//     method: "GET",
//         url: `api/pokemon`,
//         data: {pokemon: {type: type, attack: attack, defence: defence, moves: moves}}
//     });
// }