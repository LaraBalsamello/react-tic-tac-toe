import React, { Component } from 'react';
import BoardBox from './BoardBox/BoardBox';
import '../Board/Board.scss';


class Board extends Component {

    state = {
        fullBoard: [null, null, null, null, null, null, null, null, null],
        playerActive: Math.round(Math.random()),
        enemyLastsPositions: []
    };

    clickHandler = (id) => {
        let newState = { ...this.state };
        newState.fullBoard[id] = this.state.playerActive;
        let newFullboard = newState.fullBoard;
        let positions = [...this.state.enemyLastsPositions];
        positions.push(id);
        this.setState({ fullBoard: newFullboard, enemyLastsPositions: positions });
        this.togglePlayer();
    }

    hasWon = () => {
        console.log('who won?')
        let boardForWin = this.state.fullBoard;
        if (boardForWin[0] === 0 && boardForWin[1] === 0 && boardForWin[2] === 0) {
            console.log(0 + "HAS WON")
        } else if (boardForWin[3] === 0 && boardForWin[4] === 0 && boardForWin[5] === 0) {
            console.log(0 + "HAS WON")
        } else if (boardForWin[7] === 0 && boardForWin[8] === 0 && boardForWin[9] === 0) {
            console.log(0 + "HAS WON")
        } else if (boardForWin[0] === 1 && boardForWin[1] === 1 && boardForWin[2] === 1) {
            console.log(1 + "HAS WON")
        } else if (boardForWin[3] === 1 && boardForWin[4] === 1 && boardForWin[5] === 1) {
            console.log(1 + "HAS WON")
        } else if (boardForWin[7] === 1 && boardForWin[8] === 1 && boardForWin[9] === 1) {
            console.log(1 + "HAS WON")
        } else if (boardForWin[0] === 0 && boardForWin[3] === 0 && boardForWin[6] === 0) {
            console.log(0 + "HAS WON")
        } else if (boardForWin[1] === 0 && boardForWin[4] === 0 && boardForWin[7] === 0) {
            console.log(0 + "HAS WON")
        } else if (boardForWin[2] === 0 && boardForWin[5] === 0 && boardForWin[8] === 0) {
            console.log(0 + "HAS WON")
        } else if (boardForWin[0] === 1 && boardForWin[3] === 1 && boardForWin[6] === 1) {
            console.log(1 + "HAS WON")
        } else if (boardForWin[1] === 1 && boardForWin[4] === 1 && boardForWin[7] === 1) {
            console.log(1 + "HAS WON")
        } else if (boardForWin[2] === 1 && boardForWin[5] === 1 && boardForWin[8] === 1) {
            console.log(1 + "HAS WON")
        } else if (boardForWin[0] === 0 && boardForWin[4] === 0 && boardForWin[8] === 0) {
            console.log(0 + "HAS WON")
        } else if (boardForWin[2] === 0 && boardForWin[4] === 0 && boardForWin[7] === 0) {
            console.log(0 + "HAS WON")
        } else if (boardForWin[2] === 0 && boardForWin[5] === 0 && boardForWin[8] === 0) {
            console.log(0 + "HAS WON")
        } else if (boardForWin[0] === 1 && boardForWin[3] === 1 && boardForWin[6] === 1) {
            console.log(1 + "HAS WON")
        } else if (boardForWin[1] === 1 && boardForWin[4] === 1 && boardForWin[7] === 1) {
            console.log(1 + "HAS WON")
        } else if (boardForWin[2] === 1 && boardForWin[5] === 1 && boardForWin[8] === 1) {
            console.log(1 + "HAS WON")
        } else if (boardForWin[0] === 1 && boardForWin[4] === 1 && boardForWin[8] === 1) {
            console.log(1 + "HAS WON")
        } else if (boardForWin[2] === 1 && boardForWin[4] === 1 && boardForWin[6] === 1) {
            console.log(1 + "HAS WON")
        } else if (boardForWin[0] === 0 && boardForWin[4] === 0 && boardForWin[8] === 0) {
            console.log(0 + "HAS WON")
        } else if (boardForWin[2] === 0 && boardForWin[4] === 0 && boardForWin[6] === 0) {
            console.log(0 + "HAS WON")
        }
    }

