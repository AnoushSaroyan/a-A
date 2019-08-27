import { connect } from 'react-redux';
import { selectAllPokemon } from '../../reducers/selector';
import { requestAllPokemon, requestPokemon } from '../../util/api_util';
import PokemonIndex from './pokemon_index';

const mapStateToProps = state => ({
    pokemon: selectAllPokemon(state)
});

const mapDispatchToProps = (dispatch, ownProps) => {
    // const pokemonId = ownProps.match.params.pokemonId;
    return {
    requestAllPokemon: () => dispatch(requestAllPokemon()),
    // requestPokemon: () => dispatch(requestPokemon(pokemonId))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(PokemonIndex);