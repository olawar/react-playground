import React from 'react';
import Square from '../Square/Square.js';

export default class Board extends React.Component {
    renderSquare(i) {
        return (
            <Square
                key={i}
                state={(this.props.winners && this.props.winners.indexOf(i) > -1) ? 'win' : ''}
                value={this.props.squares[i]}
                active={!this.props.winners && this.props.active === i ? 'active' : ''}
                onClick={() => this.props.onClick(i)}
            />
        );
    }

    render() {
        let boardLength = 3;
        return (
            <div>
                {[...Array(boardLength)].map((x, i) =>
                    <div key={i} className="board-row">
                        {[...Array(boardLength)].map((y, j) =>
                            this.renderSquare(j + i * boardLength)
                        )}
                    </div>
                )}
            </div>
        );
    }
}