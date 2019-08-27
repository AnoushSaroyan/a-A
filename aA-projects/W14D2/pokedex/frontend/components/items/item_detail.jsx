import React from 'react';

class ItemDetail extends React.Component {
    render(){
        const item = this.props.item;
        // debugger
        return <ul>
            <li><h3>{item.name}</h3></li>
            <li>Happines: {item.happiness}</li>
            <li>Price: {item.price}</li>
        </ul>
    }
}

export default ItemDetail;