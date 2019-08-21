import React from 'react';
import Tile from './tile'

class Board extends React.Component {
    constructor(props) { 
        super(props);
        // this.props.board and this.props.updateGame
    }

    render() {
        return (
            <div className='board'>
                {
                    this.props.board.grid.map(
                        (row, idx) => <div className="row" key={`row-${idx}`}>
                            { 
                                row.map(
                                    (cell, cellIdx) => <div key={`${idx}-${cellIdx}`}>
                                        <Tile tile={cell} updateGame={this.props.updateGame}/>
                                    </div>
                                )
                            }
                        </div>
                    )
                }
            </div>
        );
    }
}

export default Board;