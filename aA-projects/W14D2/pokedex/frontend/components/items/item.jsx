import React from 'react';
import { Link } from 'react-router-dom';

class Item extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const test = `/pokemon/${this.props.item.pokemon_id}/item/${this.props.item.id}`
        // debugger
        return <li>
            <Link to={`/pokemon/${this.props.item.pokemon_id}/item/${this.props.item.id}`}>
                <img src={this.props.item.image_url} />
            </Link>
        </li>
    }
}

export default Item;
