import { receiveAllPokemon } from '../actions/pokemon_actions';

export const fetchAllPokemon = () => {
    return $.ajax({
        method: "GET",
        url: "api/pokemon"
    });
};

export const fetchSinglePokemon = (pokemonId) => {
    return $.ajax({
        method: "GET",
        url: `api/pokemon/${pokemonId}`
    });
};

export const postPokemon = (pokemon) => {
    return $.ajax({
    method: "POST",
        url: `api/pokemon`,
        data: { pokemon: pokemon}
    });
};