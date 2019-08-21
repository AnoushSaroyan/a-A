import React from 'react';
import * as Minesweeper from '../minesweeper'
import Board from './board'

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = { board: new Minesweeper.Board(9, 10) };
        this.updateGame = this.updateGame.bind(this);
    }

    updateGame(tile, flagged) {
        if (flagged) {
            // debugger;
            tile.toggleFlag();
            // debugger;
        } else {
            tile.explore();
        }

        this.setState({ board: this.state.board });
    }

    // ToDo::: Modal 
    restartGame() {
        this.setState({ board: new Minesweeper.Board(9, 10) });
    }

    render() {
        return (
            <div>
                
                <Board board={this.state.board} updateGame={this.updateGame}/>
            </div>
        );
    }
}

export default Game;