import React from 'react';
import PokemonIndexItem from './pokemon_index_item';
import { Route, Link, NavLink } from 'react-router-dom';
import PokemonDetailContainer from "./pokemon_detail_container";
import PokemonFormContainer from "./pokemon_form_container"


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
        return (<section className="pokedex">
                <Route path="/" component={PokemonFormContainer} />
                <ul key={this.uniqueKey()}>
                    {listItems}
                </ul>
                <Route path="/pokemon/:pokemonId" component={PokemonDetailContainer} />
            </section>
        )
    }
}

export default PokemonIndex;
