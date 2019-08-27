import React from 'react';
import { Link } from "react-router-dom";

class PokemonIndexItem extends React.Component {
    constructor(props) { 
        super(props)
    }
        // debugger
        render () { 
            return (
                <li className="pokemon">
                    <Link to={`/pokemon/${this.props.poke.id}`}>
                    {this.props.poke.id}
                    <img src={this.props.poke.image_url}></img>
                    {this.props.poke.name}
                    </Link>
                </li>
            )
        }
}


export default PokemonIndexItem;