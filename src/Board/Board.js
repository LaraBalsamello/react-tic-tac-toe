import React, { Component } from 'react';
import BoardBox from './BoardBox/BoardBox';
import '../Board/Board.scss';


class Board extends Component {

    state = {
        fullBoard: ["0", null, "2", null, null, null, "1", null, null]
    };



    render() {
        let board = [];
        for (let i = 0; i < this.state.fullBoard.length; i++) {
            board.push(
                (<BoardBox key={i} boxValue={this.state.fullBoard[i]}></BoardBox>)   
            );
        }
        return (
            <div className="full-board">
                {board}
            </div>
        )
    }
}

export default Board;