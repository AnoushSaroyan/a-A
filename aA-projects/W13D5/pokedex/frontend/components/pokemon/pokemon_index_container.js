import { connect } from 'react-redux';
import { selectAllPokemon } from '../../reducers/selector';
import { requestAllPokemon } from '../../util/api_util';
import PokemonIndex from './pokemon_index';

const mapStateToProps = state => ({
    pokemon: selectAllPokemon(state)
});

const mapDispatchToProps = dispatch => ({
    requestAllPokemon: () => dispatch(requestAllPokemon())
});

export default connect(mapStateToProps, mapDispatchToProps)(PokemonIndex);