import React from 'react';

class Tile extends React.Component {
    constructor(props) {
        super(props);
    }

    updateDisplay() {
        const tile = this.props.tile;
        let display = '';
        let className = 'tile';

        if (tile.flagged) {
            display = '\u2691';
        }

        if (tile.explored) {
            className = 'tile explored';
            if (tile.bombed) {
                display = '\u2622';
            } else { // when the tile is explored but not bombed
                let num = tile.adjacentBombCount();
                display = num === 0 ? " " : num;
            } 
        }

        return [display, className];
    }

    handleClick(event){
        // if (event.altKey) {
        //     alert('altKey is working');
        // }
        const flagged = event.altKey ? true : false;
        this.props.updateGame(this.props.tile, flagged);
    }

    render() {
        let arr = this.updateDisplay()
        let display = arr[0];
        let className = arr[1];
        return (
            <div onClick={this.handleClick.bind(this)} className={className}>{display}</div>
                // <h1>Here in Tile!</h1>
                //   <p> {"/u1F4A3"} </p>
            // <p> &#128163; </p>
            
        );
    }
}

export default Tile;