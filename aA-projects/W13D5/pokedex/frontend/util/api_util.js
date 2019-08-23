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