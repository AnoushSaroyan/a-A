import { connect } from 'react-redux';
import { selectAllPokemon } from '../../reducers/selector';
import { requestAllPokemon, requestSinglePokemon } from '../../actions/pokemon_actions';
import PokemonIndex from './pokemon_index';

const mapStateToProps = state => ({
    pokemon: selectAllPokemon(state)
});

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
    requestAllPokemon: () => dispatch(requestAllPokemon()),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(PokemonIndex);