    componentDidMount() {
        console.log(this.state.playerActive, "playa");
        if (this.state.playerActive === 0) {
            this.robotMoves();
        }
    }

    componentDidUpdate() {
        console.log('update')
        if (this.state.playerActive === 0) {
            this.robotMoves();
        } else {
            console.log('player turn');
        }
    }

    robotMoves = () => {
        this.analizeBoard();
    }

    moveRandomly = (indexesAvailable) => {
        let position = Math.floor((Math.random() * (indexesAvailable.length - 1)));
        let newBoard = [...this.state.fullBoard];
        newBoard[indexesAvailable[position]] = 0;
        this.setState({ fullBoard: newBoard, playerActive: 1 });
        console.log('ofense')
    }

    ///_______________________________________________________________________

    analizeBoard() {
        let indexesAvailable = [];
        this.state.fullBoard.map((box, i) => {
            if (box === null) {
                indexesAvailable.push(i)
            }
            return indexesAvailable;
        });
        let cloneEnemy = [...this.state.enemyLastsPositions];
        let enemy = [];
        let positionLast = cloneEnemy.length - 2;
        let positionBLast = cloneEnemy.length - 1;
        enemy.push(cloneEnemy[positionLast]);
        enemy.push(cloneEnemy[positionBLast]);
        if (enemy.length <= 1) {
            this.moveRandomly(indexesAvailable);
        } else {
            if (enemy[0] === 0 && enemy[1] === 1) {
                this.moveRobotSetNewBoard(2, indexesAvailable);
            } else if (enemy[0] === 1 && enemy[1] === 0) {
                this.moveRobotSetNewBoard(2, indexesAvailable);
            } else if (enemy[0] === 1 && enemy[1] === 2) {
                this.moveRobotSetNewBoard(0, indexesAvailable);
            } else if (enemy[0] === 2 && enemy[1] === 1) {
                this.moveRobotSetNewBoard(0, indexesAvailable);
            } else if (enemy[0] === 3 && enemy[1] === 4) {
                this.moveRobotSetNewBoard(5, indexesAvailable);
            } else if (enemy[0] === 4 && enemy[1] === 3) {
                this.moveRobotSetNewBoard(5, indexesAvailable);
            } else if (enemy[0] === 4 && enemy[1] === 5) {
                this.moveRobotSetNewBoard(3, indexesAvailable)
            } else if (enemy[0] === 5 && enemy[1] === 4) {
                this.moveRobotSetNewBoard(3, indexesAvailable);
            } else if (enemy[0] === 6 && enemy[1] === 7) {
                this.moveRobotSetNewBoard(8, indexesAvailable);
            } else if (enemy[0] === 7 && enemy[1] === 6) {
                this.moveRobotSetNewBoard(8, indexesAvailable);
            } else if (enemy[0] === 7 && enemy[1] === 8) {
                this.moveRobotSetNewBoard(6, indexesAvailable)
            } else if (enemy[0] === 8 && enemy[1] === 7) {
                this.moveRobotSetNewBoard(6, indexesAvailable);
            } else if (enemy[0] + 3 === enemy[1] && enemy[1] + 3 <= 8) {
                let moveTo = enemy[1] + 3;
                this.moveRobotSetNewBoard(moveTo, indexesAvailable);
            } else if (enemy[1] + 3 === enemy[0] && enemy[0] + 3 <= 8) {
                let moveTo = enemy[0] + 3;
                this.moveRobotSetNewBoard(moveTo, indexesAvailable);
            } else if (enemy[0] - 3 === enemy[1] && enemy[1] - 3 >= 0) {
                let moveTo = enemy[1] - 3;
                this.moveRobotSetNewBoard(moveTo, indexesAvailable);
            } else if (enemy[1] - 3 === enemy[0] && enemy[0] - 3 >= 0) {
                let moveTo = enemy[0] - 3;
                this.moveRobotSetNewBoard(moveTo, indexesAvailable);
            } else if (enemy[0] + 2 === enemy[1] && enemy[0] + 1 <= 8 && enemy[0] + 1 <= 8) {
                let moveTo = enemy[0] + 1;
                this.moveRobotSetNewBoard(moveTo, indexesAvailable);
            } else if (enemy[1] + 2 === enemy[0] && enemy[1] + 1 <= 8) {
                let moveTo = enemy[1] + 1;
                this.moveRobotSetNewBoard(moveTo, indexesAvailable);
            } else if (enemy[0] - 2 === enemy[1] && enemy[1] + 1 >= 0) {
                let moveTo = enemy[1] + 1;
                this.moveRobotSetNewBoard(moveTo, indexesAvailable);
            } else if (enemy[1] - 2 === enemy[0] && enemy[0] + 1 >= 0) {
                let moveTo = enemy[0] + 1;
                this.moveRobotSetNewBoard(moveTo, indexesAvailable);
            } else if (enemy[0] + 6 === enemy[1] && enemy[0] + 3 <= 8) {
                let moveTo = enemy[0] + 3;
                this.moveRobotSetNewBoard(moveTo, indexesAvailable);
            } else if (enemy[1] + 6 === enemy[0] && enemy[1] + 3 <= 8) {
                let moveTo = enemy[1] + 3;
                this.moveRobotSetNewBoard(moveTo, indexesAvailable);
            } else if (enemy[0] - 6 === enemy[1] && enemy[1] - 3 >= 0) {
                let moveTo = enemy[1] - 3;
                this.moveRobotSetNewBoard(moveTo, indexesAvailable);
            } else if (enemy[1] - 6 === enemy[0] && enemy[0] - 3 >= 0) {
                let moveTo = enemy[0] - 3;
                this.moveRobotSetNewBoard(moveTo, indexesAvailable);
            } else if (enemy[0] === 0 && enemy[1] === 4) {
                this.moveRobotSetNewBoard(8, indexesAvailable);
            } else if (enemy[0] === 4 && enemy[1] === 0) {
                this.moveRobotSetNewBoard(8, indexesAvailable);
            } else if (enemy[0] === 4 && enemy[1] === 8) {
                this.moveRobotSetNewBoard(0, indexesAvailable);
            } else if (enemy[0] === 8 && enemy[1] === 4) {
                this.moveRobotSetNewBoard(0, indexesAvailable);
            } else if (enemy[0] === 6 && enemy[1] === 2) {
                this.moveRobotSetNewBoard(4, indexesAvailable)
            } else if (enemy[1] === 6 || enemy[0] === 2) {
                this.moveRobotSetNewBoard(4, indexesAvailable)
            } else if (enemy[0] === 0 && enemy[1] === 8) {
                this.moveRobotSetNewBoard(4, indexesAvailable)
            } else if (enemy[1] === 0 || enemy[0] === 8) {
                this.moveRobotSetNewBoard(4, indexesAvailable)
            } else {
                this.moveRandomly(indexesAvailable);
            }
        }

    }

    moveRobotSetNewBoard = (index, indexesAvailable) => {
        console.log(indexesAvailable)
        for (let i = 0; i < indexesAvailable.length; i++) {
            const element = indexesAvailable[i];
            if(element === index){
                let newBoard = [...this.state.fullBoard];
                newBoard[index] = 0;
                this.setState({ fullBoard: newBoard, playerActive: 1 });
                break;
            } else if(i === index.length){
                console.log('not found')
                this.moveRandomly(indexesAvailable);
            }
        }
    }

    setInitialPlayer = () => {
        this.setState({ playerActive: Math.round(Math.random()) })
    }

    togglePlayer = () => {
        let player = this.state.playerActive;
        if (player === 1) {
            this.setState({ playerActive: 0 })
        } else if (player === 0) {
            this.setState({ playerActive: 1 })
        }
    }

    render() {
        this.hasWon();
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