import React, { Component } from 'react';
import BoardBox from './BoardBox/BoardBox';
import '../Board/Board.scss';


class Board extends Component {

    state = {
        fullBoard: [null, null, null, null, null, null, null, null, null],
        playerActive: Math.round(Math.random())
    };

    clickHandler = (id) => {
        let newState = { ...this.state };
        newState.fullBoard[id] = this.state.playerActive;
        let newFullboard = newState.fullBoard;
        this.setState({ fullBoard: newFullboard });
        this.togglePlayer();
    }

    hasWon() {
        console.log('who won?')
        let boardForWin = this.state.fullBoard;
        if(boardForWin[0]===0&&boardForWin[1]===0&&boardForWin[2]===0) {
            console.log(0 + "HAS WON")
        } else if(boardForWin[3]===0&&boardForWin[4]===0&&boardForWin[5]===0) {
            console.log(0 + "HAS WON")
        } else if(boardForWin[7]===0&&boardForWin[8]===0&&boardForWin[9]===0) {
            console.log(0 + "HAS WON")
        } else if(boardForWin[0]===1&&boardForWin[1]===1&&boardForWin[2]===1) {
            console.log(1 + "HAS WON")
        } else if(boardForWin[3]===1&&boardForWin[4]===1&&boardForWin[5]===1) {
            console.log(1 + "HAS WON")
        } else if(boardForWin[7]===1&&boardForWin[8]===1&&boardForWin[9]===1) {
            console.log(1 + "HAS WON")
        } else if(boardForWin[0]===0&&boardForWin[3]===0&&boardForWin[6]===0) {
            console.log(0 + "HAS WON")
        } else if(boardForWin[1]===0&&boardForWin[4]===0&&boardForWin[7]===0) {
            console.log(0 + "HAS WON")
        } else if(boardForWin[2]===0&&boardForWin[5]===0&&boardForWin[8]===0) {
            console.log(0 + "HAS WON")
        } else if(boardForWin[0]===1&&boardForWin[3]===1&&boardForWin[6]===1) {
            console.log(1 + "HAS WON")
        } else if(boardForWin[1]===1&&boardForWin[4]===1&&boardForWin[7]===1) {
            console.log(1 + "HAS WON")
        } else if(boardForWin[2]===1&&boardForWin[5]===1&&boardForWin[8]===1) {
            console.log(1 + "HAS WON")
        } else if(boardForWin[0]===0&&boardForWin[4]===0&&boardForWin[8]===0) {
            console.log(0 + "HAS WON")
        } else if(boardForWin[2]===0&&boardForWin[4]===0&&boardForWin[7]===0) {
            console.log(0 + "HAS WON")
        } else if(boardForWin[2]===0&&boardForWin[5]===0&&boardForWin[8]===0) {
            console.log(0 + "HAS WON")
        } else if(boardForWin[0]===1&&boardForWin[3]===1&&boardForWin[6]===1) {
            console.log(1 + "HAS WON")
        } else if(boardForWin[1]===1&&boardForWin[4]===1&&boardForWin[7]===1) {
            console.log(1 + "HAS WON")
        } else if(boardForWin[2]===1&&boardForWin[5]===1&&boardForWin[8]===1) {
            console.log(1 + "HAS WON")
        } 
    }

    componentDidMount() {
        console.log(this.state.playerActive, "playa");
        if(this.state.playerActive===0) {
            this.robotMoves();
        } 
    }

    componentDidUpdate(){
        console.log('update')
        if(this.state.playerActive===0) {
            this.robotMoves();
        } else {
            console.log('adjkasjd');
        }
    }

    robotMoves() {
        console.log('robot moving');
        let indexesAvaible = [];
        this.state.fullBoard.map((box, i) => {
            if(box===null){
                indexesAvaible.push(i)
            }
            return indexesAvaible;
        });
        let position = Math.floor((Math.random() * (indexesAvaible.length-1)));
        let newBoard = [...this.state.fullBoard];
        newBoard[indexesAvaible[position]] = 0;
        this.setState({fullBoard: newBoard, playerActive: 1});
    }

    setInitialPlayer = () => {
        this.setState({ playerActive: Math.round(Math.random()) })
    }

    togglePlayer  = () => {
        let player = this.state.playerActive;
        if (player === 1) {
            this.setState({playerActive: 0})
        } else if(player === 0) {
            this.setState({playerActive: 1})
        }     
        this.hasWon();
    } 

    render() {
        let board = [];
        for (let i = 0; i < this.state.fullBoard.length; i++) {
            board.push(
                (<BoardBox click={() => this.clickHandler(i)} key={i} boxValue={this.state.fullBoard[i]}></BoardBox>)
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