import { connect } from 'react-redux';
import { requestSinglePokemon } from '../../actions/pokemon_actions';
import PokemonDetail from './pokemon_detail';
import { selectAllItems } from '../../reducers/selector';

const mapStateToProps = (state, ownProps) => {
    const pokemonId = ownProps.match.params.pokemonId;
    const pokemon = state.entities.pokemon[pokemonId];
    const items = selectAllItems(state, pokemon);
    // debugger
    return { 
        pokemon, 
        items,
    };
};

const mapDispatchToProps = dispatch => {
    // const pokemonId = ownProps.match.params.pokemonId;
    return {
        requestSinglePokemon: (pokemonId) => dispatch(requestSinglePokemon(pokemonId))
    };
};

// const mapDispatchToProps = function (dispatch, ownProps) {
//     const bleatId = ownProps.match.params.bleatId;
//     // debugger;
//     return {
//         fetchBleat: () => dispatch(fetchBleat(bleatId))
//     };
// };

export default connect(mapStateToProps, mapDispatchToProps)(PokemonDetail);