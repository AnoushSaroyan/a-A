import React from 'react';

class PokemonIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.requestAllPokemon();
    }

    render() {
        const pokemon = this.props.pokemon;

        const listItems = pokemon.map((poke, idx) => {
            // debugger
            return <li className="pokemon" key={idx + 1}>{idx + 1}
                <img src={poke.image_url}></img>
                {poke.name}
            </li>
        })
        return <ul>
            {listItems}
        </ul>
    }
}

export default PokemonIndex;
