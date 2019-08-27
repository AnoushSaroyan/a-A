import React from 'react';
import ItemDetailContainer from "../items/item_detail_container";
import { HashRouter, Route } from "react-router-dom";
import Item from "../items/item";

class PokemonDetail extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount() {
        this.props.requestSinglePokemon(this.props.match.params.pokemonId); 
    }

    componentDidUpdate(prevState) {
        if (prevState.match.params.pokemonId !== this.props.match.params.pokemonId || this.props.pokemon.attack === undefined) {
            this.props.requestSinglePokemon(this.props.match.params.pokemonId);     
        }
    }

    render(){
        const pokemon = this.props.pokemon;
        const items = this.props.items;
        // if (pokemon) {
        // const moves = pokemon.moves.join(", ")
        // }

        if (!pokemon) return <div>Loading</div>
        // debugger
        return <section className="pokemon-detail">
            <figure>
                <img src={pokemon.image_url}></img>
            </figure>
            <ul>
                <li><h2>{pokemon.name}</h2></li>
                <li>Type: {pokemon.poke_type}</li>
                <li>Attack: {pokemon.attack}</li>
                <li>Defense:{pokemon.defense} </li>
                <li>Moves: {pokemon.moves.join(", ")}</li>
            </ul>
            <section className="items-section">
                <ul className="items">
                    {items.map(item => (
                        <Item item={item} key={item.id}/>
                        ))}       
                </ul>
                        <Route path="/pokemon/:pokemonId/item/:itemId" component={ItemDetailContainer} />
            </section>
        </section>
    }
}

export default PokemonDetail;