import { connect } from 'react-redux';
import { selectAllPokemon } from '../../reducers/selector';
import { requestAllPokemon, requestPokemon } from '../../util/api_util';
import PokemonDetail from './pokemon_detail';

const mapStateToProps = state => ({
    pokemon: selectAllPokemon(state)
});

const mapDispatchToProps = (dispatch, ownProps) => {
    const pokemonId = ownProps.match.params.pokemonId;
    return {
        requestPokemon: () => dispatch(requestPokemon(pokemonId))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(PokemonDetail);