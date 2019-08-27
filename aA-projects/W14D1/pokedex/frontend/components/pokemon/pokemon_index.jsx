import React from 'react';
import PokemonIndexItem from './pokemon_index_item';
import { Route, Link, NavLink } from 'react-router-dom';


class PokemonIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.requestAllPokemon();
    }

    uniqueKey() {
        return new Date().getTime();
    }

    render() {
        const pokemon = this.props.pokemon;

        const listItems = pokemon.map((poke) => (
            // debugger
            <PokemonIndexItem poke={poke} key={poke.id} />
   
            ))
        // debugger
        return(
            <ul key={this.uniqueKey()} className="pokedex">
                {listItems}
            </ul>
        )
    }
}

export default PokemonIndex;
