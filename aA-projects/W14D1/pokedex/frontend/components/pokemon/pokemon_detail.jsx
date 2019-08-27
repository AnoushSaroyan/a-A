import React from 'react';

class PokemonDetail extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount() {
        this.props.requestPokemon(this.ownProps.match.params.pokemonId); // i guess
    }

    rnderender(){

    }
}

export default PokemonDetail;